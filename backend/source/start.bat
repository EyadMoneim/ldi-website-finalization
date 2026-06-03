@echo off
echo.
echo  ===================================
echo   LDI - Starting Server...
echo  ===================================
echo.

REM Install dependencies
echo Installing required packages...
py -m pip install fastapi "uvicorn[standard]" python-multipart aiofiles --quiet

echo.
echo  Server starting...
echo  Website:    http://localhost:8000
echo  Admin Panel: http://localhost:8000/admin
echo.
echo  DO NOT close this window!
echo.

py main.py

pause
