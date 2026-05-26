"""
LDI Admin Panel - FastAPI Backend
Secure admin-only panel for managing Activities and Clients
Production-ready for Railway.app deployment
"""

from fastapi import FastAPI, Depends, HTTPException, status, UploadFile, File, Form, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import os
import shutil
import uuid
import json
from datetime import datetime, timedelta
from typing import Optional, List
from pathlib import Path
import hashlib
import hmac
import base64
import time

app = FastAPI(title="LDI Admin Panel", version="1.0.0")

# ─── CORS ─────────────────────────────────────────────────────────────────
# Allow your Netlify site + localhost for development
ALLOWED_ORIGINS = os.environ.get("ALLOWED_ORIGINS", "*").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── CONFIG ──────────────────────────────────────────────────────────────
BASE_DIR = Path(__file__).parent          # backend/source/
PROJECT_DIR = BASE_DIR.parent.parent      # LDI-project/
DB_PATH = Path(os.environ.get("DB_PATH", str(BASE_DIR.parent / "database" / "ldi_admin.db")))
UPLOADS_DIR = Path(os.environ.get("UPLOADS_DIR", str(BASE_DIR.parent / "uploads")))
ACTIVITIES_DIR = UPLOADS_DIR / "activities"
CLIENTS_DIR = UPLOADS_DIR / "clients"

# IMPORTANT: Set a strong SECRET_KEY in Railway environment variables!
SECRET_KEY = os.environ.get("SECRET_KEY", "ldi-super-secret-key-change-in-production-2024")
ADMIN_USERNAME = os.environ.get("ADMIN_USERNAME", "admin")
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "admin123")

# Create directories
ACTIVITIES_DIR.mkdir(parents=True, exist_ok=True)
CLIENTS_DIR.mkdir(parents=True, exist_ok=True)

# ─── DATABASE ─────────────────────────────────────────────────────────────
def get_db():
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    c = conn.cursor()
    
    c.execute("""
        CREATE TABLE IF NOT EXISTS admins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            created_at TEXT DEFAULT (datetime('now'))
        )
    """)
    
    c.execute("""
        CREATE TABLE IF NOT EXISTS activities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title_ar TEXT NOT NULL,
            title_en TEXT,
            description_ar TEXT,
            description_en TEXT,
            date TEXT NOT NULL,
            image_url TEXT,
            link TEXT,
            display_order INTEGER DEFAULT 0,
            created_at TEXT DEFAULT (datetime('now')),
            updated_at TEXT DEFAULT (datetime('now'))
        )
    """)
    
    c.execute("""
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            logo_url TEXT,
            category TEXT DEFAULT 'active',
            display_order INTEGER DEFAULT 0,
            created_at TEXT DEFAULT (datetime('now'))
        )
    """)
    
    # Create default admin from env vars
    c.execute("SELECT COUNT(*) FROM admins")
    if c.fetchone()[0] == 0:
        default_password = hash_password(ADMIN_PASSWORD)
        c.execute("INSERT INTO admins (username, password_hash) VALUES (?, ?)",
                  (ADMIN_USERNAME, default_password))
        print(f"✅ Default admin created: username={ADMIN_USERNAME}")
        print("   ⚠️  Change ADMIN_PASSWORD env variable in Railway!")
    
    conn.commit()
    conn.close()

# ─── AUTH HELPERS ──────────────────────────────────────────────────────────
def hash_password(password: str) -> str:
    salt = "ldi_salt_2024"
    return hashlib.sha256(f"{salt}{password}".encode()).hexdigest()

def create_token(admin_id: int) -> str:
    payload = f"{admin_id}:{int(time.time() + 86400)}"
    token = base64.b64encode(payload.encode()).decode()
    sig = hmac.new(SECRET_KEY.encode(), token.encode(), hashlib.sha256).hexdigest()
    return f"{token}.{sig}"

def verify_token(token: str) -> Optional[int]:
    try:
        parts = token.split(".")
        if len(parts) != 2:
            return None
        payload_b64, sig = parts
        expected_sig = hmac.new(SECRET_KEY.encode(), payload_b64.encode(), hashlib.sha256).hexdigest()
        if not hmac.compare_digest(sig, expected_sig):
            return None
        payload = base64.b64decode(payload_b64).decode()
        admin_id, exp = payload.split(":")
        if int(exp) < int(time.time()):
            return None
        return int(admin_id)
    except:
        return None

