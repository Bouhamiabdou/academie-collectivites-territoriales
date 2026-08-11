/* Données du programme de formation — 20 sections, 30 axes, 94 modules */
const PROGRAMME = [
  {
    fr: "Cadre juridique général et principes constitutionnels de la décentralisation",
    ar: "الإطار القانوني العام والمبادئ الدستورية للامركزية",
    axes: [
      {
        fr: "Lois organiques relatives aux collectivités territoriales",
        ar: "القوانين التنظيمية للجماعات الترابية",
        items: [
          { fr: "Étude de la loi organique n° 113.14 relative aux communes", ar: "دراسة القانون التنظيمي 113.14 المتعلق بالجماعات" },
          { fr: "Étude de la loi organique n° 112.14 relative aux préfectures et provinces", ar: "دراسة القانون التنظيمي 112.14 المتعلق بالعمالات والأقاليم" },
          { fr: "Étude de la loi organique n° 111.14 relative aux régions", ar: "دراسة القانون التنظيمي 111.14 المتعلق بالجهات" }
        ]
      },
      {
        fr: "Principes de décentralisation et de déconcentration administrative",
        ar: "مبادئ اللامركزية واللاتمركز الإداري",
        items: [
          { fr: "Fondement constitutionnel (article 135 et suivants)", ar: "الإسناد الدستوري (الفصل 135 وما يليه)" },
          { fr: "Le principe de libre administration", ar: "مبدأ التدبير الحر" },
          { fr: "Application du principe de subsidiarité", ar: "تطبيق مبدأ التفريع" },
          { fr: "Mécanismes de gouvernance multi-niveaux", ar: "آليات الحكامة متعددة المستويات" }
        ]
      }
    ]
  },
  {
    fr: "L'élu local, l'éthique et la gestion administrative et humaine",
    ar: "المنتخب المحلي، الأخلاقيات، والتدبير الإداري والبشري",
    axes: [
      {
        fr: "Statut de l'élu local et éthique du service public",
        ar: "النظام الأساسي للمنتخب المحلي وأخلاقيات المرفق",
        items: [
          { fr: "Droits et devoirs de l'élu local", ar: "حقوق وواجبات المنتخب المحلي" },
          { fr: "Cas d'incompatibilité et gestion des conflits d'intérêts", ar: "حالات التنافي وتدبير تضارب المصالح" },
          { fr: "Éthique du service public local et prévention du trafic d'influence", ar: "أخلاقيات المرفق العمومي المحلي ومنع استغلال النفوذ" }
        ]
      }
    ]
  },
  {
    fr: "Planification stratégique territoriale et aménagement du territoire",
    ar: "التخطيط الاستراتيجي الترابي وإعداد التراب",
    axes: [
      {
        fr: "Planification stratégique territoriale",
        ar: "التخطيط الاستراتيجي الترابي",
        items: [
          { fr: "Méthodologie d'élaboration du Programme d'Action Communal (PAC)", ar: "منهجية إعداد برنامج عمل الجماعة (PAC)" },
          { fr: "Le Schéma Régional d'Aménagement du Territoire (SRAT) et la concertation publique", ar: "التصميم الجهوي لإعداد التراب (SRAT) والتشاور العمومي" },
          { fr: "Cohérence et convergence des programmes communaux avec les stratégies nationales", ar: "انسجام والتقائية برامج الجماعات مع الاستراتيجيات الوطنية" }
        ]
      },
      {
        fr: "Aménagement du territoire et urbanisme",
        ar: "إعداد التراب والتعمير",
        items: [
          { fr: "Maîtrise des documents d'urbanisme (plans d'aménagement et plans directeurs)", ar: "التحكم في وثائق التعمير (تصاميم التهيئة والتصاميم الموجهة)" },
          { fr: "Autorisations d'urbanisme et de construire", ar: "رخص التعمير والبناء" },
          { fr: "Accompagnement des villes nouvelles et des pôles urbains durables", ar: "مواكبة المدن الجديدة والأقطاب الحضرية المستدامة" }
        ]
      }
    ]
  },
  {
    fr: "Gestion foncière, domaniale et expropriation",
    ar: "التدبير العقاري، الأملاك، ونزع الملكية",
    axes: [
      {
        fr: "Gestion foncière, domaniale et expropriation",
        ar: "التدبير العقاري، الأملاك، ونزع الملكية",
        items: [
          { fr: "Domaine public et privé des collectivités territoriales et constitution des réserves foncières", ar: "الأملاك العامة والخاصة للجماعات الترابية وتكوين الاحتياطات العقارية" },
          { fr: "Procédure d'expropriation pour cause d'utilité publique et commissions d'évaluation", ar: "مسطرة نزع الملكية لأجل المنفعة العامة ولجان التقويم" },
          { fr: "Mobilisation des terres collectives (soulaliyates) et protection du domaine public (maritime, forestier, ferroviaire)", ar: "تعبئة أراضي الجماعات السلالية وحماية الملك العمومي (البحري، الغابوي، والسككي)" }
        ]
      }
    ]
  },
  {
    fr: "Budget, fiscalité et finances avancées",
    ar: "الميزانية، الجبايات، والمالية المتقدمة",
    axes: [
      {
        fr: "Budget de la collectivité territoriale",
        ar: "ميزانية الجماعة الترابية",
        items: [
          { fr: "Processus d'élaboration et de vote du budget", ar: "مسار إعداد ميزانية الجماعة والتصويت عليها" },
          { fr: "Procédures d'exécution des dépenses et des recettes", ar: "مساطر تنفيذ النفقات والإيرادات" },
          { fr: "Mécanismes d'arbitrage financier", ar: "آليات التحكيم المالي" }
        ]
      },
      {
        fr: "Fiscalité territoriale et recouvrement",
        ar: "الجبايات الترابية والتحصيل",
        items: [
          { fr: "Taxes transférées au profit des collectivités territoriales", ar: "الرسوم المحولة لفائدة الجماعات الترابية" },
          { fr: "Taxes perçues directement par les collectivités", ar: "الرسوم المحصلة مباشرة من طرف الجماعات" },
          { fr: "Gestion de l'assiette fiscale et procédures de recouvrement", ar: "تدبير الوعاء الضريبي ومساطر التحصيل" }
        ]
      },
      {
        fr: "Gestion financière avancée et financements alternatifs",
        ar: "التدبير المالي المتقدم والتمويلات البديلة",
        items: [
          { fr: "Recours à l'emprunt organisé et émission d'obligations locales", ar: "اللجوء إلى الاقتراض المنظم وإصدار السندات القرضية والمحلية" },
          { fr: "Mécanismes de financement participatif (crowdfunding) et waqf local", ar: "آليات التمويل التشاركي (Crowdfunding) والوقف المحلي" },
          { fr: "Partenariat avec les fonds d'investissement régionaux et ingénierie de restructuration de la dette", ar: "الشراكة مع صناديق الاستثمار الجهوية وهندسة إعادة هيكلة الديون" }
        ]
      }
    ]
  },
  {
    fr: "Marchés publics et commande publique",
    ar: "الصفقات العمومية والطلبات العمومية",
    axes: [
      {
        fr: "Marchés publics et commande publique",
        ar: "الصفقات العمومية والطلبات العمومية",
        items: [
          { fr: "Décrets régissant la commande publique et procédures de passation en vigueur", ar: "المراسيم المنظمة للطلبات العمومية ومساطر الإبرام الجاري بها العمل" },
          { fr: "Commissions des marchés publics et modalités de contrôle", ar: "لجان الصفقات العمومية وأساليب المراقبة" },
          { fr: "Marchés d'innovation dédiés aux start-ups", ar: "صفقات الابتكار المخصصة للمقاولات الناشئة (Start-ups)" }
        ]
      }
    ]
  },
  {
    fr: "Ingénierie et gestion des projets territoriaux",
    ar: "هندسة وتدبير المشاريع الترابية",
    axes: [
      {
        fr: "Gestion des projets territoriaux",
        ar: "تدبير المشاريع الترابية",
        items: [
          { fr: "Identification des besoins et rédaction des cahiers des charges", ar: "مرحلة تحديد الحاجيات وصياغة دفاتر التحملات" },
          { fr: "Suivi des chantiers et réception provisoire/définitive des travaux", ar: "تتبع أوراش البناء وتسليم الأشغال المؤقت والنهائي" },
          { fr: "Évaluation socio-économique des projets réalisés", ar: "التقييم السوسيو-اقتصادي للمشاريع المنجزة" }
        ]
      }
    ]
  },
  {
    fr: "Modes de gestion des services publics locaux",
    ar: "أشكال تدبير المرافق العمومية المحلية",
    axes: [
      {
        fr: "Modes de gestion des services publics locaux",
        ar: "أشكال تدبير المرافق العمومية المحلية",
        items: [
          { fr: "Régie directe (gestion directe et services gérés de manière autonome - SEGMA)", ar: "آليات التدبير المباشر (التسيير المباشر والمصالح المسيرة بطريقة مستقلة - SEGMA)" },
          { fr: "Contrats de gestion déléguée des services publics", ar: "عقود التدبير المفوض للمرافق العمومية" },
          { fr: "Sociétés de développement local (SDL)", ar: "شركات التنمية المحلية (SDL)" }
        ]
      }
    ]
  },
  {
    fr: "Administration électronique, transformation numérique et protection des données (E-Gov)",
    ar: "الإدارة الإلكترونية، التحول الرقمي، وحماية المعطيات (E-Gov)",
    axes: [
      {
        fr: "Administration électronique et transformation numérique",
        ar: "الإدارة الإلكترونية والتحول الرقمي",
        items: [
          { fr: "Numérisation des procédures administratives et services de proximité digitaux", ar: "رقمنة المساطر الإدارية وخدمات القرب الرقمية" },
          { fr: "Portails de dépôt et de suivi des réclamations des citoyens et open data", ar: "بوابات إيداع وتتبع شكايات المواطنين والبيانات المفتوحة" },
          { fr: "Adoption de la gestion axée sur les résultats (GAR) et de la GPEEC", ar: "اعتماد التدبير القائم على النتائج (GAR) وتدبير الموارد البشرية (GPEEC)" }
        ]
      },
      {
        fr: "Protection des données et cybersécurité",
        ar: "حماية البيانات والأمن السيبراني",
        items: [
          { fr: "Respect des dispositions de la loi 09-08 relative à la protection des données personnelles", ar: "الالتزام بمقتضيات القانون 09-08 لحماية المعطيات الشخصية بالإدارات" },
          { fr: "Prévention des cyberattaques et sécurisation des réseaux territoriaux", ar: "الوقاية من الهجمات الإلكترونية وتأمين الشبكات الترابية" },
          { fr: "Protection des infrastructures critiques, de l'IoT et plans d'urgence numériques", ar: "حماية البنى التحتية الحرجة وإنترنت الأشياء (IoT) وخطط الطوارئ الرقمية" }
        ]
      }
    ]
  },
  {
    fr: "Communication institutionnelle, démocratie participative et droit à l'information",
    ar: "التواصل المؤسساتي، الديمقراطية التشاركية، والحق في المعلومة",
    axes: [
      {
        fr: "Communication institutionnelle et démocratie participative",
        ar: "التواصل المؤسساتي والديمقراطية التشاركية",
        items: [
          { fr: "Communication stratégique et gestion de la communication de crise", ar: "التواصل الاستراتيجي وتدبير التواصل في أوقات الأزمات" },
          { fr: "Activation des instances de concertation publique et de démocratie participative", ar: "تفعيل هيئات التشاور العمومي والديمقراطية التشاركية" },
          { fr: "Diffusion numérique des sessions des conseils et communication digitale de l'élu", ar: "البث الرقمي لدورات المجالس والتواصل الرقمي للمنتخب" }
        ]
      },
      {
        fr: "Veille juridique, gestion des archives et droit à l'information",
        ar: "اليقظة القانونية، تدبير الأرشيف، والحق في المعلومة",
        items: [
          { fr: "Mécanismes de mise à jour continue des décisions au regard des évolutions législatives", ar: "آليات التحيين المستمر للقرارات تزامناً مع المستجدات التشريعية" },
          { fr: "Ingénierie de l'archivage numérique et papier des conseils selon les normes légales", ar: "هندسة الأرشيف الرقمي والورقي للمجالس وفق المعايير القانونية" },
          { fr: "Mise en œuvre de la loi 31.13 relative au droit d'accès à l'information", ar: "تفعيل مقتضيات القانون 31.13 المتعلق بالحق في الحصول على المعلومات" }
        ]
      }
    ]
  },
  {
    fr: "Développement durable, transition énergétique et économie circulaire",
    ar: "التنمية المستدامة، الانتقال الطاقي، والاقتصاد الدائري",
    axes: [
      {
        fr: "Développement durable, transition écologique et efficacité énergétique",
        ar: "التنمية المستدامة، التحول الأيكولوجي، والنجاعة الطاقية",
        items: [
          { fr: "Gestion des déchets ménagers et assimilés et efficacité énergétique", ar: "تدبير النفايات المنزلية والمماثلة والنجاعة الطاقية" },
          { fr: "Gestion de l'eau, rationalisation de sa consommation et contrats de performance énergétique (CPE) pour l'éclairage public", ar: "تدبير الماء، ترشيد استهلاكه، وعقود الأداء الطاقي (CPE) للإنارة العمومية" },
          { fr: "Adaptation aux changements climatiques et politiques environnementales locales", ar: "التكيف مع التغيرات المناخية والسياسات البيئية المحلية" }
        ]
      },
      {
        fr: "Économie circulaire et transition énergétique",
        ar: "الاقتصاد الدائري والانتقال الطاقي",
        items: [
          { fr: "Mécanismes de valorisation des déchets solides et liquides en énergie ou compost", ar: "آليات تحويل النفايات الصلبة والسائلة إلى طاقة أو سماد عضوي" },
          { fr: "Développement d'unités de recyclage à l'échelle intercommunale", ar: "تطوير وحدات إعادة التدوير على مستوى مجموع الجماعات الترابية" },
          { fr: "Projets d'autoproduction électrique par énergies renouvelables", ar: "مشاريع الإنتاج الذاتي للكهرباء عبر الطاقات المتجددة" }
        ]
      }
    ]
  },
  {
    fr: "Diplomatie climatique et financements verts",
    ar: "الدبلوماسية المناخية والتمويلات الخضراء",
    axes: [
      {
        fr: "Diplomatie climatique et financements verts",
        ar: "الدبلوماسية المناخية والتمويلات الخضراء",
        items: [
          { fr: "Élaboration et soumission de projets finançables par les fonds climatiques internationaux (Climate Finance)", ar: "إعداد وتقديم مشاريع قابلة للتمويل من صناديق المناخ الدولية (Climate Finance)" },
          { fr: "Adhésion aux réseaux mondiaux de villes intelligentes durables", ar: "الانخراط في شبكات المدن الذكية المستدامة عالمياً" },
          { fr: "Diplomatie climatique territoriale", ar: "الدبلوماسية المناخية الترابية" }
        ]
      }
    ]
  },
  {
    fr: "Développement social, approche genre et inclusion des catégories vulnérables",
    ar: "التنمية الاجتماعية، مقاربة النوع، ودمج الفئات الهشة",
    axes: [
      {
        fr: "Développement social et approche genre",
        ar: "التنمية الاجتماعية ومقاربة النوع الاجتماعي",
        items: [
          { fr: "Intégration de l'approche genre dans les budgets et programmes territoriaux", ar: "إدماج مقاربة النوع الاجتماعي في الميزانيات والبرامج الترابية" },
          { fr: "Soutien aux catégories vulnérables et aux personnes à besoins spécifiques", ar: "دعم الفئات الهشة وذوي الاحتياجات الخاصة" },
          { fr: "Traitement de l'habitat insalubre et résorption des bidonvilles", ar: "معالجة ظاهرة التجمع السكاني غير الصالح للإسكان والقضاء على دور الصفيح" }
        ]
      },
      {
        fr: "Économie solidaire et insertion socioprofessionnelle",
        ar: "الاقتصاد التضامني والدمج السوسيومهني",
        items: [
          { fr: "Accompagnement de l'économie sociale et solidaire (ESS) et gestion des plateformes jeunesse", ar: "مواكبة الاقتصاد الاجتماعي والتضامني (ESS) وتدبير منصات الشباب" },
          { fr: "Soutien aux coopératives locales et aux femmes du monde rural", ar: "دعم التعاونيات المحلية ونساء العالم القروي" },
          { fr: "Centres d'orientation pour l'auto-emploi et la qualification professionnelle", ar: "مراكز التوجيه للتشغيل الذاتي والتأهيل المهني" }
        ]
      },
      {
        fr: "Gestion de la migration, des crises sociales et de l'urbanisation",
        ar: "تدبير الهجرة، الأزمات الاجتماعية، والتحضر",
        items: [
          { fr: "Mécanismes d'intégration des migrants et réfugiés dans le tissu socio-économique", ar: "آليات إدماج المهاجرين واللاجئين في النسيج السوسيو اقتصادي" },
          { fr: "Gestion des mobilités durables et plans de déplacements urbains (PDU)", ar: "تدبير التنقلات المستدامة ومخططات التنقلات الحضرية (PDU)" },
          { fr: "Activation des cellules d'écoute sociale pour la prise en charge des enfants et femmes en situation vulnérable", ar: "تفعيل خلايا الاستماع الاجتماعي للتكفل بالأطفال والنساء في وضعية هشة" }
        ]
      }
    ]
  },
  {
    fr: "Contentieux administratif et financier et responsabilité des collectivités",
    ar: "المنازعات الإدارية والمالية ومسؤولية الجماعات",
    axes: [
      {
        fr: "Contentieux administratif et financier et responsabilité des collectivités",
        ar: "المنازعات الإدارية والمالية ومسؤولية الجماعات",
        items: [
          { fr: "Principales causes d'annulation des décisions des conseils devant les tribunaux administratifs (excès de pouvoir et vice de compétence)", ar: "رصد الأسباب الرئيسية لإلغاء القرارات الجماعية أمام المحاكم الإدارية (التجاوز في السلطة وعيب الاختصاص)" },
          { fr: "Responsabilité des collectivités territoriales pour les dommages liés aux travaux publics et aux défauts des ouvrages", ar: "مسؤولية الجماعات الترابية عن أضرار الأشغال العامة وعيوب المرافق" },
          { fr: "Modes alternatifs de règlement des différends (conciliation, arbitrage et médiation administrative)", ar: "الوسائل البديلة لفض النزاعات (الصلح، التحكيم، والوساطة الإدارية)" }
        ]
      }
    ]
  },
  {
    fr: "Diplomatie parallèle et coopération internationale décentralisée",
    ar: "الدبلوماسية الموازية والتعاون الدولي اللامركزي",
    axes: [
      {
        fr: "Diplomatie parallèle et coopération internationale décentralisée",
        ar: "الدبلوماسية الموازية والتعاون الدولي اللامركزي",
        items: [
          { fr: "Lois et procédures régissant la conclusion des accords de jumelage et de partenariat avec des collectivités étrangères", ar: "القوانين والمساطر المنظمة لعقد اتفاقيات التوأمة والشراكة مع الجماعات الأجنبية" },
          { fr: "Procédure de visa des accords de coopération internationale", ar: "مسطرة التأشير على اتفاقيات التعاون الدولي" },
          { fr: "Gestion du financement et suivi des projets réalisés dans le cadre de la coopération internationale", ar: "تدبير التمويل، وتتبع المشاريع المنجزة في إطار التعاون الدولي" }
        ]
      }
    ]
  },
  {
    fr: "Gestion opérationnelle des crises et des risques majeurs",
    ar: "التدبير الميداني للأزمات والمخاطر الكبرى",
    axes: [
      {
        fr: "Gestion opérationnelle des crises et des risques majeurs",
        ar: "التدبير الميداني للأزمات والمخاطر الكبرى",
        items: [
          { fr: "Plans provinciaux et régionaux de prévention des risques et catastrophes (inondations, séismes, incendies)", ar: "المخططات الإقليمية والجهوية للوقاية من المخاطر والكوارث (فيضانات، زلازل، حرائق)" },
          { fr: "Rôle des conseils et des cellules de veille pendant les crises et catastrophes", ar: "دور المجالس ولجان اليقظة أثناء الأزمات والكوارث" },
          { fr: "Communication stratégique en temps de crise et lutte contre les fausses informations", ar: "التواصل الاستراتيجي وقت الأزمات ومواجهة الأخبار الزائفة" }
        ]
      }
    ]
  },
  {
    fr: "Veille sanitaire, environnementale et police administrative",
    ar: "اليقظة الصحية، البيئية، والشرطة الإدارية",
    axes: [
      {
        fr: "Veille sanitaire, environnementale et police administrative",
        ar: "اليقظة الصحية والبيئية والشرطة الإدارية",
        items: [
          { fr: "Coordination opérationnelle face aux urgences sanitaires et épidémies", ar: "التنسيق الميداني لمواجهة الطوارئ الصحية والأوبئة" },
          { fr: "Exercice par le président du conseil de ses attributions en matière de contrôle des établissements polluants et dangereux", ar: "تفعيل اختصاصات رئيس المجلس في مراقبة المنشآت الملوثة والخطيرة" },
          { fr: "Rédaction des arrêtés du président du conseil relatifs à la tranquillité, la salubrité et la circulation (police administrative)", ar: "تحرير قرارات رئيس المجلس المتعلقة بالسكينة، الصحة، والمرور (الشرطة الإدارية)" }
        ]
      }
    ]
  },
  {
    fr: "Marketing territorial et intelligence économique",
    ar: "التسويق الترابي والذكاء الاقتصادي",
    axes: [
      {
        fr: "Marketing territorial et intelligence économique",
        ar: "التسويق الترابي والذكاء الاقتصادي",
        items: [
          { fr: "Valorisation des potentialités économiques locales et attraction des investissements directs étrangers (IDE)", ar: "تثمين المؤهلات الاقتصادية المحلية وجذب الاستثمار الأجنبي المباشر (FDI)" },
          { fr: "Partenariat public-privé à l'échelle territoriale (PPP)", ar: "الشراكة بين القطاعين العام والخاص على المستوى الترابي (PPP)" },
          { fr: "Recours à l'analyse géospatiale, aux systèmes d'information géographique (SIG) et construction de l'identité visuelle (branding territorial)", ar: "توظيف التحليل الجغرافي المكاني وأنظمة المعلومات الجغرافية (SIG) وبناء الهوية البصرية (Branding Territorial)" }
        ]
      }
    ]
  },
  {
    fr: "Patrimoine culturel, économie créative et tourisme local",
    ar: "التراث الثقافي، الاقتصاد الإبداعي، والسياحة المحلية",
    axes: [
      {
        fr: "Patrimoine culturel, économie créative et tourisme local",
        ar: "التراث الثقافي، الاقتصاد الإبداعي، والسياحة المحلية",
        items: [
          { fr: "Valorisation et protection du patrimoine matériel, immatériel et des sites archéologiques", ar: "تثمين وحماية التراث المادي واللامادي والمواقع الأثرية" },
          { fr: "Création de circuits touristiques ruraux et urbains et développement de l'écotourisme", ar: "إحداث المدارات السياحية القروية والحضرية وتطوير السياحة الإيكولوجية" },
          { fr: "Gestion de l'économie créative (théâtres, maisons de jeunes, bibliothèques et festivals)", ar: "تدبير الاقتصاد الإبداعي (المسارح، دور الشباب، المكتبات، والمهرجانات)" },
          { fr: "Gestion de la mémoire collective, des musées régionaux et provinciaux", ar: "تدبير الذاكرة الجماعية والمتاحف الإقليمية والجهوية" }
        ]
      }
    ]
  },
  {
    fr: "Évaluation, audit et services publics spécialisés",
    ar: "التقييم، الافتحاص، والمرافق والخدمات المتخصصة",
    axes: [
      {
        fr: "Évaluation, audit et contrôle des politiques publiques",
        ar: "التقييم، الافتحاص ومراقبة السياسات العمومية",
        items: [
          { fr: "Élaboration de tableaux de bord et d'indicateurs de performance territoriale (KPI) pour le suivi des programmes d'action", ar: "بناء لوحات القيادة ومؤشرات الأداء الترابي (KPIs) لتتبع برامج العمل" },
          { fr: "Audit interne, gestion des risques et anticipation des rapports des cours régionales des comptes et des inspections", ar: "الافتحاص الداخلي وتدبير المخاطر واستباق تقارير المجالس الجهوية للحسابات والمفتشيات" },
          { fr: "Méthodologies d'évaluation des politiques publiques, mesure d'impact réel et prospective", ar: "منهجيات تقييم السياسات العمومية وقياس الأثر الفعلي واستشراف المستقبل" }
        ]
      },
      {
        fr: "Équipements et services ruraux et urbains spécialisés",
        ar: "المرافق والخدمات القروية والحضرية المتخصصة",
        items: [
          { fr: "Secteur de la propreté, centres de tri, gestion des marchés, marchés de gros et souks aux bestiaux", ar: "قطاع النظافة، مراكز الفرز، تدبير الأسواق، وأسواق الجملة والماشية" },
          { fr: "Gestion des abattoirs communaux en coordination avec l'ONSSA et contrôle de la sécurité sanitaire", ar: "تدبير المجزرات والمذابح الجماعية بتنسيق مع (ONSSA) ومراقبة السلامة الصحية" },
          { fr: "Transport scolaire mixte, gestion du parc automobile et du carburant via GPS et maintenance préventive", ar: "النقل المدرسي المزدوج، وحظيرة الآليات والمحروقات عبر (GPS) والصيانة الوقائية" },
          { fr: "Cimetières, équipements funéraires, arrosage des espaces verts par eaux usées traitées et terrains de proximité", ar: "المقابر، المرافق الجنازاتية، سقي المساحات الخضراء بالمياه المعالجة، وملاعب القرب" },
          { fr: "Gestion de la faune nuisible (stratégies TNVR), des zones logistiques et des plages", ar: "تدبير الحيوانات الضارة ومخاطرها (استراتيجيات TNVR) والمناطق اللوجستية والشواطئ" }
        ]
      }
    ]
  }
];

const PROGRAMME_STATS = {
  sections: PROGRAMME.length,
  axes: PROGRAMME.reduce((n, s) => n + s.axes.length, 0),
  items: PROGRAMME.reduce((n, s) => n + s.axes.reduce((m, a) => m + a.items.length, 0), 0)
};
