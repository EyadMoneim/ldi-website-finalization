// =====================================================
// =================== TEXT CONTENT ====================
// =====================================================
const texts = {
  ar: {
    // === Navbar ===
    navhome: "الرئيسية",
    nav1: "من نحن",
    // عناصر القائمة المنسدلة الجديدة
    nav1_sub1: "تاريخنا",
    nav1_sub2: "مجلس الإدارة",
    nav1_sub3: "هيكل المعهد",

    nav2: "الأنشطة",
    nav3: "اتصل بنا",
    nav4: "شركاؤنا",
    // === General Titles ===
    title1: "معهد إعداد القادة",
    title2: "من نحن",
    title3: "الأنشطة",
    title4: "اتصل بنا",
    title5: "شركاؤنا",
    title6: "تاريخنا | معهد إعداد القادة",
    title7: "مجلس الادارة | معهد إعداد القادة",
    title8: "هيكل المعهد | معهد إعداد القادة",
    title9: "الفريق التقني | معهد إعداد القادة",

    // === Organizational Structure ===
    "org-chart-title": "",
    "minister-box": "وزير التعليم العالي<br>والبحث والعلمي",
    "director-box": "مدير المعهد",
    "secretary-box": "أمين المعهد",
    "deputy-box": "وكلاء المعهد",
    "activities-manager-box": "مسئولي الأنشطة",
    "assistant-secretary-box": "أمين مساعد المعهد",
    "admin-affairs-box": "ادارة<br>الحدائق",
    "hr-box": "إدارة<br>الاسكان",
    "it-box": "مسئول<br>تكنولوجيا<br>المعلومات",
    "security-box": "الأمن",
    "salaries-media-box": "الاعلام",
    "planning-box": "إدارة<br>التخطيط",
    "maintenance-box": "إدارة<br>الصيانة",
    "human-box": "إدارة<br>التغذية",
    "gardens-box": "إدارة<br>الحدائق",
    "financial-affairs-box": "الشئون المالية",
    "purchases-box": "المشتريات",
    "warehouses-box": "المخازن",
    "accounts-box": "الحسابات",

    // ===farah===
    ministry_title: "وزارة التعليم العالي والبحث العلمي",
    institute_name: "معهد إعداد القادة",
    header_desc: "صرحٌ وطني عريق.. يمتد تاريخه لأكثر من قرن من الزمان",

    // === Home Page ===
    title: "مرحبا بك في معهد إعداد القادة",
    description: "وطن بداخل وطن",
    section1: "نحن فريق متخصص في إعداد القادة.",
    section2: "نطمح لتطوير القيادات المستقبلية.",
    section3: "انضم إلينا لتتعلم كيف تصبح قائدًا ناجحًا.",

    // === Partners Page (New) ===
    partners_intro_title: "شراكات فعالة",
    partners_intro_desc:
      "يؤمن معهد إعداد القادة بأن النجاح الحقيقي يبدأ من التعاون، لذلك يحرص على بناء شراكات فعّالة مع مؤسسات وهيئات مختلفة، وعلى رأسها الجامعات الحكومية والأهلية، التي تشاركه نفس الرؤية والرسالة في دعم الشباب وبناء القيادات. وتسهم هذه الشراكات في تبادل الخبرات، وتطوير البرامج التدريبية، وإتاحة فرص حقيقية تمكّن الشباب من صقل مهاراتهم وتعزيز دورهم في المشاركة الفعالة بخدمة المجتمع.",
    partners_intro_desc2:
      "ينظم معهد إعداد القادة العديد من الأنشطة التي تهدف إلى تطوير مهارات القيادة لدى الشباب. تشمل هذه الأنشطة ورش عمل، جلسات تدريبية، وبرامج خدمة المجتمع التي تمكّن الشباب من تولي أدوار قيادية بفعالية.",
    partners_intro_title2: "أنشطتنا",
    active_partners: "شركاؤنا الفعليين",
    txt_gov_uni: "الجامعات الحكومية",
    txt_private_uni: "الجامعات الخاصة",
    txt_national_uni: "الجامعات الأهلية",

    // === About Page Data ===
    cd_who: "من نحن",
    cd_vision: "رؤيتنا",
    cd_mission: "رسالتنا",
    cd_programs: "برامج المعهد",
    cd_targets: "الفئات المستهدفة",
    cd_achievements: "إنجازاتنا",

    Who_We_Are: [
      "المعهد يهتم بإعداد الشباب ليصبحوا قادة فعالين في المجتمع.",
      "نهدف لاكتشاف القدرات الكامنة لدى الشباب وتنميتها.",
    ],
    Our_Vision:
      "إعداد جيل واعٍ قادر على القيادة وإحداث التغيير الإيجابي، من خلال تنمية الفكر والمهارات والوعي الوطني.",
    Our_Mission: [
      "تقديم برامج تدريبية متكاملة لتطوير مهارات القيادة.",
      "تنمية القدرات الشخصية وغرس القيم الأخلاقية والوطنية.",
    ],
    Institute_Programs: [
      "يقدم المعهد برامج متنوعة لتطوير مهارات الشباب.",
      "تركز البرامج على:",
      "1- مهارات القيادة والتواصل",
      "2- مهارات العمل الجماعي",
      "3- التفكير الإبداعي وحل المشكلات",
    ],
    Target_Groups: [
      "1- طلاب الجامعات",
      "2- الشباب القادة",
      "3- المهتمون بالتطوير الذاتي",
    ],
    Our_Achievements:
      "المساهمة في إعداد كوادر قيادية مؤهلة، وتنفيذ برامج وأنشطة شبابية مؤثرة أسهمت في تنمية الوعي.",
    Our_Slogan: "القيادة – المسؤولية – التميز – التعاون – الانتماء",
    Our_Partners: "",

    // === Slogan Animation (NEW) ===
    slogan_prefix: "نحن نتميز بـ",
    slogan_word1: "القيادة",
    slogan_word2: "المسؤولية",
    slogan_word3: "الشجاعة",
    slogan_word4: "التعاون",
    slogan_word5: "الانتماء",

    // === Footer Data ===
    Contact_Us: "تواصل معنا",
    Address: "معهد إعداد القادة، حلوان – نهاية شارع عبدالله باشا – عين حلوان",
    Phone: "25553735 – 25553734",
    Email: "info@ldi.eg",

    logo_title: "معهد إعداد القادة",
    logo_slogan: "وطن بداخل وطن",
    follow_us_title: "تابعنا على",
    important_links_title: "روابط هامة",

    // Footer Link Titles
    ft_contact_title: "اتصل بنا الآن",
    ft_links_title: "روابط هامة",
    ft_follow_title: "تابعنا",
    fl_about: "من نحن",
    fl_activities: "الأنشطة",
    fl_contact: "اتصل بنا",

    important_links: [
      { text: "المجلس الاعلي للجامعات", href: "https://scu.eg/" },
      { text: "مجلس ادارة المعهد", href: "board_index.html" },
      { text: "الفريق التقني", href: "tech_team.html" },
      { text: "شركاؤنا", href: "clients_index.html" },
    ],

    // === Icons (HTML Strings) ===
    location_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkI0EwG0U8pXjzdtMN3RAgC7lkfnEHZUo0Bx2w" class="contact-icon">',
    Phone_Icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkoNdxgfq7cl5m2vuys4Jrw3GjeXRAHPxE08IV" class="contact-icon">',
    Email_Icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFke1oVAuOfjYguoCiIUFG52Da7ZctkWhwnsLJp" class="contact-icon">',
    facebook_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFk2H4wNLmMAFVf6kCey57jWLIRpT3dU9uHZDvm" class="contact-icon">',
    instagram_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkOdzQMCNqptTVisPyfaEW3LAZjCGhrgvRKMuc" class="contact-icon">',
    tiktok_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkesWcHPfjYguoCiIUFG52Da7ZctkWhwnsLJpM" class="contact-icon">',
    linkedin_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkc7NQY7BNJF2HCk97wLpGQza1Wm0TtAYXUPoR" class="contact-icon">',
    youtube_icon:
      '<img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" class="contact-icon">',

    event1: "البرنامج التدريبي التنسيقي لمنسقي المشروع الوطني للقراءة",
    descEvent1:
      "يأتي البرنامج التدريبي التنسيقي للمشروع الوطني للقراءة في إطار التعاون بين وزارة التعليم العالي والبحث العلمي والمشروع الوطني للقراءة، بهدف إعداد منسقين قادرين على نشر ثقافة القراءة داخل الجامعات، وتعزيز وعي الطلاب، وترسيخ القراءة كمسار أساسي لبناء الإنسان وصناعة الفكر.",
    event2:
      'البرنامج التدريبى "سفراء الوطن" لأعضاء هيئة التدريس المبعوثين للخارج',
    descEvent2:
      "نفّذ قطاع الشئون الثقافية والبعثات بالإدارة المركزية للبعثات ومعهد إعداد القادة، تحت رعاية الدكتور أيمن عاشور، برنامج تدريبي لأعضاء هيئة التدريس المبعوثين للخارج، بهدف إعداد كوادر أكاديمية تمثل مصر بوعي وكفاءة. شمل البرنامج محاضرات عن الاعتدال الديني، الحقوق المالية والعلمية للبعثات، التعامل مع الثقافات المختلفة، الوعي الرقمي، والأمن القومي، لتعزيز قدرات المبعوثين على تمثيل مصر ونقل الخبرات عند عودتهم.",
    event3: 'ملتقى "قادة الوعي"',
    descEvent3:
      'في إطار فعاليات ملتقى "قادة الوعي" الذي ينظمه قطاع الأنشطة الطلابية ومعهد إعداد القادة تحت رعاية الدكتور أيمن عاشور وزير التعليم العالي والبحث العلمي، وتنفيذ وإشراف الدكتور كريم همام مستشار الوزير للأنشطة الطلابية ومدير معهد إعداد القادة، استقبل المعهد اللواء أركان حرب مهندس الدكتور حافظ محمود، مساعد وزير التجارة والصناعة الأسبق، ومساعد رئيس هيئة عمليات القوات المسلحة ، وذلك بمشاركة طلاب الجامعات الحكومية والأهلية والتكنولوجية والخاصة والمعاهد المصرية.',
    event4: 'البرنامج القومي للحفاظ على كيان الأسرة المصرية "مودة"',
    descEvent4:
      'انطلقت فعاليات المعسكر التدريبي لبرنامج "مودة" لطلاب الجامعات بمعهد إعداد القادة، تحت رعاية وزارتي التعليم العالي والتضامن الاجتماعي. يهدف البرنامج إلى تعزيز الوعي الأسري لدى الشباب المقبلين على الزواج، وتأهيلهم بالمهارات الحياتية والاجتماعية اللازمة لبناء أسر مستقرة وقوية، ونشر قيم الرحمة والتفاهم. ويعمل "مودة" على إعداد جيل واعٍ قادر على مواجهة تحديات الحياة الزوجية والمجتمعية، ونقل الوعي الإيجابي داخل المجتمع.',
    event5: 'ملتقى "قادة الغد"',
    descEvent5:
      "في إطار فعاليات ملتقى «قادة الغد»، استضاف معهد إعداد القادة فضيلة الأستاذ الدكتور نظير عياد، مفتي جمهورية مصر العربية، في لقاء حواري مع طلاب الجامعات والمعاهد، تناول تجديد الخطاب الديني ودوره في بناء وعي الشباب وتعزيز الأمن الفكري. وأكد الدكتور أيمن عاشور أن تنمية وعي الشباب وتحصينهم فكريًا تمثل أولوية وطنية واستثمارًا في مستقبل مصر، مشيرًا إلى أهمية نشر ثقافة الحوار وترسيخ قيم الانتماء والهوية الوطنية. وشهد اللقاء تفاعلًا كبيرًا من الطلاب، مع التأكيد على أن تجديد الخطاب الديني يعني تطوير أساليب الطرح بما يواكب متغيرات العصر دون المساس بالثوابت، بما يسهم في إعداد جيل واعٍ قادر على مواجهة التحديات الفكرية والمجتمعية.",
    event6:
      ' البرنامج التدريبي "للسادة المرشحين لشغل المناصب القيادية بالمراكز والمعاهد والهيئات البحثية"',
    descEvent6:
      "انطلقت فعاليات البرنامج التدريبي للمرشحين لشغل المناصب القيادية بالمراكز والمعاهد والهيئات البحثية بمعهد إعداد القادة، تحت رعاية وزير التعليم العالي والبحث العلمي. وافتتحت أولى المحاضرات بعنوان «فن الإتيكيت والبروتوكول والمراسم» لتوضيح أسس التعامل الرسمي وقواعد البروتوكول في بيئة العمل، بما يسهم في إعداد قيادات مؤهلة قادرة على تطوير المؤسسات البحثية وتعزيز كفاءتها المؤسسية.",
    // ===============high board=====================
    doc_abdelaziz: "أ.د/ عبد العزيز حسانين قنصوة",
    doc_abdelaziz_desc:
      " الأستاذ الدكتور عبد العزيز حسانين محمد سعد قنصوة أكاديمي وسياسي مصري، يشغل منصب وزير التعليم العالي والبحث العلمي منذ عام 2026 عمل أستاذًا لهندسة البيئة بقسم الهندسة الكيميائية بكلية الهندسة، جامعة الإسكندرية، وشغل سابقًا منصب رئيس جامعة الإسكندرية، كما تولى منصب محافظ الإسكندرية.",
    doc_kareem: "د. كريم همام",
    doc_kareem_desc:
      "د. كريم همام هو شخصية بارزة في قطاع التعليم العالي والخدمة الاجتماعية في مصر، يشغل مناصب هامة مثل مستشار وزير التعليم العالي والبحث العلمي للأنشطة الطلابية، ومدير معهد إعداد القادة، وأستاذ بكلية الخدمة الاجتماعية بجامعة حلوان.",
    doc_mohamed: "د.محمد عبدالفتاح",
    doc_mohamed_desc:
      "د. محمد عبدالفتاح هو أحد أعضاء مجلس إدارة معهد إعداد القادة، ويُعتبر من الشخصيات المهمة في مجال التعليم العالي والبحث العلمي في مصر.",
    o_hamdy: "ا. حمدي طه عبدالعزيز",
    o_hamdy_desc: "امين معهد اعداد القادة التابع لوزارة التعليم العالي",
    o_mostafa: " ا. مصطفى كامل شاهين",
    o_mostafa_desc:
      "امين مساعد معهد اعداد القادة التابع لوزارة التعليم العالي ",

    logo__titleeee: "معهد إعداد القادة",
    logo__slogan: "بناء قائد.. بناء وطن",
    // === History Page ===
    hist_title_1919: "الجذور التاريخية (1919م)",
    hist_desc_1919_1:
      "منذ عام 1919م، وضع الجيش الإنجليزي اللبنة الأولى لهذا الصرح، حيث استُخدم كمعسكر استراتيجي للضباط. لم يكن المعهد حينها كما نراه اليوم، بل كانت ملامحه الأولى تتجسد في أكشاك خشبية وخيام وفيلات محدودة.",
    hist_desc_1919_2:
      "ظلت الإقامة في البداية تعتمد على تلك الأكشاك والمساحات المتاحة في الفيلات، واستمر العمل بهذا النمط حتى انتقال تبعية المعهد لوزارة التعليم العالي.",
    hist_acres: "فداناً من المساحات الخضراء",
    hist_nature_title: "الطبيعة والعمارة الإنجليزية",
    hist_nature_desc:
      "يمتد المعهد على مساحة شاسعة، مشكلاً رئة خضراء في قلب حلوان. الحدائق المتناسقة والأشجار المعمرة التي تملأ الأركان ليست مجرد نباتات، بل هي سجل تاريخي حسي.",
    hist_nature_quote:
      '"مسرح المعهد.. تحفة معمارية صممها مهندسو الجيش الإنجليزي، لا يزال يحتفظ بطابعه الفريد ليشهد على التقاء الفن بالعمارة التاريخية."',
    hist_1941_title: "المعسكر الكشفي",
    hist_1941_desc:
      'تولت الإدارة العامة للتربية الرياضية والعسكرية الإشراف عليه، وكان يسمى حينها "المعسكر الدائم للكشافة".',
    hist_national_title: "التحولات الوطنية",
    hist_national_desc:
      "انتقلت التبعية بين هيئة التحرير والاتحاد الاشتراكي ومنظمة الشباب، حتى ضم لمديرية الشباب بمحافظة القاهرة عام 1968م.",
    hist_mohe_title: "حقبة وزارة التعليم العالي",
    hist_mohe_desc:
      "أصبح المعهد تحت إشراف وزارة التعليم العالي بالكامل، وتم تعديل المسمى لتقديم دورات تثقيفية مكثفة لشباب الجامعات.",
    hist_vm_title: "رؤيتنا ورسالتنا الحديثة",
    hist_vision_head: "رؤيتنا",
    hist_vision_text:
      "أن نكون المركز الرائد إقليمياً في صناعة القادة وإعداد الكوادر الشبابية القادرة على قيادة قاطرة التنمية.",
    hist_mission_head: "رسالتنا",
    hist_mission_text:
      "تقديم برامج تدريبية وتثقيفية مكثفة لتعزيز الوعي الوطني وتنمية مهارات القيادة الإستراتيجية لدى المجتمع الأكاديمي.",
    zero_name: "المهندسة/ يارا أشرف",
    zero_about:
      "مشرفة الفريق التقني . معيدة بكلية حاسبات ومعلومات جامعة العاصمة حاصلة ماجستير علوم بيانات بكلية حاسبات ومعلومات جامعة العاصمة (حلوان سابقا)",
    first_name: "اياد محمد عبد منعم ",
    first_about:
      "طالب بكلية كلية الحاسبات والذكاء الإصطناعى جامعة حلوان الاهلية",
    second_name: "محمد احمد عبدالمجيد",
    second_about:
      "طالب بكلية كلية الحاسبات والذكاء الإصطناعى جامعة حلوان الاهلية",
    third_name: "فرح سامح جابر",
    third_about:
      "طالب بكلية كلية الحاسبات والذكاء الإصطناعى جامعة حلوان الاهلية",
    fourth_name: "ياسين اسامه السيسي",
    fourth_about:
      "طالب بكلية كلية الحاسبات والذكاء الإصطناعى جامعة حلوان الاهلية",
    fifth_name: "ماريا جرجس انور",
    fifth_about:
      "طالب بكلية كلية الحاسبات والذكاء الإصطناعى جامعة حلوان الاهلية",
    contact0: "تواصل معي",
    contact1: "تواصل معي",
    contact2: "تواصل معي",
    contact3: "تواصل معي",
    contact4: "تواصل معي",
    contact5: "تواصل معي",
    // tech namessssss===================
  },

  en: {
    // === Navbar ===
    navhome: "Home",
    nav1: "About",
    // New Dropdown Items
    nav1_sub1: "Our History",
    nav1_sub2: "Board of Directors",
    nav1_sub3: "Institute Structure",

    nav2: "Activities",
    nav3: "Contact",
    nav4: "Our Partners",

    // === General Titles ===
    title1: "Leadership Institute",
    title2: "Who We Are",
    title3: "Activities",
    title4: "Contact Us",
    title5: "Our Partners",
    title6: "History | leadership Institute",
    title7: "High Board | leadership Institute",
    title8: "Organizational Structure | leadership Institute",
    title9: "Technical Team | leadership Institute",

    // === Organizational Structure ===
    "org-chart-title": "Institute Organizational Structure",
    "minister-box": "Minister of Higher Education<br>and Scientific Research",
    "director-box": "Institute Director",
    "secretary-box": "Institute Secretary",
    "deputy-box": "Institute Deputy",
    "activities-manager-box": "Activities Managers",
    "assistant-secretary-box": "Assistant Secretary",
    "admin-affairs-box": "Administrative<br>Affairs",
    "hr-box": "Human<br>Resources",
    "it-box": "Information<br>Technology<br>Manager",
    "security-box": "Security",
    "salaries-media-box": "Media<br>Department",
    "planning-box": "Planning<br>Department",
    "maintenance-box": "Maintenance<br>Department",
    "human-box": "Human<br>Department",
    "gardens-box": "Gardens<br>Department",
    "financial-affairs-box": "Financial Affairs",
    "purchases-box": "Purchases",
    "warehouses-box": "Warehouses",
    "accounts-box": "Accounts",

    // ===farah===
    ministry_title: "Ministry of Higher Education and Scientific Research",
    institute_name: "Leadership Development Institute",
    header_desc:
      "A historic national institution with a legacy spanning more than a century",
    // ================high board=====================
    doc_abdelaziz: "P.Dr/ AbdelAziz Hassanin Qansouh",
    doc_abdelaziz_desc:
      "Professor Dr. Abdel Aziz Hassanin Mohamed Saad Qansouh is an Egyptian academic and politician, serving as Minister of Higher Education and Scientific Research since 2026. He worked as a professor of environmental engineering in the Chemical Engineering Department at the Faculty of Engineering, Alexandria University, and previously served as President of Alexandria University, as well as Governor of Alexandria.",
    doc_kareem: "P.Dr/ Kareem Hamam",
    doc_kareem_desc:
      "Professor Dr. Kareem Hamam is a prominent figure in Egypt's higher education and social service sector, holding key positions such as Advisor to the Minister of Higher Education and Scientific Research for Student Activities, Director of the Leadership Institute, and Professor at the Faculty of Social Service at Helwan University.",
    doc_mohamed: "Dr. Mohamed Abdel Fattah",
    doc_mohamed_desc:
      "Dr. Mohamed Abdel Fattah is one of the members of the Board of Directors of the Leadership Preparation Institute and is considered one of the important personalities in the field of higher education and scientific research in Egypt.",
    o_hamdy: "Mr. Hamdy Taha Abdel Aziz",
    o_hamdy_desc:
      "Mr. Hamdy Taha Abdel Aziz is a member of the Board of Directors of the Leadership Preparation Institute and is an important figure in Egyptian higher education.",
    o_mostafa: "Mr. Mostafa Kamal Shahin",
    o_mostafa_desc:
      "Mr. Mostafa Kamal Shahin is a member of the Board of Directors of the Leadership Preparation Institute and is an important figure in Egyptian higher education.",
    // ===
    logo__titleeee: "Leadership Institute",
    logo__slogan: "A homeland within a homeland",

    // === Home Page ===
    title: "Welcome to the Leadership Institute",
    description: "A homeland within a homeland",
    section1: "We are a team specialized in leadership training.",
    section2: "We aim to develop future leaders.",
    section3: "Join us to become a successful leader.",

    // === Partners Page (New) ===
    partners_intro_title: "Effective Partnerships",
    partners_intro_desc:
      "The Leadership Institute believes that true success begins with cooperation. Therefore, it is keen to build effective partnerships with various institutions and bodies, especially government and national universities, which share the same vision and mission in supporting youth and building leaders.",
    partners_intro_desc2:
      "The Leadership Institute organizes various activities aimed at developing leadership skills among youth. These activities include workshops, training sessions, and community service programs that empower young individuals to take on leadership roles effectively.",
    partners_intro_title2: "Our Activities",
    active_partners: "Our Official Partners",
    txt_gov_uni: "Government Universities",
    txt_private_uni: "Private Universities",
    txt_national_uni: "National Universities",

    // === About Page Data ===
    cd_who: "Who We Are",
    cd_vision: "Our Vision",
    cd_mission: "Our Mission",
    cd_programs: "Institute Programs",
    cd_targets: "Target Groups",
    cd_achievements: "Our Achievements",

    Who_We_Are: [
      "The Institute of Leadership Preparation is dedicated to preparing youth to become effective leaders in society.",
      "It aims to discover hidden potential and nurture it for responsible future generations.",
    ],
    Our_Vision:
      "To prepare a conscious generation capable of leadership and positive change.",
    Our_Mission: [
      "Providing integrated training programs to develop leadership skills.",
      "Enhancing personal capabilities and instilling ethical and national values.",
    ],
    Institute_Programs: [
      "The institute offers various programs to develop youth skills.",
      "Programs focus on:",
      "1- Leadership and communication skills",
      "2- Teamwork skills",
      "3- Creative thinking and problem-solving abilities",
    ],
    Target_Groups: [
      "1- University students",
      "2- Young leaders",
      "3- Individuals interested in self-development",
    ],
    Our_Achievements:
      "Contributing to preparing leadership cadres and organizing impactful youth programs.",
    Our_Slogan:
      "Leadership – Responsibility – Excellence – Cooperation – Belonging",
    Our_Partners: "",

    // === Slogan Animation (NEW) ===
    slogan_prefix: "Rooted In Our Values of",
    slogan_word1: "Leadership",
    slogan_word2: "Responsibility",
    slogan_word3: "Bravery",
    slogan_word4: "Cooperation",
    slogan_word5: "Belonging",

    // === Footer Data ===
    Contact_Us: "Contact Us",
    Address: "Leadership Institute, Ain Helwan – Abdullah Pasha Street",
    Phone: "25553735 – 25553734",
    Email: "info@ldi.eg",

    logo_title: "Leadership Institute",
    logo_slogan: "A homeland within a homeland",
    follow_us_title: "Follow Us",
    important_links_title: "Important Links",

    // Footer Link Titles
    ft_contact_title: "CONTACT US NOW",
    ft_links_title: "QUICK LINKS",
    ft_follow_title: "FOLLOW US",
    fl_about: "About Us",
    fl_activities: "Activities",
    fl_contact: "Contact Us",

    important_links: [
      { text: "Supreme Council of Universities", href: "https://scu.eg/" },
      { text: "High Board", href: "board_index.html" },
      { text: "Technical Team", href: "tech_team.html" },
      { text: "Partners", href: "clients_index.html" },
    ],

    // === Icons ===
    location_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkI0EwG0U8pXjzdtMN3RAgC7lkfnEHZUo0Bx2w" class="contact-icon">',
    Phone_Icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkoNdxgfq7cl5m2vuys4Jrw3GjeXRAHPxE08IV" class="contact-icon">',
    Email_Icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFke1oVAuOfjYguoCiIUFG52Da7ZctkWhwnsLJp" class="contact-icon">',
    facebook_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFk2H4wNLmMAFVf6kCey57jWLIRpT3dU9uHZDvm" class="contact-icon">',
    instagram_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkOdzQMCNqptTVisPyfaEW3LAZjCGhrgvRKMuc" class="contact-icon">',
    tiktok_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkesWcHPfjYguoCiIUFG52Da7ZctkWhwnsLJpM" class="contact-icon">',
    linkedin_icon:
      '<img src="https://rbjkis7zqx.ufs.sh/f/4UPD8CWlzrFkc7NQY7BNJF2HCk97wLpGQza1Wm0TtAYXUPoR" class="contact-icon">',
    youtube_icon:
      '<img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" class="contact-icon">',

    event1:
      "The Coordinative Training Program for the Coordinators of the National Reading Project",
    descEvent1:
      "The coordinative training program of the National Reading Project comes within the framework of cooperation between the Ministry of Higher Education and Scientific Research and the National Reading Project. It aims to prepare coordinators capable of spreading a culture of reading within universities, enhancing students' awareness, and establishing reading as a fundamental path for building individuals and shaping thought.",
    event2:
      "The 'Ambassadors of the Nation' training program for faculty members sent abroad",
    descEvent2:
      "Under the patronage of Dr. Ayman Ashour, the Cultural Affairs and Scholarships Sector of the Central Administration for Scholarships and the Leadership Institute conducted a training program for faculty members sent abroad, aiming to prepare academic cadres to represent Egypt with awareness and competence. The program included lectures on religious moderation, financial and academic rights of scholarship holders, cross-cultural communication, digital awareness, and national security, enhancing the participants' ability to represent Egypt and transfer knowledge and experience upon their return.",
    event3: "Awareness Leaders Forum",
    descEvent3:
      "As part of the 'Awareness Leaders Forum' organized by the Student Activities Sector and the Leadership Institute under the patronage of Dr. Ayman Ashour, Minister of Higher Education and Scientific Research, and implemented under the supervision of Dr. Kareem Hamam, Advisor to the Minister for Student Activities and Director of the Leadership Institute, the institute received Major General Engineer Dr. Hafez Mahmoud, former Assistant Minister of Commerce and Industry and former Assistant Chief of Operations of the Armed Forces, with the participation of students from government, national, technological, private universities, and Egyptian institutes.",
    event4: "The 'Mawadda' Program for University Students",
    descEvent4:
      'The training camp for the "Mawadda" program for university students was launched at the Leadership Preparation Institute, under the supervision of the Ministries of Higher Education and Social Solidarity. The program aims to raise family awareness among young people preparing for marriage, equipping them with the life and social skills needed to build strong and stable families, while promoting values of compassion and understanding. "Mawadda" seeks to prepare an aware generation capable of facing marital and societal challenges and spreading positive awareness within the community.',
    event5: '"Leaders of Tomorrow Forum"',
    descEvent5:
      "As part of the Leaders of Tomorrow Forum, the Leadership Preparation Institute hosted a dialogue session with university students on renewing religious discourse and strengthening youth awareness and intellectual security. The session emphasized that building youth awareness and protecting them intellectually is a national priority and a key investment in Egypt's future, highlighting the importance of dialogue, moderation, and reinforcing national identity, to prepare a conscious generation capable of facing intellectual and societal challenges.",
    event6:
      "Training Program for Candidates for Leadership Positions in Research Centers, Institutes, and Research Bodies",
    descEvent6:
      "The training program for candidates for leadership positions in research centers, institutes, and research bodies was launched at the Leadership Preparation Institute under the patronage of the Minister of Higher Education and Scientific Research. The first lecture, titled 'Etiquette, Protocol, and Ceremonial Practices,' highlighted the fundamentals of official conduct and workplace protocol, aiming to prepare qualified leaders capable of developing research institutions and enhancing institutional efficiency.",
    // === History Page ===
    hist_title_1919: "Historical Roots (1919)",
    hist_desc_1919_1:
      "Since 1919, the British Army laid the first stone of this edifice, using it as a strategic camp for officers. It started with wooden kiosks, tents, and limited villas designed for that era's needs.",
    hist_desc_1919_2:
      "Accommodation initially relied on those kiosks and villas until the institute was transferred to the Ministry of Higher Education, beginning a journey of comprehensive development.",
    hist_acres: "Acres of Green Spaces",
    hist_nature_title: "Nature and English Architecture",
    hist_nature_desc:
      "The institute extends over a vast area, forming a green lung in the heart of Helwan. The consistent gardens and perennial trees are a 'sensory historical record' embodying the place's evolution.",
    hist_nature_quote:
      '"The Institute Theater... an architectural masterpiece designed by British Army engineers, retaining its unique character to witness the meeting of art and historic architecture."',
    hist_1941_title: "The Scout Camp",
    hist_1941_desc:
      "The General Administration of Sports and Military Education supervised it, and it was then called the 'Permanent Scout Camp'.",
    hist_national_title: "National Transformations",
    hist_national_desc:
      "Affiliation shifted between the Liberation Authority, the Socialist Union, and the Youth Organization, until it joined the Cairo Youth Directorate in 1968.",
    hist_mohe_title: "Ministry of Higher Education Era",
    hist_mohe_desc:
      "The institute came fully under the supervision of the Ministry of Higher Education, offering intensive educational courses for university youth.",
    hist_vm_title: "Our Modern Vision and Mission",
    hist_vision_head: "Our Vision",
    hist_vision_text:
      "To be the leading regional center in leadership industry and preparing youth cadres capable of leading development.",
    hist_mission_head: "Our Mission",
    hist_mission_text:
      "Providing intensive training and educational programs to enhance national awareness and develop strategic leadership skills in the academic community.",
    zero_name: "Eng/ Yara Ashraf ",
    zero_about:
      "Technical Team Supervisor. Teaching Assistant at the Faculty of Computers and Information, Capital University. Master's degree in Data Science from the Faculty of Computers and Information technolgy, Capital University (formerly Helwan).",
    first_name: "Eyad Moneim ",
    first_about:
      "Student at Faculty of Computer Science Helwan national univeristy",
    second_name: "Mohamed Abdelmegeed",
    second_about:
      "Student at Faculty of Computer Science Helwan national univeristy",
    third_name: "Farah Sameh ",
    third_about:
      "Student at at Faculty of Computer Science Helwan national univeristy",
    fourth_name: "Yassin Al-sisi",
    fourth_about:
      "Student at Faculty of Computer Science Helwan national univeristy",
    fifth_name: "Maria Gergs ",
    fifth_about:
      "Student at Faculty of Computer Science Helwan national univeristy",
    contact0: "Contact Me",
    contact1: "Contact Me",
    contact2: "Contact Me",
    contact3: "Contact Me",
    contact4: "Contact Me",
    contact5: "Contact Me",
  },
};