security = HTTPBearer(auto_error=False)

def get_current_admin(credentials: HTTPAuthorizationCredentials = Depends(security)):
    if not credentials:
        raise HTTPException(status_code=401, detail="Not authenticated")
    admin_id = verify_token(credentials.credentials)
    if not admin_id:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    conn = get_db()
    admin = conn.execute("SELECT * FROM admins WHERE id = ?", (admin_id,)).fetchone()
    conn.close()
    if not admin:
        raise HTTPException(status_code=401, detail="Admin not found")
    return dict(admin)

# ─── STATIC FILES ─────────────────────────────────────────────────────────
app.mount("/uploads", StaticFiles(directory=str(UPLOADS_DIR)), name="uploads")

# Serve the website
website_dir = PROJECT_DIR / "frontend" / "website"
if website_dir.exists():
    app.mount("/website", StaticFiles(directory=str(website_dir)), name="website")

# ─── AUTH ROUTES ──────────────────────────────────────────────────────────
@app.post("/api/auth/login")
async def login(username: str = Form(...), password: str = Form(...)):
    conn = get_db()
    admin = conn.execute(
        "SELECT * FROM admins WHERE username = ? AND password_hash = ?",
        (username, hash_password(password))
    ).fetchone()
    conn.close()
    
    if not admin:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_token(admin["id"])
    return {"token": token, "username": admin["username"]}

@app.post("/api/auth/change-password")
async def change_password(
    current_password: str = Form(...),
    new_password: str = Form(...),
    admin=Depends(get_current_admin)
):
    conn = get_db()
    if admin["password_hash"] != hash_password(current_password):
        conn.close()
        raise HTTPException(status_code=400, detail="Current password is incorrect")
    conn.execute(
        "UPDATE admins SET password_hash = ? WHERE id = ?",
        (hash_password(new_password), admin["id"])
    )
    conn.commit()
    conn.close()
    return {"message": "Password changed successfully"}

@app.get("/api/auth/me")
async def get_me(admin=Depends(get_current_admin)):
    return {"username": admin["username"], "id": admin["id"]}

# ─── ACTIVITIES ROUTES ─────────────────────────────────────────────────────
@app.get("/api/activities")
async def get_activities(admin=Depends(get_current_admin)):
    conn = get_db()
    activities = conn.execute(
        "SELECT * FROM activities ORDER BY display_order DESC, date DESC"
    ).fetchall()
    conn.close()
    return [dict(a) for a in activities]

@app.get("/api/activities/public")
async def get_activities_public():
    """Public endpoint - no auth needed - for the website to fetch activities"""
    conn = get_db()
    activities = conn.execute(
        "SELECT * FROM activities ORDER BY display_order DESC, date DESC"
    ).fetchall()
    conn.close()
    return [dict(a) for a in activities]

