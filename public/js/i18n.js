/* Dictionnaire bilingue FR / AR pour l'ensemble du site */
const TRANSLATIONS = {
  "skip": { fr: "Aller au contenu", ar: "الانتقال إلى المحتوى" },
  "brand.name": { fr: "Académie des Collectivités Territoriales", ar: "الأكاديمية الترابية للتكوين" },
  "brand.tagline": { fr: "Formation des élus et fonctionnaires territoriaux", ar: "تكوين المنتخبين وموظفي الجماعات الترابية" },

  "nav.home": { fr: "Accueil", ar: "الرئيسية" },
  "nav.programme": { fr: "Programme de formation", ar: "برنامج التكوين" },
  "nav.calendar": { fr: "Calendrier", ar: "التقويم" },
  "nav.register": { fr: "Inscription", ar: "التسجيل" },
  "nav.about": { fr: "À propos", ar: "من نحن" },
  "nav.contact": { fr: "Contact", ar: "اتصل بنا" },
  "nav.propositions": { fr: "Propositions", ar: "المقترحات" },
  "nav.cta": { fr: "S'inscrire", ar: "التسجيل الآن" },
  "nav.login": { fr: "Se connecter", ar: "تسجيل الدخول" },
  "nav.myaccount": { fr: "Mon compte", ar: "حسابي" },
  "nav.logout": { fr: "Déconnexion", ar: "تسجيل الخروج" },
  "nav.hello": { fr: "Bonjour", ar: "مرحباً" },

  "auth.login.title": { fr: "Se connecter", ar: "تسجيل الدخول" },
  "auth.login.desc": { fr: "Accédez à votre espace personnel pour suivre vos inscriptions et vos formations.", ar: "لجوا إلى فضائكم الشخصي لتتبع تسجيلاتكم وتكويناتكم." },
  "auth.email": { fr: "Adresse e-mail", ar: "البريد الإلكتروني" },
  "auth.password": { fr: "Mot de passe", ar: "كلمة السر" },
  "auth.login.submit": { fr: "Se connecter", ar: "تسجيل الدخول" },
  "auth.login.noaccount": { fr: "Pas encore de compte ?", ar: "ليس لديكم حساب بعد؟" },
  "auth.login.createlink": { fr: "Créer un compte", ar: "إنشاء حساب" },

  "auth.register.title": { fr: "Créer un compte", ar: "إنشاء حساب" },
  "auth.register.desc": { fr: "Créez votre compte pour vous inscrire aux formations et suivre votre parcours.", ar: "أنشئوا حسابكم للتسجيل في التكوينات وتتبع مسارك." },
  "auth.register.firstname": { fr: "Prénom", ar: "الاسم الشخصي" },
  "auth.register.lastname": { fr: "Nom", ar: "الاسم العائلي" },
  "auth.register.profile": { fr: "Vous êtes", ar: "صفتكم" },
  "auth.register.profile.elu": { fr: "Élu(e) local(e)", ar: "منتخب(ة) محلي(ة)" },
  "auth.register.profile.fonctionnaire": { fr: "Fonctionnaire territorial(e)", ar: "موظف(ة) بجماعة ترابية" },
  "auth.register.profile.cadre": { fr: "Cadre de l'administration déconcentrée", ar: "إطار بالإدارة اللاممركزة" },
  "auth.register.profile.autre": { fr: "Autre", ar: "أخرى" },
  "auth.register.collectivite": { fr: "Collectivité / institution", ar: "الجماعة / المؤسسة" },
  "auth.register.poste": { fr: "Fonction occupée", ar: "المنصب المشغول" },
  "auth.register.password.hint": { fr: "8 caractères minimum", ar: "8 أحرف على الأقل" },
  "auth.register.confirm": { fr: "Confirmer le mot de passe", ar: "تأكيد كلمة السر" },
  "auth.register.submit": { fr: "Créer mon compte", ar: "إنشاء حسابي" },
  "auth.register.hasaccount": { fr: "Déjà un compte ?", ar: "لديكم حساب بالفعل؟" },
  "auth.register.loginlink": { fr: "Se connecter", ar: "تسجيل الدخول" },

  "auth.error.invalid_fields": { fr: "Champs invalides. Le mot de passe doit contenir au moins 8 caractères.", ar: "حقول غير صحيحة. يجب أن تتكون كلمة السر من 8 أحرف على الأقل." },
  "auth.error.email_taken": { fr: "Un compte existe déjà avec cet e-mail.", ar: "يوجد حساب بالفعل بهذا البريد الإلكتروني." },
  "auth.error.invalid_credentials": { fr: "E-mail ou mot de passe incorrect.", ar: "البريد الإلكتروني أو كلمة السر غير صحيحة." },
  "auth.error.server_error": { fr: "Erreur serveur. Veuillez réessayer.", ar: "خطأ في الخادم. يرجى إعادة المحاولة." },
  "auth.error.password_mismatch": { fr: "Les mots de passe ne correspondent pas.", ar: "كلمتا السر غير متطابقتين." },

  "footer.about.title": { fr: "L'Académie", ar: "عن الأكاديمية" },
  "footer.about.text": { fr: "Un dispositif de formation continue dédié aux élus locaux et aux fonctionnaires des collectivités territoriales du Maroc, couvrant l'ensemble des compétences de la gestion territoriale.", ar: "برنامج للتكوين المستمر موجه للمنتخبين المحليين وموظفي الجماعات الترابية بالمغرب، يغطي مجموع الكفاءات المرتبطة بالتدبير الترابي." },
  "footer.links.title": { fr: "Liens utiles", ar: "روابط مفيدة" },
  "footer.contact.title": { fr: "Contact", ar: "تواصل معنا" },
  "footer.rights": { fr: "Tous droits réservés.", ar: "جميع الحقوق محفوظة." },

  "home.hero.subtitle": { fr: "Renforcer les compétences et moderniser la gouvernance territoriale", ar: "تعزيز الكفاءات وتحديث الحكامة الترابية" },
  "hero.search.placeholder": { fr: "Rechercher une formation, un thème, une loi…", ar: "ابحث عن تكوين أو موضوع أو قانون…" },
  "hero.search.btn": { fr: "Rechercher", ar: "بحث" },
  "home.hero.title": { fr: "La plateforme universitaire", ar: "المنصة الجامعية للتكوين المستمر للمنتخبين" },
  "home.hero.cta1": { fr: "Découvrir le programme", ar: "اكتشف البرنامج" },

  "home.public.label": { fr: "Public cible", ar: "الفئة المستهدفة" },
  "home.public.title": { fr: "Une offre conçue pour les acteurs territoriaux", ar: "عرض تكويني موجه للفاعلين الترابيين" },
  "home.public.card1.title": { fr: "Élus locaux", ar: "المنتخبون المحليون" },
  "home.public.card1.desc": { fr: "Présidents et vice-présidents de conseils, conseillers communaux, préfectoraux, provinciaux et régionaux.", ar: "رؤساء ونواب رؤساء المجالس، المستشارون الجماعيون والإقليميون والجهويون." },
  "home.public.card2.title": { fr: "Fonctionnaires territoriaux", ar: "موظفو الجماعات الترابية" },
  "home.public.card2.desc": { fr: "Secrétaires généraux, directeurs généraux des services, cadres et chefs de division des collectivités.", ar: "الكتاب العامون، المديرون العامون للمصالح، الأطر ورؤساء الأقسام بالجماعات." },
  "home.public.card3.title": { fr: "Cadres de l'administration territoriale", ar: "أطر الإدارة الترابية" },
  "home.public.card3.desc": { fr: "Agents de l'administration déconcentrée en appui aux collectivités : wilayas, provinces, préfectures.", ar: "أعوان الإدارة اللاممركزة الداعمة للجماعات الترابية: الجهات والأقاليم والعمالات." },

  "home.why.label": { fr: "Pourquoi se former", ar: "لماذا التكوين" },
  "home.why.title": { fr: "Une montée en compétence au service de la bonne gouvernance", ar: "الارتقاء بالكفاءات في خدمة الحكامة الجيدة" },
  "home.why.item1": { fr: "Maîtriser le cadre juridique issu des lois organiques et des réformes de la décentralisation", ar: "التمكن من الإطار القانوني المنبثق عن القوانين التنظيمية وإصلاحات اللامركزية" },
  "home.why.item2": { fr: "Professionnaliser la gestion budgétaire, financière et des marchés publics", ar: "احترافية التدبير الميزانياتي والمالي والصفقات العمومية" },
  "home.why.item3": { fr: "Accompagner la transformation numérique et la modernisation des services", ar: "مواكبة التحول الرقمي وتحديث المرافق" },
  "home.why.item4": { fr: "Renforcer la gestion des risques, des crises et la responsabilité des collectivités", ar: "تعزيز تدبير المخاطر والأزمات ومسؤولية الجماعات" },
  "home.why.item5": { fr: "Développer une vision stratégique du développement territorial durable", ar: "تطوير رؤية استراتيجية للتنمية الترابية المستدامة" },

  "home.programme.label": { fr: "Programme", ar: "البرنامج" },
  "home.programme.title": { fr: "Aperçu des 20 sections du programme", ar: "لمحة عن أقسام البرنامج العشرين" },
  "home.programme.desc": { fr: "Chaque section regroupe plusieurs axes de formation et modules pratiques. Cliquez pour explorer le programme complet.", ar: "يضم كل قسم عدة محاور تكوينية ووحدات تطبيقية. اضغط لاستكشاف البرنامج الكامل." },
  "home.programme.more": { fr: "Voir le programme complet", ar: "مشاهدة البرنامج الكامل" },
  "home.programme.axes": { fr: "axes", ar: "محاور" },
  "home.programme.suggest.title": { fr: "Proposer une thématique", ar: "المقترحات" },
  "home.programme.suggest.desc": { fr: "Soumettre une idée", ar: "اقترح موضوعاً" },

  "home.format.label": { fr: "Modalités", ar: "طرائق التكوين" },
  "home.format.title": { fr: "Un dispositif souple et adapté au terrain", ar: "برنامج مرن ومتكيف مع الميدان" },
  "home.format.card1.title": { fr: "Présentiel", ar: "حضورياً" },
  "home.format.card1.desc": { fr: "Sessions en salle animées par des experts, avec études de cas et ateliers pratiques.", ar: "دورات حضورية يؤطرها خبراء، مع دراسات حالة وورشات تطبيقية." },
  "home.format.card2.title": { fr: "À distance", ar: "عن بعد" },
  "home.format.card2.desc": { fr: "Modules en ligne accessibles à votre rythme, avec ressources téléchargeables.", ar: "وحدات عن بعد يمكن متابعتها حسب الإيقاع الخاص، مع موارد قابلة للتحميل." },
  "home.format.card3.title": { fr: "Hybride", ar: "مختلط" },
  "home.format.card3.desc": { fr: "Combinaison de temps collectifs en présentiel et de séquences autonomes à distance.", ar: "مزج بين لحظات جماعية حضورية وتسلسلات ذاتية عن بعد." },

  "home.cta.title": { fr: "Prêt à renforcer vos compétences territoriales ?", ar: "هل أنتم مستعدون لتعزيز كفاءاتكم الترابية؟" },
  "home.cta.desc": { fr: "Rejoignez une prochaine session de formation ou contactez notre équipe pédagogique pour un accompagnement sur mesure.", ar: "انضموا إلى إحدى دوراتنا القادمة أو تواصلوا مع فريقنا البيداغوجي لمواكبة على المقاس." },
  "home.cta.btn1": { fr: "Voir le calendrier", ar: "مشاهدة التقويم" },
  "home.cta.btn2": { fr: "Nous contacter", ar: "اتصلوا بنا" },

  "breadcrumb.home": { fr: "Accueil", ar: "الرئيسية" },

  "prog.hero.title": { fr: "Programme de formation", ar: "برنامج التكوين" },
  "prog.hero.desc": { fr: "20 sections, 30 axes et 94 modules couvrant l'ensemble des compétences de la gestion territoriale, du cadre juridique à l'évaluation des politiques publiques.", ar: "20 قسماً و30 محوراً و94 وحدة تغطي مجموع الكفاءات المرتبطة بالتدبير الترابي، من الإطار القانوني إلى تقييم السياسات العمومية." },
  "prog.search.placeholder": { fr: "Rechercher un module, un axe, une section…", ar: "ابحث عن وحدة أو محور أو قسم…" },
  "prog.search.empty": { fr: "Aucun résultat pour cette recherche.", ar: "لا توجد نتائج لهذا البحث." },
  "prog.expand.all": { fr: "Tout déplier", ar: "فتح الكل" },
  "prog.collapse.all": { fr: "Tout replier", ar: "طي الكل" },
  "prog.section.label": { fr: "Section", ar: "القسم" },
  "prog.axes.count": { fr: "axes", ar: "محاور" },

  "cal.hero.title": { fr: "Calendrier des sessions", ar: "تقويم الدورات" },
  "cal.hero.desc": { fr: "Sessions indicatives à venir. Le calendrier est actualisé régulièrement — contactez-nous pour confirmer les dates et les places disponibles.", ar: "دورات إخبارية قادمة. يتم تحديث التقويم بانتظام — تواصلوا معنا لتأكيد التواريخ والأماكن المتاحة." },
  "cal.filter.all": { fr: "Toutes les sessions", ar: "جميع الدورات" },
  "cal.filter.presentiel": { fr: "Présentiel", ar: "حضورياً" },
  "cal.filter.distance": { fr: "À distance", ar: "عن بعد" },
  "cal.filter.hybride": { fr: "Hybride", ar: "مختلط" },
  "cal.card.register": { fr: "S'inscrire", ar: "التسجيل" },
  "cal.card.places": { fr: "places disponibles", ar: "مكان متاح" },

  "reg.hero.title": { fr: "Inscription à une formation", ar: "التسجيل في دورة تكوينية" },
  "reg.hero.desc": { fr: "Remplissez le formulaire ci-dessous. Notre équipe pédagogique vous recontactera pour confirmer votre inscription.", ar: "املأوا الاستمارة أدناه. سيتصل بكم فريقنا البيداغوجي لتأكيد تسجيلكم." },
  "reg.form.identity": { fr: "Vos informations", ar: "معلوماتكم الشخصية" },
  "reg.form.firstname": { fr: "Prénom", ar: "الاسم الشخصي" },
  "reg.form.lastname": { fr: "Nom", ar: "الاسم العائلي" },
  "reg.form.email": { fr: "Adresse e-mail", ar: "البريد الإلكتروني" },
  "reg.form.phone": { fr: "Téléphone", ar: "الهاتف" },
  "reg.form.profile": { fr: "Vous êtes", ar: "صفتكم" },
  "reg.form.profile.elu": { fr: "Élu(e) local(e)", ar: "منتخب(ة) محلي(ة)" },
  "reg.form.profile.fonctionnaire": { fr: "Fonctionnaire territorial(e)", ar: "موظف(ة) بجماعة ترابية" },
  "reg.form.profile.cadre": { fr: "Cadre de l'administration déconcentrée", ar: "إطار بالإدارة اللاممركزة" },
  "reg.form.profile.autre": { fr: "Autre", ar: "أخرى" },
  "reg.form.collectivite": { fr: "Collectivité / institution", ar: "الجماعة / المؤسسة" },
  "reg.form.poste": { fr: "Fonction occupée", ar: "المنصب المشغول" },
  "reg.form.training": { fr: "Formation souhaitée", ar: "التكوين المرغوب" },
  "reg.form.section": { fr: "Section du programme", ar: "قسم البرنامج" },
  "reg.form.section.placeholder": { fr: "Choisissez une section…", ar: "اختاروا قسماً…" },
  "reg.form.format": { fr: "Modalité souhaitée", ar: "الطريقة المرغوبة" },
  "reg.form.format.presentiel": { fr: "Présentiel", ar: "حضورياً" },
  "reg.form.format.distance": { fr: "À distance", ar: "عن بعد" },
  "reg.form.format.hybride": { fr: "Hybride", ar: "مختلط" },
  "reg.form.message": { fr: "Message (facultatif)", ar: "رسالة (اختياري)" },
  "reg.form.message.placeholder": { fr: "Précisez vos besoins ou vos disponibilités…", ar: "حددوا احتياجاتكم أو توفركم…" },
  "reg.form.submit": { fr: "Envoyer ma demande d'inscription", ar: "إرسال طلب التسجيل" },
  "reg.form.required": { fr: "Champs obligatoires", ar: "الحقول الإلزامية" },
  "reg.success.title": { fr: "Demande envoyée !", ar: "تم إرسال الطلب!" },
  "reg.success.desc": { fr: "Merci pour votre inscription. Notre équipe pédagogique vous contactera prochainement pour finaliser votre participation.", ar: "شكراً لتسجيلكم. سيتواصل معكم فريقنا البيداغوجي قريباً لإتمام مشاركتكم." },
  "reg.success.back": { fr: "Retour à l'accueil", ar: "العودة إلى الرئيسية" },

  "about.hero.title": { fr: "À propos de l'Académie", ar: "من نحن" },
  "about.hero.desc": { fr: "Un dispositif de formation continue au service de la modernisation de la gestion territoriale marocaine.", ar: "برنامج للتكوين المستمر في خدمة تحديث التدبير الترابي بالمغرب." },
  "about.mission.label": { fr: "Notre mission", ar: "مهمتنا" },
  "about.mission.title": { fr: "Accompagner la montée en compétence des acteurs territoriaux", ar: "مواكبة الارتقاء بكفاءات الفاعلين الترابيين" },
  "about.mission.text1": { fr: "Depuis l'entrée en vigueur des lois organiques relatives aux collectivités territoriales, les élus et les fonctionnaires territoriaux sont appelés à exercer des responsabilités élargies dans des domaines juridiques, financiers, techniques et stratégiques toujours plus exigeants.", ar: "منذ دخول القوانين التنظيمية المتعلقة بالجماعات الترابية حيز التنفيذ، أصبح المنتخبون والموظفون الترابيون مطالبين بممارسة مسؤوليات موسعة في مجالات قانونية ومالية وتقنية واستراتيجية متزايدة التعقيد." },
  "about.mission.text2": { fr: "Notre programme de formation, structuré en 20 sections et 30 axes thématiques, vise à outiller ces acteurs pour une gestion territoriale efficace, transparente et durable, au bénéfice des citoyens et des territoires.", ar: "يهدف برنامجنا التكويني، المهيكل في 20 قسماً و30 محوراً موضوعاتياً، إلى تزويد هؤلاء الفاعلين بالأدوات اللازمة لتدبير ترابي فعال وشفاف ومستدام، لفائدة المواطنين والترابيات." },
  "about.objectives.label": { fr: "Objectifs pédagogiques", ar: "الأهداف البيداغوجية" },
  "about.obj1.title": { fr: "Maîtrise juridique", ar: "التمكن القانوني" },
  "about.obj1.desc": { fr: "Comprendre et appliquer le cadre légal et réglementaire de la décentralisation.", ar: "فهم وتطبيق الإطار القانوني والتنظيمي للامركزية." },
  "about.obj2.title": { fr: "Excellence opérationnelle", ar: "التميز التشغيلي" },
  "about.obj2.desc": { fr: "Renforcer les capacités de gestion budgétaire, technique et de projets.", ar: "تعزيز قدرات التدبير الميزانياتي والتقني والمشاريعي." },
  "about.obj3.title": { fr: "Gouvernance et éthique", ar: "الحكامة والأخلاقيات" },
  "about.obj3.desc": { fr: "Promouvoir une gouvernance responsable, transparente et participative.", ar: "تعزيز حكامة مسؤولة وشفافة وتشاركية." },
  "about.obj4.title": { fr: "Innovation territoriale", ar: "الابتكار الترابي" },
  "about.obj4.desc": { fr: "Accompagner la transformation numérique et le développement durable.", ar: "مواكبة التحول الرقمي والتنمية المستدامة." },
  "about.method.label": { fr: "Méthodologie", ar: "المنهجية" },
  "about.method.title": { fr: "Une pédagogie active et ancrée dans la pratique", ar: "بيداغوجيا نشيطة ومرتبطة بالممارسة" },
  "about.method1": { fr: "Formateurs experts issus de l'administration, de l'université et du secteur juridique", ar: "مكونون خبراء من الإدارة والجامعة والقطاع القانوني" },
  "about.method2": { fr: "Études de cas concrets tirés de la pratique territoriale marocaine", ar: "دراسات حالة واقعية مستمدة من الممارسة الترابية المغربية" },
  "about.method3": { fr: "Ateliers pratiques, simulations et mises en situation", ar: "ورشات تطبيقية ومحاكاة ووضعيات ميدانية" },
  "about.method4": { fr: "Ressources documentaires et supports pédagogiques téléchargeables", ar: "موارد توثيقية ودعامات بيداغوجية قابلة للتحميل" },

  "contact.hero.title": { fr: "Contact", ar: "اتصل بنا" },
  "contact.hero.desc": { fr: "Une question sur le programme, une session ou une inscription ? Notre équipe vous répond.", ar: "سؤال حول البرنامج أو دورة أو تسجيل؟ فريقنا في خدمتكم." },
  "contact.info.title": { fr: "Nos coordonnées", ar: "معلومات الاتصال" },
  "contact.info.address.title": { fr: "Adresse", ar: "العنوان" },
  "contact.info.address.text": { fr: "Avenue Mohammed V, Rabat, Maroc", ar: "شارع محمد الخامس، الرباط، المغرب" },
  "contact.info.phone.title": { fr: "Téléphone", ar: "الهاتف" },
  "contact.info.email.title": { fr: "E-mail", ar: "البريد الإلكتروني" },
  "contact.info.hours.title": { fr: "Horaires", ar: "أوقات العمل" },
  "contact.info.hours.text": { fr: "Lundi – Vendredi, 9h00 – 17h00", ar: "الاثنين – الجمعة، 9:00 – 17:00" },
  "contact.form.title": { fr: "Envoyez-nous un message", ar: "أرسلوا لنا رسالة" },
  "contact.form.name": { fr: "Nom complet", ar: "الاسم الكامل" },
  "contact.form.email": { fr: "Adresse e-mail", ar: "البريد الإلكتروني" },
  "contact.form.subject": { fr: "Sujet", ar: "الموضوع" },
  "contact.form.message": { fr: "Message", ar: "الرسالة" },
  "contact.form.submit": { fr: "Envoyer le message", ar: "إرسال الرسالة" },
  "contact.success.title": { fr: "Message envoyé !", ar: "تم إرسال الرسالة!" },
  "contact.success.desc": { fr: "Merci de nous avoir contactés. Nous vous répondrons dans les meilleurs délais.", ar: "شكراً لتواصلكم معنا. سنرد عليكم في أقرب الآجال." },

  "prop.hero.title": { fr: "Propositions", ar: "المقترحات" },
  "prop.hero.desc": { fr: "Vous avez une idée de thématique ou de module à intégrer au programme ? Partagez-la avec notre équipe pédagogique.", ar: "لديكم فكرة لموضوع أو وحدة تكوينية تودون اقتراحها على البرنامج؟ شاركونا بها مع فريقنا البيداغوجي." },
  "prop.form.title": { fr: "Soumettre une proposition", ar: "إرسال مقترح" },
  "prop.form.name": { fr: "Nom complet", ar: "الاسم الكامل" },
  "prop.form.email": { fr: "Adresse e-mail", ar: "البريد الإلكتروني" },
  "prop.form.collectivite": { fr: "Collectivité / institution", ar: "الجماعة / المؤسسة" },
  "prop.form.theme": { fr: "Thématique proposée", ar: "الموضوع المقترح" },
  "prop.form.message": { fr: "Description de votre proposition", ar: "وصف المقترح" },
  "prop.form.submit": { fr: "Envoyer la proposition", ar: "إرسال المقترح" },
  "prop.success.title": { fr: "Proposition envoyée !", ar: "تم إرسال المقترح!" },
  "prop.success.desc": { fr: "Merci pour votre contribution. Notre équipe pédagogique l'examinera avec attention.", ar: "شكراً على مساهمتكم. سيدرسها فريقنا البيداغوجي باهتمام." }
};

function getLang() {
  return localStorage.getItem("sitelang") || "ar";
}

function setLang(lang) {
  localStorage.setItem("sitelang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = TRANSLATIONS[key];
    if (entry && entry[lang]) el.textContent = entry[lang];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const entry = TRANSLATIONS[key];
    if (entry && entry[lang]) el.placeholder = entry[lang];
  });

  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.textContent = lang === "fr" ? "العربية" : "Français";
  });

  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(getLang());
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => setLang(getLang() === "fr" ? "ar" : "fr"));
  });
});