// =====================================================
// ================ MAIN FUNCTIONS =====================
// =====================================================

// 1. تغيير اللغة (Language Switcher)
function setLanguage(lang) {
  // حفظ اللغة في ذاكرة المتصفح
  localStorage.setItem("preferredLang", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.style.textAlign = lang === "ar" ? "right" : "left";

  // أ) تحديث النصوص البسيطة (بالـ ID)
  const ids = [
    // Navbar
    "navhome",
    "nav1",
    "nav2",
    "nav3",
    "nav4",
    // Sub-Navbar (Dropdown)
    "nav1_sub1",
    "nav1_sub2",
    "nav1_sub3",

    // General Titles
    "title",
    "title1",
    "title2",
    "title3",
    "title4",
    "title5",
    "title6",
    "title7",
    "title8",
    "title9",
    // Organizational Structure IDs
    "org-chart-title",
    "minister-box",
    "director-box",
    "secretary-box",
    "deputy-box",
    "activities-manager-box",
    "assistant-secretary-box",
    "admin-affairs-box",
    "hr-box",
    "it-box",
    "security-box",
    "salaries-media-box",
    "planning-box",
    "maintenance-box",
    "human-box",
    "gardens-box",
    "financial-affairs-box",
    "purchases-box",
    "warehouses-box",
    "accounts-box",
    // Home Page
    "description",
    "section1",
    "section2",
    "section3",
    // Partners Page
    "partners_intro_title",
    "partners_intro_desc",
    "partners_intro_desc2",
    "partners_intro_title2",
    "active_partners",
    "txt_gov_uni",
    "txt_private_uni",
    "txt_national_uni",
    // About & Activity Page
    "cd_who",
    "cd_vision",
    "cd_mission",
    "cd_programs",
    "cd_targets",
    "cd_achievements",
    // Footer & Misc
    "Our_Achievements",
    "Our_Slogan",
    "Our_Vision",
    "Our_Partners",
    "logo_title",
    "logo_slogan",
    "ft_contact_title",
    "ft_links_title",
    "ft_follow_title",
    "fl_about",
    "fl_activities",
    "fl_contact",
    // events
    "event1",
    "descEvent1",
    "event2",
    "descEvent2",
    "event3",
    "descEvent3",
    "event4",
    "descEvent4",
    "event5",
    "descEvent5",
    "event6",
    "descEvent6",
    "doc_abdelaziz",
    "doc_abdelaziz_desc",
    "doc_kareem",
    "doc_kareem_desc",
    "doc_mohamed",
    "doc_mohamed_desc",
    "o_hamdy",
    "o_hamdy_desc",
    "o_mostafa",
    "o_mostafa_desc",
    "logo-title",
    "logo-slogan",

    // === IDs صفحة التاريخ ===
    "hist_title_1919",
    "hist_desc_1919_1",
    "hist_desc_1919_2",
    "hist_acres",
    "hist_nature_title",
    "hist_nature_desc",
    "hist_nature_quote",
    "hist_1941_title",
    "hist_1941_desc",
    "hist_national_title",
    "hist_national_desc",
    "hist_mohe_title",
    "hist_mohe_desc",
    "hist_vm_title",
    "hist_vision_head",
    "hist_vision_text",
    "hist_mission_head",
    "hist_mission_text",

    // ==================

    "zero_name",
    "zero_about",
    "first_name",
    "first_about",
    "contact0",
    "contact1",
    "contact2",
    "contact3",
    "contact4",
    "contact5",
    "second_name",
    "second_about",
    "third_name",
    "third_about",
    "fourth_name",
    "fourth_about",
    "fifth_name",
    "fifth_about",
  ];

  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el && texts[lang] && texts[lang][id]) {
      el.innerHTML = texts[lang][id];
    }
  });

  // =====farah=====
  const ministryTitle = document.getElementById("ministry-title");
  const instituteName = document.getElementById("institute-name");
  const headerDesc = document.getElementById("header-desc");

  if (ministryTitle && texts[lang])
    ministryTitle.textContent = texts[lang].ministry_title;
  if (instituteName && texts[lang])
    instituteName.textContent = texts[lang].institute_name;
  if (headerDesc && texts[lang])
    headerDesc.textContent = texts[lang].header_desc;

  // ب) تحديث نصوص الفوتر (مع الأيقونات)
  const contactUsHeader = document.getElementById("contact-us");
  if (contactUsHeader && texts[lang])
    contactUsHeader.innerHTML = texts[lang].Contact_Us;

  const contactLoc = document.getElementById("contact-location");
  const contactPhone = document.getElementById("contact-phone");
  const contactEmail = document.getElementById("contact-email");

  if (contactLoc && texts[lang])
    contactLoc.innerHTML =
      texts[lang].location_icon + " " + texts[lang].Address;
  if (contactPhone && texts[lang])
    contactPhone.innerHTML = texts[lang].Phone_Icon + " " + texts[lang].Phone;
  if (contactEmail && texts[lang])
    contactEmail.innerHTML = texts[lang].Email_Icon + " " + texts[lang].Email;

  // ج) تحديث الروابط الهامة
  const linksTitleEl = document.getElementById("important-links-title");
  const linksListEl = document.getElementById("important-links-list");

  if (linksTitleEl && texts[lang])
    linksTitleEl.textContent = texts[lang].important_links_title;

  if (linksListEl && texts[lang]) {
    linksListEl.innerHTML = texts[lang].important_links
      .map((link) => `<li><a href="${link.href}">${link.text}</a></li>`)
      .join("");
  }

  // د) تحديث المصفوفات (Arrays)
  const arrayIds = [
    "Who_We_Are",
    "Our_Mission",
    "Institute_Programs",
    "Target_Groups",
  ];
  arrayIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el && texts[lang] && texts[lang][id]) {
      el.innerHTML = Array.isArray(texts[lang][id])
        ? texts[lang][id].join("<br>")
        : texts[lang][id];
    }
  });

  // هـ) تحديث عنوان "تابعنا على"
  const followUsTitleEl = document.querySelector(".follow-us-column p");
  if (followUsTitleEl && texts[lang]) {
    followUsTitleEl.textContent = texts[lang].follow_us_title;
  }

  // و) تحديث حقوق الملكية
  const year = new Date().getFullYear();
  const copyrightEl = document.getElementById("copyright");
  if (copyrightEl) {
    copyrightEl.innerHTML =
      lang === "ar"
        ? `©️ ${year} معهد إعداد القادة`
        : `©️ ${year} Leadership Development Institute`;
  }

  // ز) تحديث ليبل اللغة
  const langLabel = document.getElementById("current-lang-label");
  if (langLabel) {
    const flagSrc =
      lang === "ar"
        ? "https://emojigraph.org/media/twitter/flag-egypt_1f1ea-1f1ec.png"
        : "https://emojigraph.org/media/twitter/flag-united-states_1f1fa-1f1f8.png";
    const langName = lang === "ar" ? "العربية" : "English";

    langLabel.innerHTML = `
            ${langName} 
            <img src="${flagSrc}" class="flag-img" style="margin:0 5px;"> 
            <i class="fa-solid fa-angle-down" style="font-size: 0.8em; margin-right: 5px;"></i>
        `;
  }

  // ح) اتجاه السلايدر
  const activityHero = document.querySelector(".activity-hero");
  if (activityHero) {
    if (lang === "ar") {
      activityHero.style.flexDirection = "row-reverse";
      const txt = activityHero.querySelector(".activity-text");
      if (txt) txt.style.textAlign = "right";
    } else {
      activityHero.style.flexDirection = "row";
      const txt = activityHero.querySelector(".activity-text");
      if (txt) txt.style.textAlign = "left";
    }
  }

  // ط) تحديث الشعار المتحرك (NEW!)
  updateSloganAnimation(lang);
}

