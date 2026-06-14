/* Language switcher — English · Русский · Azərbaycan
   Text-node translation engine (SVG/layout untouched). window.I18N.t(en). */
(function () {
  const SUP = ['en', 'ru', 'az'];
  const KEY = 'psy_lang';
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const SKIP = new Set(['SCRIPT','STYLE','NOSCRIPT','SVG','PATH','CIRCLE','RECT','LINE','POLYGON','POLYLINE','DEFS','LINEARGRADIENT','STOP','G']);

  const DICT = {
    ru: {
      "Psychologist":"Психолог","About":"Обо мне","Sessions":"Сессии","Resources":"Материалы","FAQ":"Вопросы","Contact":"Контакты",
      "Book a session":"Записаться","Now welcoming new clients":"Идёт запись новых клиентов",
      "A calm place to feel":"Спокойное место, чтобы почувствовать себя","understood":"понятым",
      "Therapy with [Name] — a warm, confidential space to work through anxiety, stress, relationships and life’s harder seasons. At your pace, without judgment. In person in Baku or online.":"Терапия с [Name] — тёплое, конфиденциальное пространство, чтобы прожить тревогу, стресс, отношения и трудные периоды жизни. В вашем темпе, без осуждения. Очно в Баку или онлайн.",
      "Book a first session":"Записаться на первую сессию","Meet [Name]":"Познакомиться с [Name]",
      "Years of practice":"Лет практики","Sessions held":"Проведено сессий","Confidential":"Конфиденциально",
      "Breathe — you’re welcome here":"Дышите — вам здесь рады",
      "“My only agenda is your wellbeing.”":"«Моя единственная цель — ваше благополучие.»",
      "Therapy that feels human, first.":"Терапия, в которой прежде всего — человек.",
      "I’m [Name], a licensed psychologist and psychotherapist. For over a decade I’ve helped people feel steadier, more themselves, and less alone — through a relationship built on trust, warmth and genuine care.":"Я [Name], лицензированный психолог и психотерапевт. Уже более десяти лет я помогаю людям чувствовать себя устойчивее, ближе к себе и менее одинокими — через отношения, построенные на доверии, тепле и искренней заботе.",
      "There’s no “right way” to feel and nothing is too small to bring. We move at a pace that feels safe to you, and everything you share stays between us.":"Нет «правильного» способа чувствовать, и нет темы слишком мелкой. Мы движемся в темпе, безопасном для вас, и всё, чем вы делитесь, остаётся между нами.",
      "Education":"Образование","MSc in Clinical Psychology, [University]. Ongoing training in evidence-based therapy.":"Магистр клинической психологии, [University]. Постоянное обучение доказательным методам терапии.",
      "Approach":"Подход","Integrative — CBT, schema & person-centred — tailored to you, not a formula.":"Интегративный — КПТ, схема-терапия и человекоцентрированный — под вас, а не по шаблону.",
      "A warm, non-judgmental space — always":"Тёплое пространство без осуждения — всегда",
      "Strictly confidential, bound by professional ethics":"Строго конфиденциально, по нормам профессиональной этики",
      "In person in Baku, or online wherever you are":"Очно в Баку или онлайн, где бы вы ни были",
      "How I can help":"Чем я могу помочь","Ways we can work together":"Как мы можем работать вместе",
      "Whatever brought you here, there’s a gentle way forward. Sessions are 50 minutes, in person or online.":"Что бы вас сюда ни привело, есть мягкий путь вперёд. Сессии длятся 50 минут, очно или онлайн.",
      "Individual therapy":"Индивидуальная терапия",
      "One-to-one support for anxiety, low mood, stress, self-esteem and burnout — at your own pace.":"Поддержка один на один при тревоге, подавленности, стрессе, низкой самооценке и выгорании — в вашем темпе.",
      "50 min":"50 мин","Couples & relationships":"Пары и отношения",
      "A safe, balanced space to be heard, understand each other again, and rebuild connection.":"Безопасное, сбалансированное пространство, чтобы быть услышанными, снова понять друг друга и восстановить связь.",
      "60 min":"60 мин","Online sessions":"Онлайн-сессии",
      "The same care from the comfort of home, by secure video — ideal if you’re abroad or short on time.":"Та же забота из дома, по защищённому видео — идеально, если вы за границей или вам не хватает времени.",
      "First":"Сначала","Reach out":"Напишите",
      "Send a message or book below. No pressure, no commitment — just a first conversation.":"Напишите сообщение или запишитесь ниже. Без давления и обязательств — просто первый разговор.",
      "Then":"Затем","We meet":"Мы встречаемся",
      "A gentle first session to understand what you need and whether we’re a good fit.":"Мягкая первая сессия, чтобы понять, что вам нужно и подходим ли мы друг другу.",
      "Together":"Вместе","Move forward":"Идём вперёд",
      "We work at your pace toward feeling steadier, lighter, and more yourself.":"Мы движемся в вашем темпе — к ощущению устойчивости, лёгкости и самого себя.",
      "Articles & resources":"Статьи и материалы","Gentle reading between sessions":"Бережное чтение между сессиями",
      "Short, kind, practical pieces on the things many of us quietly carry.":"Короткие, добрые и практичные тексты о том, что многие из нас тихо несут в себе.",
      "Self-help":"Самопомощь","Quieting anxious thoughts":"Как успокоить тревожные мысли",
      "Three small, science-backed practices to soften anxiety when it spikes.":"Три небольшие, научно обоснованные практики, чтобы смягчить тревогу, когда она нарастает.",
      "Read article":"Читать статью","Guide":"Гид","“Is therapy right for me?”":"«Подходит ли мне терапия?»",
      "You don’t need to be in crisis to benefit. A look at the everyday reasons people come.":"Чтобы терапия помогла, не нужно быть в кризисе. Взгляд на повседневные причины, по которым приходят.",
      "Coming soon":"Скоро","Reflection":"Размышление","Resting without guilt":"Отдых без чувства вины",
      "Why rest feels so hard — and a kinder way to think about doing less.":"Почему отдыхать так трудно — и более добрый взгляд на то, чтобы делать меньше.",
      "In their words":"Их словами","Stories shared with permission":"Истории, опубликованные с разрешения",
      "Names withheld to protect privacy.":"Имена скрыты ради конфиденциальности.",
      "I came in barely able to talk about it. [Name] never rushed me — and a few months on, I finally feel like myself again.":"Я пришла, едва способная об этом говорить. [Name] никогда меня не торопил(а) — и спустя несколько месяцев я наконец снова чувствую себя собой.",
      "A. client":"Клиент","The most non-judgmental person I’ve ever spoken to. I always leave a session lighter than I arrived.":"Самый неосуждающий человек, с которым я говорил(а). Я всегда ухожу с сессии легче, чем пришёл(ла).",
      "We were on the edge of giving up. These sessions helped us actually hear each other again.":"Мы были на грани того, чтобы сдаться. Эти сессии помогли нам снова по-настоящему услышать друг друга.",
      "A. couple":"Пара","Couples therapy":"Парная терапия",
      "Questions & reassurance":"Вопросы и поддержка","It’s okay to wonder first":"Сомневаться сначала — это нормально",
      "Is everything I say confidential?":"Всё, что я говорю, конфиденциально?",
      "Yes — completely. What you share stays strictly between us, protected by professional ethics and confidentiality. The only rare exceptions are where there’s a serious risk to life, which I’d always talk through with you first.":"Да — полностью. То, чем вы делитесь, остаётся строго между нами, под защитой профессиональной этики и конфиденциальности. Редкие исключения — лишь при серьёзной угрозе жизни, и это я всегда обсуждаю с вами в первую очередь.",
      "Do I need to be “in crisis” to come?":"Нужно ли быть «в кризисе», чтобы прийти?",
      "Not at all. Most people come simply because something feels heavy, stuck, or worth understanding better. You’re very welcome here whether things feel overwhelming or just slightly off.":"Вовсе нет. Большинство приходят просто потому, что что-то ощущается тяжёлым, застывшим или стоит того, чтобы лучше в нём разобраться. Вам здесь рады — и когда невыносимо, и когда просто немного не так.",
      "What happens in the first session?":"Что происходит на первой сессии?",
      "It’s a gentle conversation. We talk about what brought you here and what you’re hoping for — and you get a feel for working together. There’s no pressure to share more than you’re ready to.":"Это мягкий разговор. Мы говорим о том, что вас привело и чего вы ждёте — и вы чувствуете, каково это, работать вместе. Никто не давит делиться большим, чем вы готовы.",
      "How many sessions will I need?":"Сколько сессий мне понадобится?",
      "It depends on you and what you’re working through — some people come for a few sessions, others longer. We review together regularly, and you’re always free to pause or stop. This is your process.":"Это зависит от вас и того, над чем вы работаете — кто-то приходит на несколько сессий, кто-то дольше. Мы регулярно сверяемся, и вы всегда вольны сделать паузу или остановиться. Это ваш процесс.",
      "Are online sessions as effective?":"Онлайн-сессии так же эффективны?",
      "For most people, yes. Online therapy is well-researched and just as warm — many clients find it easier to open up from a familiar, private space of their own.":"Для большинства — да. Онлайн-терапия хорошо изучена и так же тепла — многим легче открыться из привычного, личного пространства.",
      "Take the first step":"Сделайте первый шаг",
      "Reaching out is often the hardest part. Share a little below and I’ll reply personally — gently, and in confidence.":"Решиться написать — часто самое трудное. Поделитесь немногим ниже, и я отвечу лично — бережно и конфиденциально.",
      "WhatsApp":"WhatsApp","Call":"Позвонить","Email":"Эл. почта",
      "Your privacy comes first.":"Ваша приватность — на первом месте.",
      "Anything you write here is used only to arrange your session, and our conversations are always confidential.":"Всё, что вы здесь напишете, используется только для записи на сессию, а наши разговоры всегда конфиденциальны.",
      "Book via WhatsApp":"Записаться через WhatsApp","Your name":"Ваше имя","Phone":"Телефон","(optional)":"(необязательно)",
      "Session type":"Тип сессии","Choose a session":"Выберите сессию","Online session":"Онлайн-сессия","Not sure yet":"Пока не уверен(а)",
      "Preferred date":"Желаемая дата","Preferred time":"Желаемое время","Any time":"Любое время","Morning":"Утро","Afternoon":"День","Evening":"Вечер",
      "Anything you’d like me to know":"Что мне важно знать","Send request":"Отправить запрос",
      "Private & confidential. Sent securely via WhatsApp; an email option appears after you submit.":"Приватно и конфиденциально. Отправляется через WhatsApp; вариант по эл. почте появится после отправки.",
      "Thank you for reaching out":"Спасибо, что написали",
      "WhatsApp should have opened with your message ready to send. If not, choose an option below — I’ll reply personally and gently.":"WhatsApp должен был открыться с готовым сообщением. Если нет — выберите вариант ниже, и я отвечу лично и бережно.",
      "Send by email instead":"Отправить по эл. почте","New request":"Новый запрос",
      "Contact & hours":"Контакты и часы","Where to find me":"Где меня найти","Practice":"Кабинет",
      "Hours":"Часы работы","Mon – Fri: 10:00 – 19:00":"Пн – Пт: 10:00 – 19:00","Sat: by arrangement · Sun: closed":"Сб: по договорённости · Вс: выходной",
      "Phone & WhatsApp":"Телефон и WhatsApp","Email & social":"Почта и соцсети",
      "A calm, confidential space for therapy in Baku and online. Welcoming new clients — at your pace, without judgment.":"Спокойное, конфиденциальное пространство для терапии в Баку и онлайн. Идёт запись новых клиентов — в вашем темпе, без осуждения.",
      "Explore":"Навигация","© 2024 [Name], Psychologist. All rights reserved.":"© 2024 [Name], психолог. Все права защищены.",
      "If you are in crisis or at immediate risk, please contact local emergency services. This website offers general information and is not a substitute for professional assessment.":"Если вы в кризисе или вам угрожает непосредственная опасность, обратитесь в местные экстренные службы. Этот сайт носит общий информационный характер и не заменяет профессиональную оценку.",
      "By [Name], Psychologist · 3 min read":"Автор: [Name], психолог · 3 мин чтения",
      "Anxiety isn’t a flaw or a weakness — it’s your mind trying, a little too hard, to keep you safe. You can’t always switch it off, but you can learn to turn the volume down. Here are three small practices that help in the moment.":"Тревога — не изъян и не слабость, а попытка ума, чуть слишком усердная, уберечь вас. Её не всегда можно выключить, но можно научиться убавлять громкость. Вот три небольшие практики, которые помогают в моменте.",
      "1. Name it to tame it":"1. Назови, чтобы укротить",
      "When anxiety rises, quietly label what’s happening: “this is anxiety, and it will pass.” Naming an emotion gently moves your brain out of alarm mode and into a steadier, more reflective place.":"Когда тревога нарастает, тихо обозначьте происходящее: «это тревога, и она пройдёт». Называние эмоции мягко выводит мозг из режима тревоги в более устойчивое, осмысленное состояние.",
      "2. Come back to your senses":"2. Вернитесь к ощущениям",
      "Look around and notice five things you can see, four you can hear, three you can touch. This simple grounding exercise pulls you out of the spiral of thoughts and back into the present, where you’re actually safe.":"Оглянитесь и заметьте пять вещей, которые видите, четыре — которые слышите, три — к которым можете прикоснуться. Это простое упражнение заземления вытягивает из спирали мыслей обратно в настоящее, где вы на самом деле в безопасности.",
      "Slow your out-breath — make it longer than your in-breath.":"Замедлите выдох — сделайте его длиннее вдоха.",
      "Unclench your jaw and drop your shoulders.":"Расслабьте челюсть и опустите плечи.",
      "Place a hand on your chest; feel it rise and fall.":"Положите руку на грудь; почувствуйте, как она поднимается и опускается.",
      "You don’t have to do this perfectly. Even a little softening is enough — and it gets easier with practice.":"Не нужно делать это идеально. Достаточно даже небольшого смягчения — и с практикой становится легче.",
      "3. Be on your own side":"3. Будьте на своей стороне",
      "Notice how you talk to yourself when you’re anxious, and try offering the same words you’d give a good friend. Self-kindness isn’t indulgent — it’s one of the most reliable ways to calm a frightened mind.":"Заметьте, как вы говорите с собой в тревоге, и попробуйте дать себе те же слова, что и доброму другу. Доброта к себе — не потакание, а один из самых надёжных способов успокоить испуганный ум.",
      "If anxious thoughts are a regular part of your days, please know you don’t have to manage them alone. Therapy can help you understand where they come from and gently loosen their grip.":"Если тревожные мысли — постоянная часть ваших дней, знайте: вам не обязательно справляться с ними в одиночку. Терапия поможет понять, откуда они, и мягко ослабить их хватку.",
      "This article is general information and not a substitute for personal support. If you’re struggling, reaching out is a sign of strength.":"Эта статья носит общий характер и не заменяет личную поддержку. Если вам тяжело, обратиться за помощью — это признак силы.",
      "Please enter your name":"Пожалуйста, введите имя","Enter a valid phone number":"Введите корректный номер телефона",
      "Enter a valid email":"Введите корректный e-mail","Please choose a session type":"Пожалуйста, выберите тип сессии","Choose a date":"Выберите дату",
    },
    az: {
      "Psychologist":"Psixoloq","About":"Haqqında","Sessions":"Seanslar","Resources":"Resurslar","FAQ":"Suallar","Contact":"Əlaqə",
      "Book a session":"Seansa yazıl","Now welcoming new clients":"Yeni müştərilər qəbul olunur",
      "A calm place to feel":"Sakit bir məkan —","understood":"anlaşılmaq üçün",
      "Therapy with [Name] — a warm, confidential space to work through anxiety, stress, relationships and life’s harder seasons. At your pace, without judgment. In person in Baku or online.":"[Name] ilə terapiya — narahatlıq, stress, münasibətlər və həyatın çətin dövrlərini keçmək üçün isti, məxfi məkan. Öz ritminizlə, mühakiməsiz. Bakıda klinikada və ya onlayn.",
      "Book a first session":"İlk seansa yazıl","Meet [Name]":"[Name] ilə tanış ol",
      "Years of practice":"İl təcrübə","Sessions held":"Keçirilən seans","Confidential":"Məxfi",
      "Breathe — you’re welcome here":"Nəfəs alın — burada sizə şadıq",
      "“My only agenda is your wellbeing.”":"«Yeganə məqsədim sizin rifahınızdır.»",
      "Therapy that feels human, first.":"Hər şeydən əvvəl insanı görən terapiya.",
      "I’m [Name], a licensed psychologist and psychotherapist. For over a decade I’ve helped people feel steadier, more themselves, and less alone — through a relationship built on trust, warmth and genuine care.":"Mən [Name], lisenziyalı psixoloq və psixoterapevtəm. On ildən artıqdır insanlara daha dayanıqlı, özlərinə daha yaxın və daha az tənha hiss etməyə kömək edirəm — etibar, istilik və səmimi qayğı üzərində qurulan münasibətlə.",
      "There’s no “right way” to feel and nothing is too small to bring. We move at a pace that feels safe to you, and everything you share stays between us.":"Hiss etməyin «doğru yolu» yoxdur və heç bir mövzu çox kiçik deyil. Sizin üçün təhlükəsiz olan ritmlə irəliləyirik və bölüşdüyünüz hər şey aramızda qalır.",
      "Education":"Təhsil","MSc in Clinical Psychology, [University]. Ongoing training in evidence-based therapy.":"Klinik psixologiya üzrə magistr, [University]. Sübuta əsaslanan terapiya üzrə daimi təlim.",
      "Approach":"Yanaşma","Integrative — CBT, schema & person-centred — tailored to you, not a formula.":"İnteqrativ — KDT, sxem və insan mərkəzli — şablon yox, sizə uyğun.",
      "A warm, non-judgmental space — always":"İsti, mühakiməsiz məkan — həmişə",
      "Strictly confidential, bound by professional ethics":"Ciddi məxfi, peşəkar etikaya bağlı",
      "In person in Baku, or online wherever you are":"Bakıda klinikada və ya harada olsanız onlayn",
      "How I can help":"Necə kömək edə bilərəm","Ways we can work together":"Birlikdə işləmə yolları",
      "Whatever brought you here, there’s a gentle way forward. Sessions are 50 minutes, in person or online.":"Sizi bura nə gətiribsə, irəli aparan mülayim bir yol var. Seanslar 50 dəqiqədir, klinikada və ya onlayn.",
      "Individual therapy":"Fərdi terapiya",
      "One-to-one support for anxiety, low mood, stress, self-esteem and burnout — at your own pace.":"Narahatlıq, əhval düşkünlüyü, stress, özünəinam və tükənmişlik üçün təkbətək dəstək — öz ritminizlə.",
      "50 min":"50 dəq","Couples & relationships":"Cütlüklər və münasibətlər",
      "A safe, balanced space to be heard, understand each other again, and rebuild connection.":"Eşidilmək, bir-birinizi yenidən anlamaq və əlaqəni bərpa etmək üçün təhlükəsiz, balanslı məkan.",
      "60 min":"60 dəq","Online sessions":"Onlayn seanslar",
      "The same care from the comfort of home, by secure video — ideal if you’re abroad or short on time.":"Evin rahatlığında, təhlükəsiz video ilə eyni qayğı — xaricdəsinizsə və ya vaxtınız azdırsa idealdır.",
      "First":"Əvvəlcə","Reach out":"Yazın",
      "Send a message or book below. No pressure, no commitment — just a first conversation.":"Mesaj yazın və ya aşağıda qeydiyyatdan keçin. Təzyiq və öhdəlik yoxdur — sadəcə ilk söhbət.",
      "Then":"Sonra","We meet":"Görüşürük",
      "A gentle first session to understand what you need and whether we’re a good fit.":"Nəyə ehtiyacınız olduğunu və bir-birimizə uyğun olduğumuzu anlamaq üçün mülayim ilk seans.",
      "Together":"Birlikdə","Move forward":"İrəli gedirik",
      "We work at your pace toward feeling steadier, lighter, and more yourself.":"Daha dayanıqlı, yüngül və özünüz hiss etməyə doğru sizin ritminizlə işləyirik.",
      "Articles & resources":"Məqalələr və resurslar","Gentle reading between sessions":"Seanslar arasında mülayim oxu",
      "Short, kind, practical pieces on the things many of us quietly carry.":"Çoxumuzun səssizcə daşıdığı şeylər haqqında qısa, mehriban və praktik yazılar.",
      "Self-help":"Özünə kömək","Quieting anxious thoughts":"Narahat fikirləri sakitləşdirmək",
      "Three small, science-backed practices to soften anxiety when it spikes.":"Narahatlıq artanda onu yumşaltmaq üçün üç kiçik, elmə əsaslanan təcrübə.",
      "Read article":"Məqaləni oxu","Guide":"Bələdçi","“Is therapy right for me?”":"«Terapiya mənə uyğundurmu?»",
      "You don’t need to be in crisis to benefit. A look at the everyday reasons people come.":"Fayda görmək üçün böhranda olmaq lazım deyil. İnsanların gəlməsinin gündəlik səbəblərinə baxış.",
      "Coming soon":"Tezliklə","Reflection":"Düşüncə","Resting without guilt":"Günahkarlıq hissi olmadan dincəlmək",
      "Why rest feels so hard — and a kinder way to think about doing less.":"Dincəlmək niyə bu qədər çətindir — və az iş görmək haqqında daha mehriban baxış.",
      "In their words":"Onların sözləri ilə","Stories shared with permission":"İcazə ilə paylaşılan hekayələr",
      "Names withheld to protect privacy.":"Məxfilik üçün adlar gizlədilib.",
      "I came in barely able to talk about it. [Name] never rushed me — and a few months on, I finally feel like myself again.":"Bu barədə çətinliklə danışa bilən halda gəldim. [Name] heç vaxt məni tələsdirmədi — və bir neçə ay sonra nəhayət yenidən özümü özüm kimi hiss edirəm.",
      "A. client":"Müştəri","The most non-judgmental person I’ve ever spoken to. I always leave a session lighter than I arrived.":"Danışdığım ən mühakiməsiz insan. Seansdan həmişə gəldiyimdən daha yüngül çıxıram.",
      "We were on the edge of giving up. These sessions helped us actually hear each other again.":"Hər şeyi bitirməyin bir addımlığında idik. Bu seanslar bir-birimizi yenidən həqiqətən eşitməyə kömək etdi.",
      "A. couple":"Cütlük","Couples therapy":"Cütlük terapiyası",
      "Questions & reassurance":"Suallar və dəstək","It’s okay to wonder first":"Əvvəlcə tərəddüd etmək normaldır",
      "Is everything I say confidential?":"Dediyim hər şey məxfidirmi?",
      "Yes — completely. What you share stays strictly between us, protected by professional ethics and confidentiality. The only rare exceptions are where there’s a serious risk to life, which I’d always talk through with you first.":"Bəli — tamamilə. Bölüşdüyünüz şey yalnız aramızda qalır, peşəkar etika və məxfiliklə qorunur. Nadir istisna yalnız həyat üçün ciddi təhlükə olduqda baş verir və bunu həmişə əvvəlcə sizinlə müzakirə edərəm.",
      "Do I need to be “in crisis” to come?":"Gəlmək üçün «böhranda» olmalıyam?",
      "Not at all. Most people come simply because something feels heavy, stuck, or worth understanding better. You’re very welcome here whether things feel overwhelming or just slightly off.":"Əsla. Çox adam sadəcə nəyinsə ağır, ilişib qalmış və ya daha yaxşı anlamağa dəyər hiss etdiyi üçün gəlir. İstər dözülməz olsun, istər sadəcə bir az fərqli — burada sizə şadıq.",
      "What happens in the first session?":"İlk seansda nə baş verir?",
      "It’s a gentle conversation. We talk about what brought you here and what you’re hoping for — and you get a feel for working together. There’s no pressure to share more than you’re ready to.":"Bu, mülayim bir söhbətdir. Sizi nəyin gətirdiyini və nə umduğunuzu danışırıq — və birlikdə işləməyin necə olduğunu hiss edirsiniz. Hazır olduğunuzdan çox bölüşməyə təzyiq yoxdur.",
      "How many sessions will I need?":"Neçə seans lazım olacaq?",
      "It depends on you and what you’re working through — some people come for a few sessions, others longer. We review together regularly, and you’re always free to pause or stop. This is your process.":"Bu, sizdən və üzərində işlədiyinizdən asılıdır — kimi bir neçə seansa gəlir, kimi daha uzun. Müntəzəm olaraq birlikdə dəyərləndiririk və istənilən vaxt fasilə verə və ya dayana bilərsiniz. Bu, sizin prosesinizdir.",
      "Are online sessions as effective?":"Onlayn seanslar eyni dərəcədə təsirlidirmi?",
      "For most people, yes. Online therapy is well-researched and just as warm — many clients find it easier to open up from a familiar, private space of their own.":"Əksər insanlar üçün bəli. Onlayn terapiya yaxşı öyrənilib və eyni dərəcədə istidir — çox müştəri tanış, şəxsi məkandan açılmağı daha asan tapır.",
      "Take the first step":"İlk addımı atın",
      "Reaching out is often the hardest part. Share a little below and I’ll reply personally — gently, and in confidence.":"Müraciət etmək çox vaxt ən çətin hissədir. Aşağıda bir az bölüşün, şəxsən cavab verəcəyəm — mülayim və məxfi şəkildə.",
      "WhatsApp":"WhatsApp","Call":"Zəng et","Email":"E-poçt",
      "Your privacy comes first.":"Məxfiliyiniz hər şeydən öndədir.",
      "Anything you write here is used only to arrange your session, and our conversations are always confidential.":"Burada yazdığınız hər şey yalnız seansı təşkil etmək üçün istifadə olunur və söhbətlərimiz həmişə məxfidir.",
      "Book via WhatsApp":"WhatsApp ilə yazıl","Your name":"Adınız","Phone":"Telefon","(optional)":"(istəyə bağlı)",
      "Session type":"Seans növü","Choose a session":"Seans seçin","Online session":"Onlayn seans","Not sure yet":"Hələ əmin deyiləm",
      "Preferred date":"İstədiyiniz tarix","Preferred time":"İstədiyiniz vaxt","Any time":"İstənilən vaxt","Morning":"Səhər","Afternoon":"Günorta","Evening":"Axşam",
      "Anything you’d like me to know":"Bilməyimi istədiyiniz nə varsa","Send request":"Sorğu göndər",
      "Private & confidential. Sent securely via WhatsApp; an email option appears after you submit.":"Özəl və məxfi. WhatsApp ilə təhlükəsiz göndərilir; göndərdikdən sonra e-poçt seçimi görünür.",
      "Thank you for reaching out":"Müraciət etdiyiniz üçün təşəkkür",
      "WhatsApp should have opened with your message ready to send. If not, choose an option below — I’ll reply personally and gently.":"WhatsApp mesajınız hazır şəkildə açılmalı idi. Açılmadısa, aşağıdan seçim edin — şəxsən və mülayim cavab verəcəyəm.",
      "Send by email instead":"E-poçtla göndər","New request":"Yeni sorğu",
      "Contact & hours":"Əlaqə və saatlar","Where to find me":"Məni harada tapmalı","Practice":"Kabinet",
      "Hours":"İş saatları","Mon – Fri: 10:00 – 19:00":"B.e – Cümə: 10:00 – 19:00","Sat: by arrangement · Sun: closed":"Şənbə: razılaşma ilə · Bazar: bağlı",
      "Phone & WhatsApp":"Telefon və WhatsApp","Email & social":"E-poçt və sosial şəbəkə",
      "A calm, confidential space for therapy in Baku and online. Welcoming new clients — at your pace, without judgment.":"Bakıda və onlayn terapiya üçün sakit, məxfi məkan. Yeni müştərilər qəbul olunur — sizin ritminizlə, mühakiməsiz.",
      "Explore":"Keçidlər","© 2024 [Name], Psychologist. All rights reserved.":"© 2024 [Name], psixoloq. Bütün hüquqlar qorunur.",
      "If you are in crisis or at immediate risk, please contact local emergency services. This website offers general information and is not a substitute for professional assessment.":"Böhran içindəsinizsə və ya birbaşa təhlükə altındasınızsa, yerli təcili yardım xidmətlərinə müraciət edin. Bu sayt ümumi məlumat verir və peşəkar qiymətləndirməni əvəz etmir.",
      "By [Name], Psychologist · 3 min read":"Müəllif: [Name], psixoloq · 3 dəq oxu",
      "Anxiety isn’t a flaw or a weakness — it’s your mind trying, a little too hard, to keep you safe. You can’t always switch it off, but you can learn to turn the volume down. Here are three small practices that help in the moment.":"Narahatlıq qüsur və ya zəiflik deyil — bu, zehninizin sizi qorumaq üçün bir az çox cəhd etməsidir. Onu həmişə söndürmək olmur, amma səsini azaltmağı öyrənmək olar. Budur, məqamında kömək edən üç kiçik təcrübə.",
      "1. Name it to tame it":"1. Adlandır ki, ram edəsən",
      "When anxiety rises, quietly label what’s happening: “this is anxiety, and it will pass.” Naming an emotion gently moves your brain out of alarm mode and into a steadier, more reflective place.":"Narahatlıq artanda baş verəni sakitcə adlandırın: «bu, narahatlıqdır və keçib gedəcək». Hissi adlandırmaq beyninizi həyəcan rejimindən daha dayanıqlı, düşüncəli vəziyyətə mülayim şəkildə keçirir.",
      "2. Come back to your senses":"2. Hisslərinizə qayıdın",
      "Look around and notice five things you can see, four you can hear, three you can touch. This simple grounding exercise pulls you out of the spiral of thoughts and back into the present, where you’re actually safe.":"Ətrafa baxın və görə bildiyiniz beş, eşidə bildiyiniz dörd, toxuna bildiyiniz üç şeyi fərq edin. Bu sadə torpaqlama məşqi sizi fikir burulğanından çıxarıb hazırkı ana — əslində təhlükəsiz olduğunuz yerə qaytarır.",
      "Slow your out-breath — make it longer than your in-breath.":"Nəfəsverməni yavaşladın — onu nəfəsalmadan uzun edin.",
      "Unclench your jaw and drop your shoulders.":"Çənənizi boşaldın və çiyinlərinizi salın.",
      "Place a hand on your chest; feel it rise and fall.":"Əlinizi sinənizə qoyun; onun qalxıb-enməsini hiss edin.",
      "You don’t have to do this perfectly. Even a little softening is enough — and it gets easier with practice.":"Bunu mükəmməl etmək məcburiyyətində deyilsiniz. Hətta bir az yumşalma kifayətdir — və təcrübə ilə asanlaşır.",
      "3. Be on your own side":"3. Öz tərəfinizdə olun",
      "Notice how you talk to yourself when you’re anxious, and try offering the same words you’d give a good friend. Self-kindness isn’t indulgent — it’s one of the most reliable ways to calm a frightened mind.":"Narahat olanda özünüzlə necə danışdığınızı fərq edin və yaxşı bir dosta deyəcəyiniz sözləri özünüzə deyin. Özünə mehribanlıq şımarıqlıq deyil — qorxmuş zehni sakitləşdirməyin ən etibarlı yollarından biridir.",
      "If anxious thoughts are a regular part of your days, please know you don’t have to manage them alone. Therapy can help you understand where they come from and gently loosen their grip.":"Narahat fikirlər günlərinizin daimi hissəsidirsə, bilin ki, onlarla tək başına mübarizə aparmaq məcburiyyətində deyilsiniz. Terapiya onların haradan gəldiyini anlamağa və tutuşunu mülayim şəkildə zəiflətməyə kömək edə bilər.",
      "This article is general information and not a substitute for personal support. If you’re struggling, reaching out is a sign of strength.":"Bu məqalə ümumi məlumatdır və şəxsi dəstəyi əvəz etmir. Çətinlik çəkirsinizsə, kömək istəmək gücün əlamətidir.",
      "Please enter your name":"Zəhmət olmasa adınızı daxil edin","Enter a valid phone number":"Düzgün telefon nömrəsi daxil edin",
      "Enter a valid email":"Düzgün e-poçt daxil edin","Please choose a session type":"Zəhmət olmasa seans növünü seçin","Choose a date":"Tarix seçin",
    }
  };

  let nodes = null; const orig = new WeakMap();
  function ok(node){let p=node.parentNode;while(p&&p.nodeType===1){if(SKIP.has(p.tagName))return false;const c=p.classList;if(c&&(c.contains('langs')||c.contains('lng')))return false;if(p.hasAttribute&&p.hasAttribute('data-count'))return false;p=p.parentNode;}return true;}
  let phEls=null;
  function collect(){
    nodes=[];
    const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(n){
      if(!n.nodeValue||!n.nodeValue.trim())return NodeFilter.FILTER_REJECT;
      if(!/[A-Za-zА-Яа-яƏəÇçĞğİıÖöŞşÜü]/.test(n.nodeValue))return NodeFilter.FILTER_REJECT;
      return ok(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;}});
    let n;while((n=w.nextNode())){nodes.push(n);if(!orig.has(n))orig.set(n,n.nodeValue);}
    phEls=Array.from(document.querySelectorAll('[placeholder]'));
    phEls.forEach(e=>{if(!e.dataset.phOrig)e.dataset.phOrig=e.getAttribute('placeholder');});
  }
  function cur(){const l=localStorage.getItem(KEY);return SUP.includes(l)?l:'en';}
  function apply(lang){
    if(!SUP.includes(lang))lang='en';
    localStorage.setItem(KEY,lang);document.documentElement.lang=lang;
    if(!nodes)collect();
    const map=lang==='en'?null:DICT[lang];
    nodes.forEach(n=>{const o=orig.get(n);
      if(lang==='en'){if(n.nodeValue!==o)n.nodeValue=o;return;}
      const tr=map[norm(o)];
      if(tr!=null){const lead=(o.match(/^\s+/)||[''])[0],tail=(o.match(/\s+$/)||[''])[0];n.nodeValue=lead+tr+tail;}
      else if(n.nodeValue!==o)n.nodeValue=o;});
    phEls.forEach(e=>{const o=e.dataset.phOrig;e.setAttribute('placeholder',lang==='en'?o:(map[norm(o)]||o));});
    document.querySelectorAll('.lng').forEach(b=>{const on=b.dataset.lang===lang;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on?'true':'false');});
    window.__LANG=lang;
  }
  function t(en){const l=window.__LANG||cur();return l==='en'?en:((DICT[l]&&DICT[l][norm(en)])||en);}
  window.I18N={apply,t,cur};
  function init(){apply(cur());document.querySelectorAll('.lng').forEach(b=>b.addEventListener('click',()=>apply(b.dataset.lang)));}
  if(document.readyState!=='loading')init();else document.addEventListener('DOMContentLoaded',init);
})();