@app.post("/api/activities")
async def create_activity(
    title_ar: str = Form(...),
    title_en: str = Form(""),
    description_ar: str = Form(""),
    description_en: str = Form(""),
    date: str = Form(...),
    link: str = Form(""),
    display_order: int = Form(0),
    image: Optional[UploadFile] = File(None),
    image_url_input: str = Form(""),
    admin=Depends(get_current_admin)
):
    image_url = ""
    if image and image.filename:
        ext = Path(image.filename).suffix.lower()
        if ext not in [".jpg", ".jpeg", ".png", ".gif", ".webp"]:
            raise HTTPException(status_code=400, detail="Invalid image format")
        filename = f"{uuid.uuid4()}{ext}"
        filepath = ACTIVITIES_DIR / filename
        with open(filepath, "wb") as f:
            content = await image.read()
            f.write(content)
        # Return full URL so website can fetch images from Railway
        base_url = os.environ.get("BASE_URL", "")
        image_url = f"{base_url}/uploads/activities/{filename}"
    elif image_url_input.strip():
        image_url = image_url_input.strip()
    
    conn = get_db()
    cursor = conn.execute(
        """INSERT INTO activities 
           (title_ar, title_en, description_ar, description_en, date, image_url, link, display_order)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
        (title_ar, title_en, description_ar, description_en, date, image_url, link, display_order)
    )
    activity_id = cursor.lastrowid
    conn.commit()
    activity = conn.execute("SELECT * FROM activities WHERE id = ?", (activity_id,)).fetchone()
    conn.close()
    return dict(activity)

@app.put("/api/activities/{activity_id}")
async def update_activity(
    activity_id: int,
    title_ar: str = Form(...),
    title_en: str = Form(""),
    description_ar: str = Form(""),
    description_en: str = Form(""),
    date: str = Form(...),
    link: str = Form(""),
    display_order: int = Form(0),
    image: Optional[UploadFile] = File(None),
    image_url_input: str = Form(""),
    admin=Depends(get_current_admin)
):
    conn = get_db()
    existing = conn.execute("SELECT * FROM activities WHERE id = ?", (activity_id,)).fetchone()
    if not existing:
        conn.close()
        raise HTTPException(status_code=404, detail="Activity not found")
    
    image_url = existing["image_url"]
    if image and image.filename:
        ext = Path(image.filename).suffix.lower()
        if ext not in [".jpg", ".jpeg", ".png", ".gif", ".webp"]:
            raise HTTPException(status_code=400, detail="Invalid image format")
        filename = f"{uuid.uuid4()}{ext}"
        filepath = ACTIVITIES_DIR / filename
        with open(filepath, "wb") as f:
            content = await image.read()
            f.write(content)
        base_url = os.environ.get("BASE_URL", "")
        image_url = f"{base_url}/uploads/activities/{filename}"
    elif image_url_input.strip():
        image_url = image_url_input.strip()
    
    conn.execute(
        """UPDATE activities SET 
           title_ar=?, title_en=?, description_ar=?, description_en=?,
           date=?, image_url=?, link=?, display_order=?, updated_at=datetime('now')
           WHERE id=?""",
        (title_ar, title_en, description_ar, description_en, date, image_url, link, display_order, activity_id)
    )
    conn.commit()
    activity = conn.execute("SELECT * FROM activities WHERE id = ?", (activity_id,)).fetchone()
    conn.close()
    return dict(activity)

@app.delete("/api/activities/{activity_id}")
async def delete_activity(activity_id: int, admin=Depends(get_current_admin)):
    conn = get_db()
    existing = conn.execute("SELECT * FROM activities WHERE id = ?", (activity_id,)).fetchone()
    if not existing:
        conn.close()
        raise HTTPException(status_code=404, detail="Activity not found")
    
    conn.execute("DELETE FROM activities WHERE id = ?", (activity_id,))
    conn.commit()
    conn.close()
    return {"message": "Activity deleted"}

# ─── CLIENTS ROUTES ────────────────────────────────────────────────────────
@app.get("/api/clients")
async def get_clients(admin=Depends(get_current_admin)):
    conn = get_db()
    clients = conn.execute(
        "SELECT * FROM clients ORDER BY category, display_order ASC, name ASC"
    ).fetchall()
    conn.close()
    return [dict(c) for c in clients]

@app.get("/api/clients/public")
async def get_clients_public():
    """Public endpoint for website"""
    conn = get_db()
    clients = conn.execute(
        "SELECT * FROM clients ORDER BY category, display_order ASC, name ASC"
    ).fetchall()
    conn.close()
    return [dict(c) for c in clients]

@app.post("/api/clients")
async def create_client(
    name: str = Form(...),
    category: str = Form("active"),
    logo_url_external: str = Form(""),
    display_order: int = Form(0),
    logo: Optional[UploadFile] = File(None),
    admin=Depends(get_current_admin)
):
    logo_url = logo_url_external
    if logo and logo.filename:
        ext = Path(logo.filename).suffix.lower()
        if ext not in [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]:
            raise HTTPException(status_code=400, detail="Invalid image format")
        filename = f"{uuid.uuid4()}{ext}"
        filepath = CLIENTS_DIR / filename
        with open(filepath, "wb") as f:
            content = await logo.read()
            f.write(content)
        base_url = os.environ.get("BASE_URL", "")
        logo_url = f"{base_url}/uploads/clients/{filename}"
    
    conn = get_db()
    cursor = conn.execute(
        "INSERT INTO clients (name, logo_url, category, display_order) VALUES (?, ?, ?, ?)",
        (name, logo_url, category, display_order)
    )
    client_id = cursor.lastrowid
    conn.commit()
    client = conn.execute("SELECT * FROM clients WHERE id = ?", (client_id,)).fetchone()
    conn.close()
    return dict(client)

@app.put("/api/clients/{client_id}")
async def update_client(
    client_id: int,
    name: str = Form(...),
    category: str = Form("active"),
    logo_url_external: str = Form(""),
    display_order: int = Form(0),
    logo: Optional[UploadFile] = File(None),
    admin=Depends(get_current_admin)
):
    conn = get_db()
    existing = conn.execute("SELECT * FROM clients WHERE id = ?", (client_id,)).fetchone()
    if not existing:
        conn.close()
        raise HTTPException(status_code=404, detail="Client not found")
    
    logo_url = logo_url_external if logo_url_external else existing["logo_url"]
    
    if logo and logo.filename:
        ext = Path(logo.filename).suffix.lower()
        if ext not in [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]:
            raise HTTPException(status_code=400, detail="Invalid image format")
        filename = f"{uuid.uuid4()}{ext}"
        filepath = CLIENTS_DIR / filename
        with open(filepath, "wb") as f:
            content = await logo.read()
            f.write(content)
        base_url = os.environ.get("BASE_URL", "")
        logo_url = f"{base_url}/uploads/clients/{filename}"
    
    conn.execute(
        "UPDATE clients SET name=?, logo_url=?, category=?, display_order=? WHERE id=?",
        (name, logo_url, category, display_order, client_id)
    )
    conn.commit()
    client = conn.execute("SELECT * FROM clients WHERE id = ?", (client_id,)).fetchone()
    conn.close()
    return dict(client)

@app.delete("/api/clients/{client_id}")
async def delete_client(client_id: int, admin=Depends(get_current_admin)):
    conn = get_db()
    existing = conn.execute("SELECT * FROM clients WHERE id = ?", (client_id,)).fetchone()
    if not existing:
        conn.close()
        raise HTTPException(status_code=404, detail="Client not found")
    
    conn.execute("DELETE FROM clients WHERE id = ?", (client_id,))
    conn.commit()
    conn.close()
    return {"message": "Client deleted"}

# ─── STATS ─────────────────────────────────────────────────────────────────
@app.get("/api/stats")
async def get_stats(admin=Depends(get_current_admin)):
    conn = get_db()
    activities_count = conn.execute("SELECT COUNT(*) FROM activities").fetchone()[0]
    clients_count = conn.execute("SELECT COUNT(*) FROM clients").fetchone()[0]
    categories = conn.execute("SELECT category, COUNT(*) as cnt FROM clients GROUP BY category").fetchall()
    conn.close()
    return {
        "activities": activities_count,
        "clients": clients_count,
        "client_categories": {row["category"]: row["cnt"] for row in categories}
    }

# ─── SERVE ADMIN PANEL ─────────────────────────────────────────────────────
@app.get("/admin", response_class=HTMLResponse)
async def serve_admin():
    admin_html = PROJECT_DIR / "frontend" / "admin" / "index.html"
    if admin_html.exists():
        return HTMLResponse(admin_html.read_text(encoding="utf-8"))
    return HTMLResponse("<h1>Admin panel not found</h1>", status_code=404)

@app.get("/", response_class=HTMLResponse)
async def root():
    # Redirect to website home page
    website_home = PROJECT_DIR / "frontend" / "website" / "index.html"
    if website_home.exists():
        return HTMLResponse(website_home.read_text(encoding="utf-8"))
    return HTMLResponse("""
    <html><body style="font-family:Cairo,sans-serif;text-align:center;padding:50px;background:#0a1628;color:#d4a017">
    <h1>LDI Admin System</h1>
    <p><a href="/admin" style="color:#d4a017">Go to Admin Panel →</a></p>
    <p><a href="/website/index.html" style="color:#d4a017">Go to Website →</a></p>
    </body></html>
    """)

# ─── STARTUP ───────────────────────────────────────────────────────────────
@app.on_event("startup")
async def startup():
    init_db()
    print("✅ LDI Admin Panel started")
    print(f"📊 Admin Panel: /admin")
    print(f"📡 API Docs: /docs")

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