// =====================================================
// ========== دالة تحديث الشعار المتحرك (NEW) ==========
// =====================================================
function updateSloganAnimation(lang) {
  const sloganPrefix = document.getElementById("slogan-prefix");
  const sloganWords = document.querySelectorAll(".slogan-word");

  if (!sloganPrefix || sloganWords.length === 0) return;

  const currentTexts = texts[lang];
  if (!currentTexts) return;

  // تحديث النص الثابت
  if (currentTexts.slogan_prefix) {
    sloganPrefix.textContent = currentTexts.slogan_prefix;
  }

  // تحديث الكلمات المتحركة
  const words = [
    currentTexts.slogan_word1,
    currentTexts.slogan_word2,
    currentTexts.slogan_word3,
    currentTexts.slogan_word4,
    currentTexts.slogan_word5,
    currentTexts.slogan_word1, // نكرر الكلمة الأولى للأنيميشن
  ];

  sloganWords.forEach((word, index) => {
    if (words[index]) {
      word.textContent = words[index];
    }
  });
}

// 2. الدارك مود (Dark Mode Toggle)
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// 3. إضافة عمود السوشيال ميديا ديناميكياً (Follow Us Column)
function addFollowUsColumn(lang = "ar") {
  const ldiFooter = document.querySelector(".ldi-footer");
  // لو الفوتر مش موجود أو العمود مضاف قبل كده، نوقف التنفيذ
  if (!ldiFooter || document.querySelector(".follow-us-column")) return;

  // إنشاء العمود الجديد
  const followColumn = document.createElement("div");
  followColumn.classList.add("follow-us-column");
  followColumn.style.display = "flex";
  followColumn.style.flexDirection = "column";
  followColumn.style.gap = "10px";

  // عنوان العمود
  const title = document.createElement("p");
  title.style.fontWeight = "bold";
  title.style.fontSize = "1.1rem";
  title.style.margin = "0";
  // التأكد من وجود النص قبل وضعه
  title.textContent = texts[lang] ? texts[lang].follow_us_title : "تابعنا على";
  followColumn.appendChild(title);

  // حاوية الأيقونات
  const iconsContainer = document.createElement("div");
  iconsContainer.id = "social-icons-container";
  iconsContainer.style.display = "flex";
  iconsContainer.style.gap = "10px";
  iconsContainer.style.alignItems = "center";

  // التأكد من وجود النصوص للروابط
  const currentTexts = texts[lang] || texts["ar"];

  // بيانات الروابط
  const socialLinks = [
    {
      icon: currentTexts.facebook_icon,
      url: "https://www.facebook.com/share/1GWF94nSBh/?mibextid=wwXIfr/",
    },
    {
      icon: currentTexts.instagram_icon,
      url: "https://www.instagram.com/ldi_mohesr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
    {
      icon: currentTexts.tiktok_icon,
      url: "https://www.tiktok.com/@ldi_mohesr?is_from_webapp=1&sender_device=pc",
    },
    {
      icon: currentTexts.linkedin_icon,
      url: "https://www.linkedin.com/in/leadership-development-institute-84142421b",
    },
    {
      icon: currentTexts.youtube_icon,
      url: "https://www.youtube.com/@leadershipdevelopmentinstitute",
    },
  ];

  socialLinks.forEach((social) => {
    const a = document.createElement("a");
    a.href = social.url;
    a.target = "_blank";
    a.innerHTML = social.icon;
    a.classList.add("social-circle");
    iconsContainer.appendChild(a);
  });

  followColumn.appendChild(iconsContainer);
  ldiFooter.appendChild(followColumn);
}

// 4. تحديد اللينك النشط في النافبار (Active Link)
function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });
}

// 5. سلايدر الصور (Image Slider)
const sliderImages = [
  "Screenshot 2026-02-03 074808.png",
  "Screenshot 2026-02-03 074842.png",
  "Screenshot 2026-02-03 074937.png",
];

let currentImageIndex = 0;

function changeSliderImage() {
  const slider = document.getElementById("slider-image");
  if (!slider) return;
  slider.src = sliderImages[currentImageIndex];
  currentImageIndex++;
  if (currentImageIndex >= sliderImages.length) currentImageIndex = 0;
}

// تشغيل السلايدر كل ثانيتين
setInterval(changeSliderImage, 2000);

// 6. أنيميشن الخط تحت عنوان الهيكل التنظيمي (Underline Animation)
function animateOrgChartTitle() {
  const title = document.getElementById("org-chart-title");
  if (title) {
    // إضافة الكلاس بعد تحميل الصفحة بـ 300ms
    setTimeout(() => {
      title.classList.add("animate");
    }, 300);
  }
}

// =====================================================
// ================ INITIALIZATION =====================
// =====================================================

// تجميع كل أوامر بدء التشغيل في حدث واحد لضمان الأداء
window.addEventListener("DOMContentLoaded", () => {
  // 1. استرجاع اللغة المحفوظة أو استخدام العربية كافتراضي
  const savedLang = localStorage.getItem("preferredLang");
  const langToUse = savedLang ? savedLang : "ar";

  // 2. إضافة عمود السوشيال ميديا باللغة الصحيحة
  addFollowUsColumn(langToUse);

  // 3. تطبيق اللغة على الموقع
  setLanguage(langToUse);

  // 4. تحديث الشعار المتحرك باللغة المحفوظة (NEW!)
  updateSloganAnimation(langToUse);

  // 5. تفعيل اللينك في النافبار
  setActiveNav();

  // 6. تشغيل أنيميشن الخط تحت العنوان
  animateOrgChartTitle();
});

// التحقق من الدارك مود المحفوظ عند التحميل
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// =====================================================
// ======== FOOTER AUTO-POPULATE (RUNS ON ALL PAGES) ==
// =====================================================
window.addEventListener("DOMContentLoaded", function() {
  // This additional init ensures footer contact fields are always filled
  // (runs after the main DOMContentLoaded above)
  setTimeout(() => {
    const lang = localStorage.getItem("preferredLang") || "ar";
    const t = texts[lang] || texts["ar"];

    const loc = document.getElementById("contact-location");
    const phone = document.getElementById("contact-phone");
    const email = document.getElementById("contact-email");

    if (loc && !loc.innerHTML.trim()) {
      loc.innerHTML = (t.location_icon || "📍") + " " + (t.Address || "");
    }
    if (phone && !phone.innerHTML.trim()) {
      phone.innerHTML = (t.Phone_Icon || "📞") + " " + (t.Phone || "");
    }
    if (email && !email.innerHTML.trim()) {
      email.innerHTML = (t.Email_Icon || "✉") + " " + (t.Email || "");
    }
  }, 50);
});

// ============================================================
// MOBILE NAV - Hamburger & Drawer
// ============================================================
function openMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-overlay');
  const btn = document.getElementById('hamburger-btn');
  if (!nav) return;
  nav.classList.add('open');
  if (overlay) { overlay.style.display = 'block'; setTimeout(() => overlay.classList.add('visible'), 10); }
  if (btn) btn.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-overlay');
  const btn = document.getElementById('hamburger-btn');
  if (!nav) return;
  nav.classList.remove('open');
  if (overlay) { overlay.classList.remove('visible'); setTimeout(() => { overlay.style.display = 'none'; }, 350); }
  if (btn) btn.classList.remove('active');
  document.body.style.overflow = '';
}

function toggleMobileAccordion(btn) {
  const sub = btn.nextElementSibling;
  if (!sub) return;
  btn.classList.toggle('open');
  sub.classList.toggle('open');
}

// Close mobile nav on overlay click (already handled by onclick in HTML)
// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMobileNav();
});

// Populate mobile nav text from translations
function populateMobileNav() {
    const lang = localStorage.getItem('preferredLang') || 'ar';
    const t = texts[lang] || texts['ar'];
    const ids = ['navhome','nav1','nav2','nav4','nav1_sub1','nav1_sub2','nav1_sub3'];
    ids.forEach(id => {
        const el = document.getElementById('m-' + id);
        if (el && t[id]) {
            el.childNodes[0].textContent = t[id] + " "; 
        }
    });
}

// Hook into existing setLanguage to also update mobile nav
const _origSetLang = typeof setLanguage === 'function' ? setLanguage : null;
if (_origSetLang) {
  window.setLanguage = function(lang) {
    _origSetLang(lang);
    populateMobileNav();
  };
}

// Init on load
document.addEventListener('DOMContentLoaded', function() {
  populateMobileNav();
});

// Toggle Menu State
const menuBtn = document.getElementById('menu-toggle');
const glassMenu = document.getElementById('glass-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    glassMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if(glassMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});

// Close menu function (useful for inline onclick events)
function closeAiMenu() {
    menuBtn.classList.remove('active');
    glassMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Sub-menu accordion
function toggleSubMenu(element) {
    const subMenu = element.nextElementSibling;
    const icon = element.querySelector('i');
    
    subMenu.classList.toggle('open');
    if (subMenu.classList.contains('open')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0)';
    }
}