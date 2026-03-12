const seedData = [
    { id: "root", name: "Абдраман", bdate: "1938", gender: "male", partner: "Гүлай", partnerDate: "1940", bio: "abdraman.md", parentId: null, expanded: true },
    { id: "al", name: "Алайчы", bdate: "1958", gender: "male", partner: "Ширин", bio: "", parentId: "root", expanded: false },
    { id: "al1", name: "Тынчтыкбек (Мир)", bdate: "1981", bio: "son1.md", parentId: "al", expanded: false },
    { id: "al1_1", name: "Кантемир", bdate: "", parentId: "al1", expanded: false },
    { id: "al1_2", name: "Ак моор", bdate: "", parentId: "al1", expanded: false },
    { id: "al_aidana", name: "Айдана", bdate: "1982", parentId: "al", expanded: false },
    { id: "al_roza", name: "Роза", bdate: "1985", parentId: "al", expanded: false },
    { id: "al_gulnur", name: "Гулнур", bdate: "1987", parentId: "al", expanded: false },
    { id: "al_samara", name: "Самара", bdate: "1989", parentId: "al", expanded: false },
    { id: "al2", name: "Марат", bdate: "1990", bio: "son2.md", parentId: "al", expanded: false },
    { id: "al3", name: "Жаркынбек", bdate: "1984", parentId: "al", expanded: false },
    { id: "al3_1", name: "Ильяз", bdate: "", parentId: "al3", expanded: false },
    { id: "bu", name: "Бүайша", bdate: "1962", gender: "female", partner: "Турат", bio: "", parentId: "root", expanded: false },
    { id: "bu1", name: "Мунарбек", bdate: "1985", parentId: "bu", expanded: false },
    { id: "bu2", name: "Мирланбек", bdate: "1986", parentId: "bu", expanded: false },
    { id: "bu3", name: "Нурланбек", bdate: "1988", parentId: "bu", expanded: false },
    { id: "bu4", name: "Нурдоолот", bdate: "1999", parentId: "bu", expanded: false },
    { id: "bu5", name: "Мээрзат", bdate: "1990", parentId: "bu", expanded: false },
    { id: "bu6", name: "Гулбегим", bdate: "1993", parentId: "bu", expanded: false },
    { id: "as", name: "Асилбек", bdate: "1963", gender: "male", partner: "Калия", bio: "", parentId: "root", expanded: false },
    { id: "as1", name: "Акжол", bdate: "1998", parentId: "as", expanded: false },
    { id: "as2", name: "Атабек", bdate: "1991", parentId: "as", expanded: false },
    { id: "as2_ramis", name: "Рамис", bdate: "", parentId: "as2", expanded: false },
    { id: "as2_rustam", name: "Рустам", bdate: "", parentId: "as2", expanded: false },
    { id: "as2_rayana", name: "Раяна", bdate: "", parentId: "as2", expanded: false },
    { id: "as2_alfiya", name: "Алфия", bdate: "", parentId: "as2", expanded: false },
    { id: "as3", name: "Алтынбек", bdate: "1996", parentId: "as", expanded: false },
    { id: "as4", name: "Актан", bdate: "2001", parentId: "as", expanded: false },
    { id: "as5", name: "Айзат", bdate: "1993", parentId: "as", expanded: false },
    { id: "as6", name: "Айназик", bdate: "1999", parentId: "as", expanded: false },
    { id: "as_zhyl", name: "Асилбү", bdate: "1967", gender: "female", partner: "Сапар", bio: "", parentId: "root", expanded: false },
    { id: "as_zh1", name: "Айбек", bdate: "1988", parentId: "as_zhyl", expanded: false },
    { id: "as_zh2", name: "Чынгыз", bdate: "1991", parentId: "as_zhyl", expanded: false },
    { id: "as_zh3", name: "Баястан", bdate: "1996", parentId: "as_zhyl", expanded: false },
    { id: "as_zh4", name: "Жоолболду", bdate: "1999", parentId: "as_zhyl", expanded: false },
    { id: "as_zh5", name: "Гулкайыр", bdate: "1989", parentId: "as_zhyl", expanded: false },
    { id: "as_zh6", name: "Гулшайыр", bdate: "1993", parentId: "as_zhyl", expanded: false },
    { id: "ch", name: "Чынара", bdate: "1970", gender: "female", partner: "Анарбай", bio: "", parentId: "root", expanded: false },
    { id: "ch1", name: "Эламан", bdate: "1995", parentId: "ch", expanded: false },
    { id: "ch2", name: "Баяман", bdate: "1997", parentId: "ch", expanded: false },
    { id: "ch3", name: "Айпери", bdate: "1993", parentId: "ch", expanded: false },
    { id: "ch4", name: "Асель", bdate: "1989", parentId: "ch", expanded: false },
    { id: "ch5", name: "Нуржаз", bdate: "2007", parentId: "ch", expanded: false },
    { id: "cho", name: "Чолпонбай", bdate: "1972", gender: "male", partner: "Гүлмира", bio: "", parentId: "root", expanded: false },
    { id: "cho1", name: "Бегимай", bdate: "1994", parentId: "cho", expanded: false },
    { id: "cho2", name: "Муктарбек", bdate: "1999", parentId: "cho", expanded: false },
    { id: "cho3", name: "Куштарбек", bdate: "2001", parentId: "cho", expanded: false },
    { id: "cho4", name: "Мыктыбек", bdate: "2003", parentId: "cho", expanded: false },
    { id: "cho5", name: "Кулпунай", bdate: "2005", gender: "female", parentId: "cho", expanded: false },
    { id: "el", name: "Элмира", bdate: "1974", gender: "female", partner: "Абдыбек", bio: "", parentId: "root", expanded: false },
    { id: "el1", name: "Мухан", bdate: "1997", parentId: "el", expanded: false },
    { id: "el2", name: "Адилхан", bdate: "2000", parentId: "el", expanded: false },
    { id: "el3", name: "Эльдар", bdate: "2010", parentId: "el", expanded: false },
    { id: "el4", name: "Нурия", bdate: "1994", parentId: "el", expanded: false },
    { id: "el5", name: "Мээрим", bdate: "2002", parentId: "el", expanded: false },
    { id: "ma", name: "Максат", bdate: "1977", gender: "male", partner: "Улан", bio: "", parentId: "root", expanded: false },
    { id: "ma1", name: "Равшан", bdate: "1996", parentId: "ma", expanded: false },
    { id: "ma2", name: "Назарбек", bdate: "1999", parentId: "ma", expanded: false },
    { id: "ma3", name: "Эрлан", bdate: "2004", parentId: "ma", expanded: false },
    { id: "ma4", name: "Элхан", bdate: "2004", parentId: "ma", expanded: false },
    { id: "ma5", name: "Мээрим", bdate: "1997", parentId: "ma", expanded: false },
    { id: "ma6", name: "Акманай", bdate: "2016", parentId: "ma", expanded: false },
    { id: "su", name: "Суйорбек", bdate: "1980", gender: "male", partner: "Нурпери", bio: "suyorbek.md", parentId: "root", expanded: false },
    { id: "su1", name: "Денисбек", bdate: "2005", parentId: "su", expanded: false },
    { id: "su2", name: "Элиза", bdate: "2006", parentId: "su", expanded: false },
    { id: "su3", name: "Нуриза", bdate: "2006", parentId: "su", expanded: false },
    { id: "su4", name: "Айзирек", bdate: "2012", parentId: "su", expanded: false },
    { id: "su5", name: "Толкунбек", bdate: "2016", parentId: "su", expanded: false },
    { id: "an", name: "Анарбек", bdate: "1982", gender: "male", partner: "Асем", bio: "", parentId: "root", expanded: false },
    { id: "an1", name: "Арун", bdate: "2014", parentId: "an", expanded: false },
    { id: "an2", name: "Аббас", bdate: "2016", parentId: "an", expanded: false },
    { id: "an3", name: "Фатих", bdate: "2022", parentId: "an", expanded: false },
    { id: "an4", name: "Алия", bdate: "2006", parentId: "an", expanded: false },
    { id: "an5", name: "Аделина", bdate: "2007", parentId: "an", expanded: false },
    { id: "an6", name: "Сауле", bdate: "2009", parentId: "an", expanded: false }
];

// root avatar image – replace with your saved picture (PNG or WebP) in /assets/ folder
// change the filename here whenever you drop a new image in the assets directory
// the latest file is now `avatar.webp`, so point to that name
const rootPhoto = "assets/avatar.webp"; // update this path when avatar image changes (cache‑bust via renamed file)

const malePhoto = "assets/kalpak.webp";
const femalePhoto = "assets/yal.webp";
const SIDEBAR_SECTIONS = ["goal", "share", "contact"];
const SHARE_INSTAGRAM_URL = "https://instagram.com";
const CONTACT_WHATSAPP_URL = "https://wa.me/79613745333";
const CONTACT_TELEGRAM_URL = "https://t.me/Abdyramanov";
const SITE_SHARE_TITLE = "Абдраман атанын санжырасы";
const SITE_SHARE_TEXT = "Абдраман санжыра";
const SITE_SHARE_URL = "https://abdraman.pages.dev";
const BRANCH_COLORS_BY_ROOT_CHILD_ID = {
    al: "#3b82f6",
    bu: "#ef4444",
    as: "#22c55e",
    as_zhyl: "#ec4899",
    ch: "#8b5cf6",
    cho: "#eab308",
    el: "#14b8a6",
    ma: "#38bdf8",
    su: "#e5e7eb",
    an: "#92400e"
};
const rootAncestors = ["Токобай", "Карагене", "Өмүрзак", "Мамбет", "Нурбай", "Дүйшөбай", "Кул", "Абдраман"];
const ancestryAboutText = [
    "Бул санжыра Абдраман атанын урпактарын көрсөтөт.",
    "Биздин ата-тек Токобайдан башталып, Карагене, Өмүрзак, Мамбет, Нурбай, Дүйшөбай жана Кул аркылуу Абдраманга чейин жеткен.",
].join(" ");
const sidebarAncestryExtraText = [
    "Бул санжыра Токобайдан башталган ата-текти жана Абдраман атанын урпактарын кеңири көрсөтөт.",
    "Биздин санжыра Токобай -> Карагене -> Өмүрзак -> Мамбет -> Нурбай -> Дүйшөбай -> Кул -> Абдраман болуп уланат.",
    "Абдраман атадан төмөнкү балдар тарайт: Алайчы, Бүайша, Асилбек, Асилбү, Чынара, Чолпонбай, Элмира, Максат, Суйорбек жана Анарбек.",
    "Ар бир ысым өзүнчө үй-бүлө бутагын түзүп, андан ары неберелер жана чөбөрөлөр менен уланат.",
    "Бул жерде негизги ата-тек менен бирге урпактардын таралышы, үй-бүлө бутактары жана кийинки муундардын байланышы көрсөтүлөт.",
    "(Скобкадагы жана кошумча маалыматтар дагы толукталып турат.)",
].join(" ");
const STRUCTURED_BIOGRAPHIES = {
    su: {
        sections: [
            {
                icon: "📍",
                title: "Туулган жери",
                text: "Кулов Суйорбек Абдраманович 1980-жылдын 13-январында Ош облусунун Алай районуна караштуу Нура айылында жарык дүйнөгө келген. Ал Абдраман ата менен Гүлай апанын үй-бүлөсүндө тарбияланып өскөн. Үй-бүлөдө он бир тууган болуп, беш уул жана беш кыз бир туугандардын арасында чоңоюп өскөн. Суйорбек үй-бүлөдөгү кенжеден бир мурунку бала болуп эсептелет. Балалык жана өспүрүм курагы Нура айылында өтүп, айылдын табияты, эмгекке болгон тарбия жана улууларга болгон урмат анын мүнөзүнүн калыптанышына чоң таасир берген."
            },
            {
                icon: "🎓",
                title: "Билими",
                text: "Алгачкы билимди Нура айылындагы мектептен алып, 1-класстан 8-класска чейин Нура айылында окуган. Андан кийин билимин улантуу үчүн Алай районундагы Терек айылындагы мектепке барып, 9-11-класстарды ошол жерде аяктаган.\n\nМектепти бүтүргөндөн кийин жогорку билим алуу максатында 1999-жылы Ош шаарындагы Ош технологиялык университетине (ОшТУ) тапшырып, экология багыты боюнча билим алган. Университетте беш жыл окуп, жогорку билим тууралуу дипломго ээ болгон."
            },
            {
                icon: "👨‍👩‍👧‍👦",
                title: "Үй-бүлөсү",
                text: "2003-жылдын 11-октябрында Суйорбек жубайы Нурпери менен баш кошуп, үй-бүлөлүк жашоосун баштаган.\n\nЖаш үй-бүлө алгач Терек айылында жашап, кийин Нура айылына көчүп келип жашоосун улантышкан.\n\nБул үй-бүлөдө беш бала тарбияланып өсүүдө:\n\nДенис — 2005-жылы төрөлгөн\nЭлиза — 2006-жылы төрөлгөн\nНуриза — 2006-жылы төрөлгөн (эгиз)\nАйзирек — 2012-жылы төрөлгөн\nТолкунбек — 2016-жылы төрөлгөн\n\nЖубайы Нурпери кесиби боюнча медицина кызматкери болгону менен, негизинен үй-бүлөсүнө кам көрүп, балдарды тарбиялоо менен алектенип келет."
            },
            {
                icon: "🚛",
                title: "Ишмердүүлүгү",
                text: "Суйорбек жаш кезинен тартып эмгекчилдиги жана жоопкерчиликтүүлүгү менен айырмаланып келген. 2005-2010-жылдары Кытай менен Кыргызстандын чек арасындагы Эркечтам өткөрмө бекетинде BAYBOTO компаниясында иштеп, Кытай тарап менен байланыш жүргүзгөн өкүл болуп эмгектенген. Кийин бул ишкана ишин токтоткондон кийин жүк ташуу тармагына өтүп, КАМАЗ үлгүсүндөгү жүк ташуучу унаа сатып алып, алыскы жолдордо жүк ташуучу айдоочу болуп иштей баштаган. 2014-2018-жылдары ABU SAXIY компаниясында иштеп, Кытайдан Ош шаарына жүк ташыган фура айдоочу болуп эмгектенген. Бул тармакта көп жылдык тажрыйба топтоп, өз ишин мыкты билген айдоочулардын бири болуп калыптанган."
            },
            {
                icon: "🏡",
                title: "Азыркы жашоосу",
                text: "2019-жылы үй-бүлөсү менен Ош шаарына караштуу Мады айылына көчүп келип, ошол жерде жашап калышкан. Балдары ошол жерде билим алып, өсүп келе жатышат. Ошол эле жылы Суйорбек жеке жүк ташуучу унаа сатып алып, жеке ишкер катары иштей баштаган. Азыркы учурда жеке фура айдап, жүк ташуу менен алектенип, үй-бүлөсүн адал эмгеги менен камсыз кылып келет. Ал эмгекчил, үй-бүлөсүнө камкор, жоопкерчиликтүү жана адамдарга жардам берүүгө даяр инсан катары таанылат. Бош убактысында аңчылыкка кызыгып, айыл чарба иштерине да көңүл бурат. Үйүнүн айланасында жер иштетип, дыйканчылык менен алектенип келет жана техникага кызыгып, унаалар менен иштөөнү жакшы көрөт."
            }
        ]
    },
    cho: {
        sections: [
            {
                icon: "📜",
                title: "Кулов Чолпонбай Абдраманович",
                text: "Жубайы: Гүльмира"
            },
            {
                icon: "📍",
                title: "Туулган жери",
                text: "Кулов Чолпонбай Абдраманович 1972-жылы 22-мартта Ош облусунун Алай районуна караштуу Сопу-Коргон айылында жарык дүйнөгө келген.\n\nАл көп балалуу үй-бүлөдө чоңоюп, он бир туугандын ичинде алтынчы болуп төрөлгөн.\n\nҮй-бүлөдө беш уул жана беш кыз бир туугандары менен бирге өсүп, бала кезинен тартып эмгекке жана жоопкерчиликке тарбияланган.\n\nТоолуу Алай аймагынын табияты, жайлоолору жана айыл турмушу анын мүнөзүнүн калыптанышына чоң таасир берген."
            },
            {
                icon: "🎓",
                title: "Билими",
                text: "1979-жылы мектеп босогосун аттап билим ала баштаган.\n\n1989-жылы Ош облусунун Алай районуна караштуу Нура айылындагы А. Беценный атындагы орто мектебин ийгиликтүү аяктаган."
            },
            {
                icon: "🐑",
                title: "Эмгек жолу",
                text: "Чолпонбай жаш кезинен тартып фермерлик жана мал чарбачылыгы менен алектенип келет.\n\nАл төрт түлүк мал багып, ата-бабадан калган мал чарбачылык салтын улантып келет.\n\nЧолпонбай атасынын жолун улап, мал чарбачылыгын өнүктүрүп, бул тармакта чоң тажрыйба топтогон.\n\nЧолпонбайдын жашоосунун чоң бөлүгү жайлоодогу турмуш менен байланыштуу.\n\nЖай мезгили келгенде ал малдарын Алайдагы кооз жайлоолордун бири болгон Айланма жайлоосуна алып чыгып багат.\n\nАйланма жайлоосу кең жайыттары, таза абасы жана кооз жаратылышы менен белгилүү.\n\nЖыл сайын туугандары жана жакындары ошол жайлоого барып, табият койнунда эс алып, бирге убакыт өткөрүп турушат.\n\nМындан тышкары Көк-Суу жайлоосу да анын жашоосунда өзгөчө орунду ээлейт. Бул жерде жай мезгилинен тышкаркы мезгилдерде да төрт түлүк малдын камы көрүлөт."
            },
            {
                icon: "👨‍👩‍👧‍👦",
                title: "Үй-бүлөсү",
                text: "1991-жылы 8-июлда жубайы Гүльмира менен баш кошуп, үй-бүлөлүк жашоосун баштаган.\n\nБул үй-бүлөдө үч уул жана эки кыз тарбияланып өскөн.\n\nБалдары:\n\n• Бегимай — 1994\n• Муктарбек — 1999\n• Куштарбек — 2001\n• Мыктыбек — 2003\n• Кулпунай — 2005\n\nУчурда Чолпонбай жана Гүльмира сегиз неберенин мээримдүү чоң ата, чоң энеси болуп келишет."
            },
            {
                icon: "👶",
                title: "Неберелери",
                text: "• Нуржайна\n• Аяна\n• Сыргабай\n• Барсбек\n• Аруужан\n• Фатима"
            },
            {
                icon: "🤝",
                title: "Эл ичиндеги аброю",
                text: "Чолпонбай айыл ичинде кадыр-барктуу жана ишенимдүү адам катары белгилүү.\n\nАнын эмгекчилдиги, жөнөкөйлүгү жана адамдарга жардам берүүгө даярдыгы үчүн айылдаштары жана туугандары аны урматташат.\n\nМал чарбачылыгы боюнча чоң тажрыйбасы бар болгондуктан, көптөр ага кеңеш сурап кайрылышат.\n\nАл табият менен жашоону жакшы көргөн, мал чарбасын мыкты билген, үй-бүлөсүнө камкор жана туугандарына жардам берүүгө дайыма даяр инсан катары таанылат."
            },
            {
                icon: "🏡",
                title: "Азыркы жашоосу",
                text: "Азыркы учурда Чолпонбай үй-бүлөсү менен Ош облусунун Алай районуна караштуу Терек айылында жашайт.\n\nАл фермерлик ишин улантып, төрт түлүк мал багуу менен алектенип, үй-бүлөсүн адал эмгеги менен камсыз кылып келет.\n\nЖай мезгили келгенде малдары менен жайлоого чыгып, тоолордун кооз жаратылышында эмгектенип жашоосун улантат."
            }
        ]
    }
};

const APPROVED_STORAGE_KEY = "sanjyra_approved_members";
const PENDING_STORAGE_KEY = "sanjyra_pending_members";

let familyData = [];
let pendingLocal = [];

const INITIAL_FOCUS_SCALE = 1.7;
const VIEWPORT_ANIMATION_MS = 700;

let scale = 0.68;
let posX = 100;
let posY = window.innerHeight / 2;
let dragging = false;
let startX;
let startY;
let isPinching = false;
let pinchStartDistance = 0;
let pinchStartScale = 1;
let pinchStartPosX = 0;
let pinchStartPosY = 0;
let viewportAnimationTimer = null;
// flag used to batch transform updates via requestAnimationFrame
let transformScheduled = false;
const MOBILE_LAYOUT_BREAKPOINT = 768;
const DESKTOP_HORIZONTAL_SPACING = 530;
const MOBILE_HORIZONTAL_SPACING = 360;
const NODE_HEIGHT = 120; // reduced from 150 for denser layout
// Card width parameters for all nodes except root (Абдраман).
const NON_ROOT_CARD_WIDTH_DESKTOP = 230;
const NON_ROOT_CARD_WIDTH_MOBILE = 170;
const DESKTOP_NODE_WIDTH = NON_ROOT_CARD_WIDTH_DESKTOP;
const MOBILE_NODE_WIDTH = NON_ROOT_CARD_WIDTH_MOBILE;
const DESKTOP_ROOT_NODE_WIDTH = 250;
const MOBILE_ROOT_NODE_WIDTH = 180;
const DESKTOP_ANCESTRY_GAP = 90;
const MOBILE_ANCESTRY_GAP = 44;
let currentParentId = null;
let isAdmin = false;
let currentUser = null;

let backendEnabled = false;
let authEnabled = false;
let db = null;
let auth = null;
let authStateObserverAttached = false;
let authStateUnsubscribe = null;
// Firebase lazy-load state
let firebaseLoadPromise = null;
let firebaseInitDone = false;
let pendingUnsubscribe = null;
let noticeTimer = null;
let adminSignInAttempted = false;
let memberModalMode = "add";
let editMemberId = null;
let loaderUiReady = false;
let loaderAuthReady = false;
let loaderDataReady = false;
let loaderHidden = false;
let loaderProgress = 0;
let loaderTargetProgress = 0;
let loaderProgressTimer = null;
let loaderMinTimer = null;
let loaderMaxTimer = null;
let loaderStartedAt = 0;
let loaderMinimumPromise = Promise.resolve();
let treeReadyPromise = Promise.resolve();
let resolveTreeReady = null;
let treeReadyResolved = false;
let drawConnectionsRaf = null;
let treeCardsReady = false;
let treeCenteredReady = false;
let firstConnectionsDrawDone = false;
let loaderRenderDone = false;
let loaderConnectionsDone = false;
let renderCycleId = 0;
const nodeZoomMemory = new Map();
let lastCardTouchToggleAt = 0;
// loader must stay visible for at least 2 seconds
const LOADER_MIN_VISIBLE_MS = 2000;
const LOADER_MAX_WAIT_MS = 10000;
const IMAGE_PLACEHOLDER_SRC = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";
// constants for CDN files; we will insert them dynamically
const FIREBASE_CDN_URLS = [
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js",
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js",
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js",
];
let photoObserver = null;

const FULL_LINEAGE_MODAL_HTML = `
    <div class="lineage-modal-block">
        <h4 class="bio-block-title">Кыргыз санжырасынын башаты</h4>
        <p class="bio-block-text">
            Кыргыз элинин санжырасы <span class="gold">Долон бий</span>ден башталат.
            Анын урпактары үч чоң бөлүккө бөлүнгөн:
        </p>
        <p class="bio-block-text">
            • <span class="gold">Оң канат</span><br>
            • <span class="gold">Сол канат</span><br>
            • <span class="gold">Ичкилик</span>
        </p>
        <p class="bio-block-text">Биздин ата-тек <span class="gold">Оң канаттан</span> тараган.</p>
    </div>
    <div class="lineage-modal-block">
        <h4 class="bio-block-title">Адыгине уруусу</h4>
        <p class="bio-block-text">
            Биздин ата-бабалар <span class="gold">Адыгине уруусуна</span> кирет.
            Адыгине кыргыз элиндеги байыркы жана белгилүү уруулардын бири.
        </p>
    </div>
    <div class="lineage-modal-block">
        <div class="lineage-wrapper">
            <h3 class="lineage-title">Биздин ата-бабалар</h3>
            <div class="lineage-tree">
                <div class="lineage-line"></div>
                <div id="lineage-container"></div>
            </div>
        </div>
    </div>
`;

const LINEAGE_TIMELINE_ANCESTORS = [
    { name: "Адыгине", desc: "Уруунун түпкү атасы", highlight: true },
    { name: "Кенчим" },
    { name: "Жакшылык" },
    { name: "Токобай" },
    { name: "Карагене" },
    { name: "Өмүрзак" },
    { name: "Мамбет" },
    { name: "Нурбай" },
    { name: "Дүйшөбай" },
    { name: "Кул" },
    { name: "Абдраман", desc: "Биздин чоң атабыз", current: true }
];

function renderLineageTimeline() {
    const container = document.getElementById("lineage-container");
    if (!container) return;
    container.innerHTML = "";

    LINEAGE_TIMELINE_ANCESTORS.forEach((ancestor, index) => {
        const item = document.createElement("div");
        item.className = "timeline-item";

        const dot = ancestor.current ? "node-dot node-current" : "node-dot";
        const nameClass = ancestor.highlight || ancestor.current ? "gold" : "";
        const description = ancestor.desc
            ? `<div class="timeline-desc">${ancestor.desc}</div>`
            : "";

        item.innerHTML = `
            <div class="timeline-item-shell">
                <div class="${dot}">${index + 1}</div>
                <div class="node-card">
                    <div class="timeline-name ${nameClass}">${ancestor.name}</div>
                    ${description}
                </div>
            </div>
        `;

        container.appendChild(item);
    });

    setTimeout(() => {
        const items = container.querySelectorAll(".timeline-item");
        items.forEach((element, index) => {
            setTimeout(() => element.classList.add("visible"), index * 80);
        });
    }, 200);
}

const appConfig = window.APP_CONFIG || {};
const adminUids = Array.isArray(appConfig.adminUids) ? appConfig.adminUids : [];

function renderLoaderProgress() {
    const progressEl = document.getElementById("loader-progress");
    if (!progressEl) return;
    progressEl.textContent = `${Math.round(loaderProgress)}%`;
}

function setLoaderProgress(value, immediate = false) {
    const next = Math.max(0, Math.min(100, Number(value) || 0));
    loaderTargetProgress = next;

    if (immediate) {
        loaderProgress = next;
        renderLoaderProgress();
        return;
    }

    if (loaderProgressTimer) return;
    loaderProgressTimer = setInterval(() => {
        if (loaderHidden) {
            clearInterval(loaderProgressTimer);
            loaderProgressTimer = null;
            return;
        }

        if (loaderProgress >= loaderTargetProgress) {
            clearInterval(loaderProgressTimer);
            loaderProgressTimer = null;
            return;
        }

        loaderProgress = Math.min(loaderTargetProgress, loaderProgress + 1);
        renderLoaderProgress();
    }, 16);
}

function hideLoader() {
    if (loaderHidden) return;
    loaderHidden = true;
    setLoaderProgress(100, true);
    if (loaderMinTimer) {
        clearTimeout(loaderMinTimer);
        loaderMinTimer = null;
    }
    if (loaderMaxTimer) {
        clearTimeout(loaderMaxTimer);
        loaderMaxTimer = null;
    }

    const loader = document.getElementById("app-loader");
    if (loader) {
        // perform opacity/ removal after the browser has painted
        requestAnimationFrame(() => {
            setTimeout(() => {
                loader.style.opacity = "0";
                setTimeout(() => {
                    if (loader && typeof loader.remove === "function") {
                        loader.remove();
                    }
                }, 400);
            }, 120);
        });
    }

    if (document.body) {
        document.body.classList.remove("loading");
    }

    requestAnimationFrame(() => {
        observeCardPhotos();
    });

    // Recalculate connectors right after loader is removed.
    requestAnimationFrame(() => {
        scheduleDrawConnections({ initial: true, immediate: true });
    });
}

function hideLoaderWithMinDelay(force = false) {
    if (loaderHidden) return;
    const elapsed = Date.now() - loaderStartedAt;
    const waitMs = force ? 0 : Math.max(0, LOADER_MIN_VISIBLE_MS - elapsed);

    if (waitMs > 0) {
        if (loaderMinTimer) clearTimeout(loaderMinTimer);
        loaderMinTimer = setTimeout(() => {
            hideLoaderWithMinDelay(true);
        }, waitMs);
        return;
    }

    hideLoader();
}

let loaderHideRequested = false;
function tryHideLoader() {
    const ready = loaderRenderDone && loaderConnectionsDone;
    if (!ready) return;
    setLoaderProgress(100);

    if (!loaderHideRequested) {
        loaderHideRequested = true;
        Promise.all([loaderMinimumPromise, treeReadyPromise]).then(() => {
            requestAnimationFrame(() => {
                hideLoaderWithMinDelay(true);
            });
        });
    }
}

function revealCardImage(img) {
    if (!img || img.dataset.loaded === "true") return;
    const src = img.dataset.src;
    if (!src) return;
    img.src = src;
    img.dataset.loaded = "true";
}

function ensurePhotoObserver() {
    if (photoObserver || typeof window === "undefined") return;
    if (!("IntersectionObserver" in window)) return;

    photoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const img = entry.target;
            revealCardImage(img);
            photoObserver.unobserve(img);
        });
    }, {
        root: null,
        rootMargin: "160px 0px",
        threshold: 0.01
    });
}

function observeCardPhotos() {
    const host = document.getElementById("nodes-layer");
    if (!host) return;
    const images = host.querySelectorAll(".profile-img[data-src]");
    if (!images.length) return;

    ensurePhotoObserver();
    images.forEach((img) => {
        if (img.dataset.loaded === "true") return;
        if (photoObserver) {
            if (img.dataset.observed === "true") return;
            img.dataset.observed = "true";
            photoObserver.observe(img);
            return;
        }
        revealCardImage(img);
    });
}

function waitImagesLoaded(container) {
    if (!container) return Promise.resolve();

    const images = Array.from(container.querySelectorAll("img"));
    if (!images.length) return Promise.resolve();

    const pending = images.map((img) => new Promise((resolve) => {
        if (img.dataset && img.dataset.src && img.dataset.loaded !== "true") {
            revealCardImage(img);
        }

        const finish = () => {
            img.removeEventListener("load", finish);
            img.removeEventListener("error", finish);
            resolve();
        };

        if (img.complete && img.naturalWidth >= 0) {
            finish();
            return;
        }

        img.addEventListener("load", finish, { once: true });
        img.addEventListener("error", finish, { once: true });
    }));

    return Promise.all(pending).then(() => undefined);
}

function preloadImages() {
    const preloadList = [rootPhoto, malePhoto, femalePhoto];
    preloadList.forEach((src) => {
        const img = new Image();
        img.decoding = "async";
        img.loading = "eager";
        img.src = src;
    });
}

function startLoaderMaxWaitTimer(timeoutMs = LOADER_MAX_WAIT_MS) {
    if (loaderMaxTimer) clearTimeout(loaderMaxTimer);
    loaderMaxTimer = setTimeout(() => {
        if (loaderHidden) return;
        loaderUiReady = true;
        loaderAuthReady = true;
        loaderDataReady = true;
        setLoaderProgress(100, true);
        hideLoaderWithMinDelay(true);
    }, timeoutMs);
}

function toStoreNode(node) {
    return {
        id: node.id,
        name: node.name || "",
        bdate: node.bdate || "",
        gender: node.gender || "",
        bio: node.bio || "",
        branchColor: node.branchColor || "",
        parentId: node.parentId ?? null,
        partner: node.partner || "",
        partnerDate: node.partnerDate || "",
        expanded: Boolean(node.expanded)
    };
}

function applyFixedNames(list) {
    list.forEach((node) => {
        if (node.id === "root") node.partner = "Гүлай";
        if (node.id === "cho") node.name = "Чолпонбай";
        if (node.id === "su") node.name = "Суйорбек";
        if (node.id === "ch") node.name = "Чынара";
        if (node.id === "bu" && !node.partner) node.partner = "Турат";
        if (node.id === "as_zhyl") node.partner = "Сапар";
        if (node.id === "ch" && !node.partner) node.partner = "Анарбай";
        if (node.id === "el" && !node.partner) node.partner = "Абдыбек";
        if (node.id === "ma" && !node.partner) node.partner = "Улан";
    });
}

function applyInitialTreeExpansionState(list) {
    if (!Array.isArray(list) || !list.length) return;

    list.forEach((node) => {
        node.expanded = false;
    });

    const rootNode = list.find((node) => node.id === "root");
    if (rootNode) rootNode.expanded = true;

    // Explicit requirement: Чынара branch must stay closed by default.
    const chynaraNode = list.find((node) => node.id === "ch");
    if (chynaraNode) chynaraNode.expanded = false;
}

function getDefaultBio(node) {
    if (!node) return "";
    return "Биография пока не добавлена.";
}

function resetTreeReadyPromise() {
    treeReadyResolved = false;
    treeReadyPromise = new Promise((resolve) => {
        resolveTreeReady = () => {
            if (treeReadyResolved) return;
            treeReadyResolved = true;
            resolve();
        };
    });
}

function isMobileLayout() {
    return window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT;
}

function getSearchPanelHeight() {
    return 0;
}

function buildSearchContext() {
    return null;
}

function getTreeMetrics() {
    const isMobileLayout = window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT;
    return {
        horizontalSpacing: isMobileLayout ? MOBILE_HORIZONTAL_SPACING : DESKTOP_HORIZONTAL_SPACING,
        nodeWidth: isMobileLayout ? MOBILE_NODE_WIDTH : DESKTOP_NODE_WIDTH,
        rootNodeWidth: isMobileLayout ? MOBILE_ROOT_NODE_WIDTH : DESKTOP_ROOT_NODE_WIDTH,
        ancestryGap: isMobileLayout ? MOBILE_ANCESTRY_GAP : DESKTOP_ANCESTRY_GAP
    };
}

function getTreeChildren(id, searchContext) {
    return familyData.filter((node) => node.parentId === id && (!searchContext || searchContext.visibleIds.has(node.id)));
}

function isNodeExpanded(node, searchContext) {
    if (!node) return false;
    if (searchContext) return searchContext.expandedIds.has(node.id);
    return node.expanded;
}

function getParentDisplayName(parentId, parentName) {
    if (parentName) return parentName;
    if (!parentId) return "Тамыры көрсөтүлгөн эмес";
    const parent = familyData.find((node) => node.id === parentId);
    return parent ? parent.name : parentId;
}

function getViewportTargetCenter() {
    const targetCenterX = window.innerWidth / 2;
    const topInset = getSearchPanelHeight();
    const targetCenterY = topInset + ((window.innerHeight - topInset) / 2);
    return { targetCenterX, targetCenterY };
}

function setViewportTransition(duration = 0) {
    const treeContainer = document.getElementById("tree-container");
    if (!treeContainer) return;
    treeContainer.style.transition = duration > 0
        ? `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`
        : "none";
}

function centerViewOnNode(node, options = {}) {
    if (!node) return;
    const {
        animate = false,
        duration = VIEWPORT_ANIMATION_MS,
        horizontalBias = 0,
        verticalBias = 0
    } = options;
    const { targetCenterX, targetCenterY } = getViewportTargetCenter();
    const biasedCenterX = targetCenterX + (window.innerWidth * horizontalBias);
    const biasedCenterY = targetCenterY + (window.innerHeight * verticalBias);
    const nodeCenterX = (node.x || 0) + (getNodeWidth(node) / 2);
    const nodeCenterY = (node.y || 0) + (getNodeHeight(node) / 2);

    clearTimeout(viewportAnimationTimer);
    setViewportTransition(animate ? duration : 0);
    posX = Math.round(biasedCenterX - (nodeCenterX * scale));
    posY = Math.round(biasedCenterY - (nodeCenterY * scale));
    updateTransform();

    if (animate) {
        viewportAnimationTimer = setTimeout(() => {
            setViewportTransition(0);
        }, duration);
    }
}

function centerViewOnExpandedChildren(node, options = {}) {
    if (!node) return;
    const {
        animate = false,
        duration = VIEWPORT_ANIMATION_MS,
        allowZoomIn = false
    } = options;

    const directChildren = getTreeChildren(node.id, null).filter((child) => isVisible(child, null));
    if (!directChildren.length) {
        centerViewOnNode(node, { animate, duration });
        return;
    }

    const nodesToFit = [node, ...directChildren];
    let left = Infinity;
    let right = -Infinity;
    let top = Infinity;
    let bottom = -Infinity;

    nodesToFit.forEach((item) => {
        const x = item.x || 0;
        const y = item.y || 0;
        left = Math.min(left, x);
        right = Math.max(right, x + getNodeWidth(item));
        top = Math.min(top, y);
        bottom = Math.max(bottom, y + getNodeHeight(item));
    });

    const topInset = getSearchPanelHeight();
    const horizontalPadding = isMobileLayout() ? 18 : 42;
    const verticalPaddingTop = isMobileLayout() ? 14 : 24;
    const verticalPaddingBottom = isMobileLayout() ? 24 : 34;
    const viewportWidth = Math.max(80, window.innerWidth - (horizontalPadding * 2));
    const viewportHeight = Math.max(80, window.innerHeight - topInset - verticalPaddingTop - verticalPaddingBottom);
    const targetBranchWidth = Math.max(1, right - left);
    const targetBranchHeight = Math.max(1, bottom - top);
    const maxScale = window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT ? 2.2 : 3;
    const fitScale = Math.min(viewportWidth / targetBranchWidth, viewportHeight / targetBranchHeight);

    const nextScale = allowZoomIn ? fitScale : Math.min(scale, fitScale);
    scale = Math.min(Math.max(nextScale, 0.1), maxScale);

    const branchCenterX = left + (targetBranchWidth / 2);
    const branchCenterY = top + (targetBranchHeight / 2);
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = topInset + ((window.innerHeight - topInset) / 2);

    clearTimeout(viewportAnimationTimer);
    setViewportTransition(animate ? duration : 0);
    posX = Math.round(viewportCenterX - (branchCenterX * scale));
    posY = Math.round(viewportCenterY - (branchCenterY * scale));
    updateTransform();

    if (animate) {
        viewportAnimationTimer = setTimeout(() => {
            setViewportTransition(0);
        }, duration);
    }
}

function centerOnRootPerson(options = {}) {
    const {
        animate = true,
        duration = VIEWPORT_ANIMATION_MS,
        scaleOverride = null,
        includeChildren = true
    } = options;

    const rootNode = familyData.find((node) => node.name === "Абдраман") || familyData.find((node) => node.id === "root");
    if (!rootNode) return;

    if (typeof scaleOverride === "number" && Number.isFinite(scaleOverride)) {
        const maxScale = window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT ? 2.2 : 3;
        scale = Math.min(Math.max(scaleOverride, 0.1), maxScale);
    }

    if (includeChildren) {
        centerViewOnExpandedChildren(rootNode, {
            animate,
            duration,
            allowZoomIn: !(typeof scaleOverride === "number" && Number.isFinite(scaleOverride))
        });
        treeCenteredReady = true;
        scheduleDrawConnections({ initial: !firstConnectionsDrawDone });
        return;
    }

    centerViewOnNode(rootNode, { animate, duration });
    treeCenteredReady = true;
    scheduleDrawConnections({ initial: !firstConnectionsDrawDone });
}

function focusInitialNode() {
    centerOnRootPerson({
        animate: true,
        duration: VIEWPORT_ANIMATION_MS
    });
}

function openSidebar() {
    const overlay = document.getElementById("sidebar-overlay");
    if (!overlay) return;
    overlay.classList.add("is-open");
    const activeSection = document.querySelector(".sidebar-section.is-active");
    if (!activeSection) {
        openSidebarSection("goal");
    }
}

function closeSidebar() {
    const overlay = document.getElementById("sidebar-overlay");
    if (!overlay) return;
    overlay.classList.remove("is-open");
}

function openSidebarSection(section) {
    SIDEBAR_SECTIONS.forEach((key) => {
        const el = document.getElementById(`sidebar-section-${key}`);
        if (!el) return;
        el.classList.toggle("is-active", key === section);
    });

}

async function copySiteLink() {
    try {
        await navigator.clipboard.writeText(SITE_SHARE_URL);
        showNotice("Ссылка көчүрүлдү");
    } catch (error) {
        showNotice("Ссылка көчүрүү мүмкүн болгон жок.", "error");
    }
}

function quickShareSite() {
    openSidebar();
    openSidebarSection("share");
}

function initSidebarContent() {
    const ancestryHost = document.getElementById("sidebar-ancestry-text");
    if (ancestryHost) {
        ancestryHost.innerHTML = `
            <p>${sidebarAncestryExtraText}</p>
            <p><strong>Тизмек:</strong> ${rootAncestors.join(" -> ")}</p>
        `;
    }

    const siteUrl = SITE_SHARE_URL;
    const shareText = SITE_SHARE_TEXT;
    const shareWhatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${siteUrl}`)}`;
    const shareTelegramUrl = `https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(shareText)}`;

    const shareWhatsapp = document.getElementById("share-whatsapp");
    const shareTelegram = document.getElementById("share-telegram");
    const shareInstagram = document.getElementById("share-instagram");
    if (shareWhatsapp) shareWhatsapp.href = shareWhatsappUrl;
    if (shareTelegram) shareTelegram.href = shareTelegramUrl;
    if (shareInstagram) shareInstagram.href = SHARE_INSTAGRAM_URL;

    const contactWhatsapp = document.getElementById("contact-whatsapp");
    const contactTelegram = document.getElementById("contact-telegram");
    if (contactWhatsapp) contactWhatsapp.href = CONTACT_WHATSAPP_URL;
    if (contactTelegram) contactTelegram.href = CONTACT_TELEGRAM_URL;

}

function showNotice(message, type = "info") {
    const host = document.getElementById("notice-host");
    if (!host) return;
    host.innerHTML = "";

    const card = document.createElement("div");
    card.className = `notice-card ${type === "error" ? "is-error" : ""}`;
    card.innerHTML = `
        <div class="notice-icon">
            <i class="fas ${type === "error" ? "fa-exclamation" : "fa-check"}"></i>
        </div>
        <div class="notice-text">${message}</div>
        <button class="notice-close" type="button">Жабуу</button>
    `;

    const close = () => {
        card.classList.add("is-hide");
        setTimeout(() => {
            if (host.contains(card)) host.removeChild(card);
        }, 180);
    };

    const closeBtn = card.querySelector(".notice-close");
    if (closeBtn) closeBtn.addEventListener("pointerup", close);
    host.appendChild(card);

    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(close, type === "error" ? 6500 : 4500);
}

function normalizeNode(raw) {
    return {
        id: String(raw.id),
        name: raw.name || "",
        bdate: raw.bdate || "",
        gender: raw.gender || "",
        bio: raw.bio || "",
        branchColor: raw.branchColor || "",
        partner: raw.partner || "",
        partnerDate: raw.partnerDate || "",
        parentId: raw.parentId ?? null,
        expanded: Boolean(raw.expanded)
    };
}

function ensureBranchColors(list) {
    const byId = new Map(list.map((node) => [node.id, node]));

    const resolveColor = (node) => {
        if (!node) return "";
        if (node.branchColor) return node.branchColor;

        if (node.id === "root") return "";

        if (node.parentId === "root") {
            const direct = BRANCH_COLORS_BY_ROOT_CHILD_ID[node.id] || "";
            node.branchColor = direct;
            return direct;
        }

        const parent = byId.get(node.parentId);
        const inherited = resolveColor(parent);
        node.branchColor = inherited || "";
        return node.branchColor;
    };

    list.forEach((node) => {
        node.branchColor = resolveColor(node);
    });
}

function loadLocalJson(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return fallback;
        // sanity check: raw should be valid JSON
        try {
            return JSON.parse(raw);
        } catch (inner) {
            // attempt simple repair: remove leading zeros in numeric array element
            const repaired = raw.replace(/\[0+(\d+)\]/g, "[$1]")
                               .replace(/\[0+\]/g, "[0]");
            try {
                return JSON.parse(repaired);
            } catch (e2) {
                console.warn("loadLocalJson: failed to parse and repair", raw, e2);
                return fallback;
            }
        }
    } catch (error) {
        return fallback;
    }
}

function saveLocalJson(key, value) {
    // only store objects/arrays, not raw strings
    try {
        const str = JSON.stringify(value);
        localStorage.setItem(key, str);
    } catch (err) {
        console.error("saveLocalJson failed", err, value);
    }
}

function loadInitialLocalData() {
    ensureBranchColors(seedData);
    const approved = loadLocalJson(APPROVED_STORAGE_KEY, []);
    pendingLocal = loadLocalJson(PENDING_STORAGE_KEY, []);
    if (approved.length) {
        const map = new Map(seedData.map((node) => [node.id, normalizeNode(node)]));
        approved.map(normalizeNode).forEach((node) => map.set(node.id, node));
        familyData = Array.from(map.values());
    } else {
        familyData = seedData.map(normalizeNode);
    }
    applyInitialTreeExpansionState(familyData);
    ensureBranchColors(familyData);
    applyFixedNames(familyData);
}

function persistApprovedLocal() {
    saveLocalJson(APPROVED_STORAGE_KEY, familyData.map((n) => ({
        id: n.id,
        name: n.name,
        bdate: n.bdate,
        gender: n.gender || "",
        bio: n.bio || "",
        branchColor: n.branchColor || "",
        partner: n.partner || "",
        partnerDate: n.partnerDate || "",
        parentId: n.parentId,
        expanded: n.expanded
    })));
}

function getGenderPhoto(name) {
    const lowerName = name.toLowerCase();
    const knownFemales = [
        "бүайша", "айдана", "роза", "гулнур", "самара", "асилбү", "жылдыз", "чынар", "элмира",
        "элиза", "нуриза", "айзирек", "алия", "аделина", "сауле", "бегимай", "айпери", "асель",
        "нурия", "мээрим", "ак моор", "мээрзат", "гулбегим", "айзат", "айназик", "гулкайыр",
        "гулшайыр", "нуржаз", "акманай"
    ];
    if (knownFemales.some((f) => lowerName.includes(f))) return femalePhoto;
    if (lowerName.endsWith("а") || lowerName.endsWith("ү")) return femalePhoto;
    return malePhoto;
}

async function openModal(parentId) {
    // start loading Firebase immediately when user opens modal to add person
    loadFirebase();
    const parent = familyData.find((n) => n.id === parentId);
    const parentName = parent ? String(parent.name || "").trim() : "";
    currentParentId = parentId;
    const overlay = document.getElementById("modal-overlay");
    const titleEl = document.getElementById("member-modal-title");
    const parentNameEl = document.getElementById("member-modal-parent-name");
    const confirmTextEl = document.getElementById("member-modal-confirm-text");
    const saveBtn = document.getElementById("member-modal-save-btn");
    const nameInput = document.getElementById("new-name");
    const dateInput = document.getElementById("new-date");
    const genderInput = document.getElementById("new-gender");
    if (!overlay || !titleEl || !parentNameEl || !confirmTextEl || !saveBtn || !nameInput || !dateInput || !genderInput) return;

    overlay.style.display = "flex";
    titleEl.style.display = "none";
    parentNameEl.style.display = "block";
    confirmTextEl.style.display = "block";
    parentNameEl.textContent = parentName || "Белгисиз";
    saveBtn.textContent = "Сактоо";
    memberModalMode = "add";
    editMemberId = null;
    nameInput.value = "";
    dateInput.value = "";
    nameInput.focus();
    genderInput.value = "male";
}

function closeModal() {
    const overlay = document.getElementById("modal-overlay");
    const nameInput = document.getElementById("new-name");
    const dateInput = document.getElementById("new-date");
    const genderInput = document.getElementById("new-gender");
    const titleEl = document.getElementById("member-modal-title");
    const parentNameEl = document.getElementById("member-modal-parent-name");
    const confirmTextEl = document.getElementById("member-modal-confirm-text");
    if (!overlay || !nameInput || !dateInput || !genderInput || !titleEl || !parentNameEl || !confirmTextEl) return;

    overlay.style.display = "none";
    titleEl.style.display = "block";
    parentNameEl.style.display = "none";
    confirmTextEl.style.display = "none";
    parentNameEl.textContent = "";
    nameInput.value = "";
    dateInput.value = "";
    genderInput.value = "male";
    memberModalMode = "add";
    editMemberId = null;
}

function buildPendingPayload(name, date, gender, parentId) {
    const parent = familyData.find((node) => node.id === parentId);
    return {
        name,
        year: date,
        bdate: date,
        gender,
        status: "pending",
        bio: "",
        branchColor: parent ? (parent.branchColor || "") : "",
        parentId,
        parentName: parent ? parent.name : "",
        partner: "",
        partnerDate: "",
        expanded: false,
        createdAt: null,
        createdAtISO: new Date().toISOString()
    };
}

async function saveNewMember() {
    // ensure firebase is available before attempting any backend write
    await loadFirebase();

    const nameInput = document.getElementById("new-name");
    const dateInput = document.getElementById("new-date");
    const genderInput = document.getElementById("new-gender");
    if (!nameInput || !dateInput || !genderInput) return;

    const name = nameInput.value.trim();
    const date = dateInput.value.trim();
    const gender = genderInput.value;
    if (!name) return;

    const pendingPayload = buildPendingPayload(name, date, gender, currentParentId);

    if (isAdmin) {
        const node = normalizeNode({
            id: `m_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            ...pendingPayload
        });

        try {
            if (backendEnabled) {
                await db.collection("approved_members").doc(node.id).set(toStoreNode(node));
            } else {
                familyData.push(node);
                persistApprovedLocal();
            }
        } catch (error) {
            showNotice("Кошууда ката чыкты.", "error");
            return;
        }

        showNotice("Адам дароо кошулду.");
        closeModal();
        render();
        return;
    }

    try {
        if (backendEnabled) {
            await db.collection("pending_members").add({
                ...pendingPayload,
                status: "pending",
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        } else {
            pendingLocal.push({ id: "local_" + Date.now(), ...pendingPayload });
            saveLocalJson(PENDING_STORAGE_KEY, pendingLocal);
        }
    } catch (error) {
        showNotice("Сактоодо ката чыкты. Интернет же Firebase setup текшериңиз.", "error");
        return;
    }

    showNotice("Маалымат админге жиберилди. Админ уруксат бергенде пайда болот.");
    closeModal();
    renderPendingList();
}

function openEditModal(memberId) {
    if (!isAdmin) return;
    const node = familyData.find((n) => n.id === memberId);
    if (!node) return;

    memberModalMode = "edit";
    editMemberId = memberId;
    currentParentId = node.parentId;

    const titleEl = document.getElementById("member-modal-title");
    const parentNameEl = document.getElementById("member-modal-parent-name");
    const confirmTextEl = document.getElementById("member-modal-confirm-text");
    const saveBtn = document.getElementById("member-modal-save-btn");
    const nameInput = document.getElementById("new-name");
    const dateInput = document.getElementById("new-date");
    const genderInput = document.getElementById("new-gender");
    const overlay = document.getElementById("modal-overlay");
    if (!titleEl || !parentNameEl || !confirmTextEl || !saveBtn || !nameInput || !dateInput || !genderInput || !overlay) return;

    titleEl.style.display = "block";
    parentNameEl.style.display = "none";
    confirmTextEl.style.display = "none";
    parentNameEl.textContent = "";
    titleEl.textContent = "Адамды өзгөртүү";
    saveBtn.textContent = "Сактоо";
    nameInput.value = node.name || "";
    dateInput.value = node.bdate || "";
    genderInput.value = node.gender || "male";
    overlay.style.display = "flex";
    nameInput.focus();
}

async function saveEditMember() {
    if (!isAdmin || !editMemberId) return;
    const node = familyData.find((n) => n.id === editMemberId);
    if (!node) return;

    const nameInput = document.getElementById("new-name");
    const dateInput = document.getElementById("new-date");
    const genderInput = document.getElementById("new-gender");
    if (!nameInput || !dateInput || !genderInput) return;

    const name = nameInput.value.trim();
    const date = dateInput.value.trim();
    const gender = genderInput.value;
    if (!name) return;

    node.name = name;
    node.bdate = date;
    node.gender = gender;

    try {
        if (backendEnabled) {
            await db.collection("approved_members").doc(node.id).set(toStoreNode(node), { merge: true });
        } else {
            persistApprovedLocal();
        }
    } catch (error) {
        showNotice("Өзгөртүүдө ката чыкты.", "error");
        return;
    }

    closeModal();
    render();
    showNotice("Маалымат жаңыртылды.");
}

function getDescendantIds(parentId) {
    const ids = [parentId];
    const stack = [parentId];

    while (stack.length) {
        const current = stack.pop();
        familyData
            .filter((n) => n.parentId === current)
            .forEach((child) => {
                ids.push(child.id);
                stack.push(child.id);
            });
    }

    return ids;
}

async function deleteMember(memberId) {
    if (!isAdmin) return;
    if (memberId === "root") {
        showNotice("Root адамды өчүрүүгө болбойт.", "error");
        return;
    }
    if (!confirm("Бул адамды (балдары менен) өчүрөйүнбү?")) return;

    const idsToDelete = getDescendantIds(memberId);

    try {
        if (backendEnabled) {
            const batch = db.batch();
            idsToDelete.forEach((id) => {
                batch.delete(db.collection("approved_members").doc(id));
            });
            await batch.commit();
        } else {
            familyData = familyData.filter((n) => !idsToDelete.includes(n.id));
            persistApprovedLocal();
            render();
        }
    } catch (error) {
        showNotice("Өчүрүүдө ката чыкты.", "error");
        return;
    }

    showNotice("Өчүрүлдү.");
}

function saveMemberAction() {
    if (memberModalMode === "edit") {
        saveEditMember();
        return;
    }
    saveNewMember();
}

function hasChildren(id) {
    return familyData.some((n) => n.parentId === id);
}

function isCardControlTarget(rawTarget) {
    const target = rawTarget && rawTarget.nodeType === 1
        ? rawTarget
        : (rawTarget && rawTarget.parentElement ? rawTarget.parentElement : null);
    if (!target || typeof target.closest !== "function") return false;
    return Boolean(target.closest(".add-plus-inline, .bio-btn-inline, .node-icon-btn"));
}

function handleCardToggleFromEventTarget(rawTarget) {
    const target = rawTarget && rawTarget.nodeType === 1
        ? rawTarget
        : (rawTarget && rawTarget.parentElement ? rawTarget.parentElement : null);
    if (!target || typeof target.closest !== "function") return false;
    if (isUiOverlayTarget(target)) return false;
    if (isCardControlTarget(target)) return false;

    const card = target.closest("[data-node-id]");
    if (!card) return false;
    const nodeId = card.dataset.nodeId;
    if (!nodeId) return false;

    toggleBranch(nodeId);
    return true;
}

function canAddToNode(node) {
    if (!node) return false;
    if (node.id === "root") return false;
    if (node.parentId === "root") return false;
    return true;
}

function canShowLifeStory(node) {
    if (!node) return false;
    return Boolean(node.bio) || node.id === "root" || node.parentId === "root";
}

function getLeafVerticalSpacing(node) {
    // reduce vertical spacing to match smaller card height
    if (!node) return 150;
    if (node.id === "root") return 150;
    if (node.parentId === "root") return 130;
    return 100;
}

function getNodeHeight(node) {
    if (!node) return NODE_HEIGHT;
    if (node.id === "root") return NODE_HEIGHT;
    if (node.parentId === "root") return 110; // slightly taller for root children
    return 80; // compact descendants smaller
}

function getTreeHeight(id, searchContext) {
    const node = familyData.find((n) => n.id === id);
    const children = getTreeChildren(id, searchContext);
    if (!node || !isNodeExpanded(node, searchContext) || children.length === 0) return getLeafVerticalSpacing(node);
    return children.reduce((acc, child) => acc + getTreeHeight(child.id, searchContext), 0);
}

function layout(id, x, centerY, searchContext) {
    const node = familyData.find((n) => n.id === id);
    if (!node) return;
    const { horizontalSpacing } = getTreeMetrics();
    node.x = x;
    node.y = centerY - (getNodeHeight(node) / 2);
    if (isNodeExpanded(node, searchContext)) {
        const children = getTreeChildren(id, searchContext);
        let currentY = centerY - (getTreeHeight(id, searchContext) / 2);
        children.forEach((c) => {
            const h = getTreeHeight(c.id, searchContext);
            layout(c.id, x + horizontalSpacing, currentY + h / 2, searchContext);
            currentY += h;
        });
    }
}

function appendConnector(svg, x1, y1, x2, y2, branchColor) {
    const dx = x2 - x1;
    const cp1x = x1 + dx * 0.4;
    const cp2x = x1 + dx * 0.6;
    const pathData = `M ${x1} ${y1} C ${cp1x} ${y1}, ${cp2x} ${y2}, ${x2} ${y2}`;
    const color = branchColor || "#9ca3af";

    const pathBg = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathBg.setAttribute("d", pathData);
    pathBg.setAttribute("class", "connector");
    pathBg.style.stroke = color;
    pathBg.style.opacity = "0.28";
    svg.appendChild(pathBg);

    const pathFg = document.createElementNS("http://www.w3.org/2000/svg", "path");
    pathFg.setAttribute("d", pathData);
    pathFg.setAttribute("class", "connector-inner");
    pathFg.style.stroke = color;
    pathFg.style.opacity = "0.8";
    pathFg.style.filter = "none";
    svg.appendChild(pathFg);
}

function appendAncestryBridge(svg, x1, y, x2) {
    const lineBg = document.createElementNS("http://www.w3.org/2000/svg", "line");
    lineBg.setAttribute("x1", x1);
    lineBg.setAttribute("y1", y);
    lineBg.setAttribute("x2", x2);
    lineBg.setAttribute("y2", y);
    lineBg.setAttribute("class", "ancestry-bridge");
    svg.appendChild(lineBg);

    const lineFg = document.createElementNS("http://www.w3.org/2000/svg", "line");
    lineFg.setAttribute("x1", x1);
    lineFg.setAttribute("y1", y);
    lineFg.setAttribute("x2", x2);
    lineFg.setAttribute("y2", y);
    lineFg.setAttribute("class", "ancestry-bridge-inner");
    svg.appendChild(lineFg);

    const arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    const ax = x2 - 2;
    const ay = y;
    arrow.setAttribute("points", `${ax - 7},${ay - 4} ${ax},${ay} ${ax - 7},${ay + 4}`);
    arrow.setAttribute("class", "ancestry-bridge-arrow");
    svg.appendChild(arrow);
}

function getNodeWidth(node) {
    const { nodeWidth, rootNodeWidth } = getTreeMetrics();
    if (!node) return nodeWidth;
    if (node.id === "root") return rootNodeWidth;
    return nodeWidth;
}

function getEdgeSourceY(parentNode, childNodeId, searchContext) {
    const siblings = familyData
        .filter(node => node.parentId === parentNode.id && isVisible(node, searchContext))
        .sort((a, b) => a.y - b.y);

    const count = siblings.length;

    if (count <= 1) {
        return parentNode.y + (getNodeHeight(parentNode) / 2);
    }

    const index = siblings.findIndex(node => node.id === childNodeId);
    const center = parentNode.y + (getNodeHeight(parentNode) / 2);
    const spread = Math.min(120, count * 18);
    const start = center - spread / 2;
    const step = spread / (count - 1);

    return start + step * index;
}

function debounce(fn, delay) {
    let t = null;
    return (...args) => {
        if (t) clearTimeout(t);
        t = setTimeout(() => fn(...args), delay);
    };
}

function canDrawConnections() {
    return treeCardsReady && treeCenteredReady;
}

function runDrawConnectionsFrame() {
    if (!canDrawConnections()) return;
    if (drawConnectionsRaf) {
        cancelAnimationFrame(drawConnectionsRaf);
    }
    drawConnectionsRaf = requestAnimationFrame(() => {
        drawConnectionsRaf = null;
        drawConnections();
    });
}

const redrawConnections = debounce(() => {
    runDrawConnectionsFrame();
}, 60);

let lastViewportWidth = window.innerWidth;
let lastViewportIsMobile = window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT;

const handleViewportResize = debounce(() => {
    const nextViewportWidth = window.innerWidth;
    const nextViewportIsMobile = nextViewportWidth <= MOBILE_LAYOUT_BREAKPOINT;
    const shouldRecenter = Math.abs(nextViewportWidth - lastViewportWidth) > 24
        || nextViewportIsMobile !== lastViewportIsMobile;

    lastViewportWidth = nextViewportWidth;
    lastViewportIsMobile = nextViewportIsMobile;

    render();

    if (shouldRecenter) {
        resetView();
        return;
    }

    redrawConnections();
}, 80);

function scheduleDrawConnections(options = {}) {
    const { initial = false, immediate = false } = options;
    if (!canDrawConnections()) return;

    if (initial && !firstConnectionsDrawDone) {
        firstConnectionsDrawDone = true;
        runDrawConnectionsFrame();
        return;
    }

    if (immediate) {
        runDrawConnectionsFrame();
        return;
    }

    redrawConnections();
}

function drawConnections() {
    const svg = document.getElementById("tree-svg");
    const nodesLayer = document.getElementById("nodes-layer");
    if (!svg || !nodesLayer) return;
    svg.innerHTML = "";

    const searchContext = buildSearchContext();
    const nodeElements = nodesLayer.querySelectorAll(".node-container.person-card[data-node-id]");
    const nodeElementMap = new Map();
    nodeElements.forEach((el) => {
        const id = el.dataset.nodeId;
        if (id) nodeElementMap.set(id, el);
    });
    familyData.forEach((node) => {
        if (!isVisible(node, searchContext)) return;
        if (!node.parentId) return;

        const parentNode = familyData.find((candidate) => candidate.id === node.parentId);
        if (!parentNode || !isNodeExpanded(parentNode, searchContext)) return;

        const parentEl = nodeElementMap.get(parentNode.id);
        const childEl = nodeElementMap.get(node.id);
        if (!parentEl || !childEl) return;

        const x1 = parentEl.offsetLeft + parentEl.offsetWidth;
        const y1 = parentEl.offsetTop + (parentEl.offsetHeight / 2);
        const x2 = childEl.offsetLeft;
        const y2 = childEl.offsetTop + (childEl.offsetHeight / 2);
        appendConnector(svg, x1, y1, x2, y2, node.branchColor);
    });

    if (!searchContext) {
        const rootEl = nodeElementMap.get("root");
        const ancestryEl = nodesLayer.querySelector(".node-ancestry-card");
        if (rootEl && ancestryEl) {
            const x1 = ancestryEl.offsetLeft + ancestryEl.offsetWidth;
            const x2 = rootEl.offsetLeft;
            const y = rootEl.offsetTop + (rootEl.offsetHeight / 2);
            appendAncestryBridge(svg, x1, y, x2);
        }
    }

    if (!loaderHidden) {
        loaderConnectionsDone = true;
        tryHideLoader();
    }

}

function render() {
    if (!loaderHidden) {
        loaderRenderDone = false;
        loaderConnectionsDone = false;
    }
    renderCycleId += 1;

    const searchContext = buildSearchContext();
    const { nodeWidth, ancestryGap } = getTreeMetrics();
    layout("root", 0, 0, searchContext);
    treeCardsReady = false;
    const nodesLayer = document.getElementById("nodes-layer");
    const svg = document.getElementById("tree-svg");
    if (!nodesLayer || !svg) return;

    // build map of existing nodes so we can reuse them
    const existing = new Map();
    nodesLayer.querySelectorAll(".node-container.person-card[data-node-id]").forEach(el => {
        const id = el.dataset.nodeId;
        if (id) existing.set(id, el);
    });
    svg.innerHTML = ""; // always clear connections layer

    // virtual rendering when data set grows
    const totalCount = familyData.length;
    const useViewportCulling = totalCount > 100;
    const viewport = useViewportCulling ? computeViewportRect() : null;

    familyData.forEach((n) => {
        if (!isVisible(n, searchContext)) return;
        if (useViewportCulling) {
            const h = getNodeHeight(n);
            if (!nodeIntersectsViewport(n, viewport, nodeWidth, h)) return;
        }

        const isRootCard = n.id === "root";
        const isRootChild = n.parentId === "root";
        const isCompactDescendant = !isRootCard && !isRootChild;
        // try to reuse existing DOM element
        let reused = false;
        let el = existing.get(n.id);
        if (el) {
            reused = true;
            existing.delete(n.id);
            el.className = `node-container person-card ${isRootCard ? "node-root" : ""} ${isRootChild ? "node-root-child" : ""} ${isCompactDescendant ? "node-compact-descendant" : ""} ${isNodeExpanded(n, searchContext) ? "is-expanded" : ""}`;
            el.style.left = n.x + "px";
            el.style.top = n.y + "px";
            el.style.height = getNodeHeight(n) + "px";
            el.style.setProperty("--branch-color", n.branchColor || "transparent");
            el.dataset.personName = n.name || "";
            el.dataset.nodeId = n.id;
        } else {
            el = document.createElement("div");
            el.className = `node-container person-card ${isRootCard ? "node-root" : ""} ${isRootChild ? "node-root-child" : ""} ${isCompactDescendant ? "node-compact-descendant" : ""} ${isNodeExpanded(n, searchContext) ? "is-expanded" : ""}`;
            el.style.left = n.x + "px";
            el.style.top = n.y + "px";
            el.style.height = getNodeHeight(n) + "px";
            el.style.setProperty("--branch-color", n.branchColor || "transparent");
            el.dataset.personName = n.name || "";
            el.dataset.nodeId = n.id;
        }

        const bDateStr = n.bdate ? `${n.bdate}-жыл` : "";
        const mainPhoto = n.id === "root"
            ? rootPhoto
            : (n.gender === "female" ? femalePhoto : (n.gender === "male" ? malePhoto : getGenderPhoto(n.name)));
        const indicator = hasChildren(n.id) ? '<i class="fas fa-chevron-right has-children-indicator"></i>' : "";

        const partnerTitle = n.gender === "female" ? "Жолдошу" : "Жубайы";
        const partnerContent = isCompactDescendant ? "" : (n.partner ? (isRootCard ? `
            <div class="mt-1 pt-1 border-t border-white/10 flex flex-col leading-tight">
                <div class="partner-label">Жубайы</div>
                <div class="name-text partner-name-primary">Гүлай</div>
                <div class="partner-date">${n.partnerDate ? n.partnerDate + "-жыл" : ""}</div>
            </div>
        ` : `
            <div class="mt-1 pt-1 border-t border-white/10 flex flex-col leading-tight">
                <div class="partner-line"><span class="partner-label">${partnerTitle}:</span> <span class="partner-name">${n.partner}</span></div>
                <div class="partner-date">${n.partnerDate ? n.partnerDate + "-жыл" : ""}</div>
            </div>
        `) : "");

        const addButton = canAddToNode(n) ? `
            <button class="add-plus add-plus-inline" type="button" data-fast-action="add" data-node-id="${n.id}" title="Кошуу">
                <span class="add-plus-icon">+</span>
                <span class="add-plus-text">Кошуу</span>
            </button>
        ` : "";

        const lifeStoryBtn = canShowLifeStory(n)
            ? `<button class="bio-btn bio-btn-inline" type="button" data-fast-action="bio" data-node-id="${n.id}">Өмүр баяны</button>`
            : "";
        const hasLifeStoryButton = Boolean(lifeStoryBtn);
        const metaActionBtn = isCompactDescendant ? addButton : (lifeStoryBtn || addButton);
        const metaContent = isRootCard
            ? `
                <div class="card-meta-row">
                    <div class="date-text">${bDateStr}</div>
                    ${metaActionBtn}
                </div>
            `
            : `
                <div class="card-meta-stack">
                    <div class="date-text">${bDateStr}</div>
                    ${metaActionBtn}
                </div>
            `;

        const sideActions = isAdmin ? `
            <div class="node-side-actions">
                <div class="admin-node-actions">
                    <button class="node-icon-btn" type="button" data-fast-action="edit" data-node-id="${n.id}" title="Өзгөртүү"><i class="fas fa-pen"></i></button>
                    ${n.id !== "root" ? `<button class="node-icon-btn node-icon-btn-danger" type="button" data-fast-action="delete" data-node-id="${n.id}" title="Өчүрүү"><i class="fas fa-trash"></i></button>` : ""}
                </div>
            </div>
        ` : "";

        if (!reused) {
            el.innerHTML = `
                <img src="${IMAGE_PLACEHOLDER_SRC}" data-src="${mainPhoto}" class="profile-img" loading="lazy" decoding="async" />
                <div class="node-main-content">
                    <div class="flex items-center mb-1">
                        <div class="name-text">${n.name}</div>
                        ${indicator}
                    </div>
                    ${metaContent}
                    ${partnerContent}
                </div>
                ${sideActions}
            `;
            if (hasLifeStoryButton) {
                el.classList.add("has-bio-button");
            }

            // ensure root avatar always loads immediately (not lazy)
            if (n.id === "root") {
                const rootAvatar = el.querySelector(".profile-img");
                if (rootAvatar) {
                    rootAvatar.src = mainPhoto; // bypass data-src lazy logic
                    rootAvatar.addEventListener("pointerup", (event) => {
                        event.stopPropagation();
                        openBioModal("root");
                    });
                }
            }

            nodesLayer.appendChild(el);
        } else {
            // update photo attributes if changed
            const img = el.querySelector(".profile-img");
            if (img) {
                img.dataset.src = mainPhoto;
                if (img.dataset.loaded === "true") img.src = mainPhoto;
            }
            // update name and indicator were handled earlier
            // update meta and partner area and side actions
            const contentWrapper = el.querySelector(".node-main-content");
            if (contentWrapper) {
                contentWrapper.innerHTML = `
                    <div class="flex items-center mb-1">
                        <div class="name-text">${n.name}</div>
                        ${indicator}
                    </div>
                    ${metaContent}
                    ${partnerContent}
                `;
            }
            if (hasLifeStoryButton) {
                el.classList.add("has-bio-button");
            } else {
                el.classList.remove("has-bio-button");
            }
            // ensure root avatar click listener exists
            if (n.id === "root") {
                const rootAvatar = el.querySelector(".profile-img");
                if (rootAvatar && !rootAvatar._rootListenerAdded) {
                    rootAvatar.addEventListener("pointerup", (event) => {
                        event.stopPropagation();
                        openBioModal("root");
                    });
                    rootAvatar._rootListenerAdded = true;
                }
            }
            if (!nodesLayer.contains(el)) {
                nodesLayer.appendChild(el);
            }
        }

        if (n.id === "root" && !searchContext) {
            const ancestryX = n.x - (nodeWidth + ancestryGap);
            const ancestryY = n.y;

            const ancestryEl = document.createElement("div");
            ancestryEl.className = "node-container node-ancestry-card";
            ancestryEl.style.left = ancestryX + "px";
            ancestryEl.style.top = ancestryY + "px";
            ancestryEl.style.height = NODE_HEIGHT + "px";
            ancestryEl.innerHTML = `
                <div class="ancestry-shell">
                    <div class="ancestry-head">
                        <div class="ancestry-head-icon"><img src="assets/atatek.webp" alt="Толук санжыра" loading="lazy" decoding="async"></div>
                        <div class="ancestry-head-copy">
                            <div class="ancestry-head-title">Толук санжыра</div>
                            <div class="ancestry-head-sub">Кеңири көрүү үчүн басыңыз</div>
                        </div>
                        <div class="ancestry-head-toggle"><i class="fas fa-chevron-right"></i></div>
                    </div>
                </div>
            `;
            ancestryEl.addEventListener("pointerup", () => {
                openFullLineageModal();
            });
            nodesLayer.appendChild(ancestryEl);
        }

    });

    // any elements left in `existing` are no longer needed
    existing.forEach(el => {
        if (el && el.parentNode === nodesLayer) {
            nodesLayer.removeChild(el);
        }
    });

    treeCardsReady = true;
    if (!loaderHidden) {
        loaderRenderDone = true;
    }
    updateTransform();
    const currentRenderCycleId = renderCycleId;
    waitImagesLoaded(nodesLayer).then(() => {
        if (currentRenderCycleId !== renderCycleId) return;
        scheduleDrawConnections({ initial: !firstConnectionsDrawDone, immediate: true });
        if (loaderHidden) observeCardPhotos();
        if (!loaderConnectionsDone) {
            loaderConnectionsDone = true;
        }
        if (resolveTreeReady) resolveTreeReady();
        tryHideLoader();
    });
    renderSearchResults();

    if (!loaderHidden) {
        loaderRenderDone = true;
    }
}

// stub used by render(); feature may be unimplemented or removed
function renderSearchResults() {
    // no-op placeholder to avoid console errors
}

// viewport utilities used when there are a lot of cards
let lastRenderViewport = null;
function computeViewportRect() {
    const invScale = scale ? 1 / scale : 1;
    const x0 = -posX * invScale;
    const y0 = -posY * invScale;
    const w = window.innerWidth * invScale;
    const h = window.innerHeight * invScale;
    const buffer = 100; // content‑space padding so cards just outside still render
    return { x0, y0, w, h, buffer };
}
function viewportChanged(a, b) {
    if (!a || !b) return true;
    const tol = 50;
    return Math.abs(a.x0 - b.x0) > tol || Math.abs(a.y0 - b.y0) > tol ||
           Math.abs(a.w - b.w) > tol || Math.abs(a.h - b.h) > tol;
}
function nodeIntersectsViewport(node, vp, nodeW, nodeH) {
    if (!vp) return true;
    const x = node.x, y = node.y;
    return x + nodeW >= vp.x0 - vp.buffer && x <= vp.x0 + vp.w + vp.buffer &&
           y + nodeH >= vp.y0 - vp.buffer && y <= vp.y0 + vp.h + vp.buffer;
}

function isVisible(node, searchContext) {
    if (!node) return false;
    if (searchContext && !searchContext.visibleIds.has(node.id)) return false;
    if (!node.parentId) return true;
    const parent = familyData.find((x) => x.id === node.parentId);
    return parent && isNodeExpanded(parent, searchContext) && isVisible(parent, searchContext);
}

function resetView() {
    centerOnRootPerson({
        animate: true,
        duration: 460
    });
}

function resetTree() {
    familyData.forEach((node) => {
        node.expanded = false;
    });
    // Reset must keep only root branch open (root + 10 sons).
    const rootNode = familyData.find((node) => node.id === "root");
    if (rootNode) rootNode.expanded = true;

    closeModal();
    closeBioModal();

    if (!backendEnabled) persistApprovedLocal();
    render();
    centerOnRootPerson({
        animate: true,
        duration: 460
    });
}

function updateTransform() {
    const treeContainer = document.getElementById("tree-container");
    if (!treeContainer) return;
    treeContainer.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(${scale})`;

    // when using viewport culling we need to re-evaluate nodes on pan/zoom
    if (familyData.length > 100) {
        const vp = computeViewportRect();
        if (viewportChanged(vp, lastRenderViewport)) {
            lastRenderViewport = vp;
            render();
        }
    }

    scheduleDrawConnections();
}

function toggleAdminPanel() {
    openSidebar();
    openSidebarSection("contact");
    renderPendingList();
}

function updateAdminUi() {
    const authBlock = document.getElementById("admin-auth-block");
    const userLine = document.getElementById("admin-user-line");
    const logoutBtn = document.getElementById("admin-logout-btn");
    const pendingTitle = document.getElementById("pending-title");
    const pendingWrap = document.getElementById("pending-list");
    if (!authBlock || !userLine || !logoutBtn || !pendingWrap) return;

    userLine.textContent = "";
    userLine.style.display = "none";

    if (backendEnabled || authEnabled) {
        if (currentUser) {
            authBlock.style.display = isAdmin ? "none" : "block";
            logoutBtn.style.display = "block";
            pendingWrap.style.display = (isAdmin && backendEnabled) ? "flex" : "none";
            if (pendingTitle) pendingTitle.style.display = (isAdmin && backendEnabled) ? "block" : "none";
        } else {
            authBlock.style.display = "block";
            logoutBtn.style.display = "none";
            pendingWrap.style.display = "none";
            if (pendingTitle) pendingTitle.style.display = "none";
        }
    } else {
        authBlock.style.display = isAdmin ? "none" : "block";
        logoutBtn.style.display = isAdmin ? "block" : "none";
        pendingWrap.style.display = isAdmin ? "flex" : "none";
        if (pendingTitle) pendingTitle.style.display = isAdmin ? "block" : "none";
    }
}

function renderPendingList(itemsFromBackend) {
    const wrap = document.getElementById("pending-list");
    if (!wrap) return;
    let list = [];

    if (backendEnabled) {
        if (!isAdmin) return;
        list = itemsFromBackend || wrap._pendingCache || [];
        wrap._pendingCache = list;
    } else {
        if (!isAdmin) return;
        list = pendingLocal;
    }

    if (!list.length) {
        wrap.innerHTML = '<div class="pending-item no-requests">Жаңы заявка жок.</div>';
        return;
    }

    wrap.innerHTML = list.map((item) => `
        <div class="pending-item">
            <div class="pending-meta"><strong>Родитель:</strong> ${item.parentName || getParentDisplayName(item.parentId, "") || "-"}</div>
            <div class="pending-meta"><strong>Добавляемый человек:</strong> ${item.name || "-"}</div>
            <div class="pending-meta"><strong>Год рождения:</strong> ${item.year || item.bdate || "-"}</div>
            <div class="pending-actions">
                <button class="btn-save" type="button" data-pending-action="approve" data-pending-id="${item.id}">Сохранить</button>
                <button class="btn-save bg-gray-600 text-white" type="button" data-pending-action="reject" data-pending-id="${item.id}">Удалить</button>
            </div>
        </div>
    `).join("");
}

async function adminSignIn() {
    // make sure libs are loaded even if caller didn't wrap
    await loadFirebase();

    if (!authEnabled || !auth) {
        showNotice("Firebase Auth жеткиликсиз. Админ кирүү өчүрүлгөн.", "error");
        return;
    }

    if (currentUser) {
        if (adminUids.includes(currentUser.uid)) {
            isAdmin = true;
            updateAdminUi();
            renderPendingList();
        } else {
            isAdmin = false;
            updateAdminUi();
            renderPendingList([]);
            showNotice("Сиз админ боло албайсыз", "error");
        }
        return;
    }

    adminSignInAttempted = true;
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
    } catch (error) {
        const code = error && error.code ? error.code : "unknown_error";
        if (code === "auth/operation-not-supported-in-this-environment") {
            try {
                const provider = new firebase.auth.GoogleAuthProvider();
                await auth.signInWithRedirect(provider);
                return;
            } catch (redirectError) {
                showNotice(`Кирүү иштебей калды: ${redirectError.code || code}`, "error");
                return;
            }
        }
        showNotice(`Кирүү иштебей калды: ${code}`, "error");
    }
}

async function adminSignOut() {
    if (authEnabled && auth && currentUser) {
        await auth.signOut();
        return;
    }

    isAdmin = false;
    currentUser = null;
    updateAdminUi();
    renderPendingList([]);
}

function makeApprovedNodeFromPending(item) {
    const parent = familyData.find((n) => n.id === item.parentId);
    return normalizeNode({
        id: `m_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
        name: item.name,
        bdate: item.bdate,
        gender: item.gender || "",
        bio: item.bio || "",
        branchColor: item.branchColor || (parent ? (parent.branchColor || "") : ""),
        parentId: item.parentId,
        partner: item.partner || "",
        partnerDate: item.partnerDate || "",
        expanded: false
    });
}

async function approvePending(id) {
    if (!isAdmin) return;

    if (backendEnabled) {
        try {
            const ref = db.collection("pending_members").doc(id);
            const snap = await ref.get();
            if (!snap.exists) return;

            const approvedNode = makeApprovedNodeFromPending({ id, ...snap.data() });
            const batch = db.batch();
            batch.set(db.collection("approved_members").doc(approvedNode.id), approvedNode);
            batch.update(ref, {
                status: "approved",
                approvedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            await batch.commit();
        } catch (error) {
            showNotice("Approve болбой калды.", "error");
        }
        return;
    }

    const idx = pendingLocal.findIndex((n) => n.id === id);
    if (idx === -1) return;

    const approvedNode = makeApprovedNodeFromPending(pendingLocal[idx]);
    pendingLocal.splice(idx, 1);
    familyData.push(approvedNode);

    saveLocalJson(PENDING_STORAGE_KEY, pendingLocal);
    persistApprovedLocal();
    render();
    renderPendingList();
}

async function rejectPending(id) {
    if (!isAdmin) return;

    if (backendEnabled) {
        try {
            await db.collection("pending_members").doc(id).delete();
        } catch (error) {
            showNotice("Reject болбой калды.", "error");
        }
        return;
    }

    pendingLocal = pendingLocal.filter((n) => n.id !== id);
    saveLocalJson(PENDING_STORAGE_KEY, pendingLocal);
    renderPendingList();
}

function startPendingSubscription() {
    if (pendingUnsubscribe) pendingUnsubscribe();
    pendingUnsubscribe = db.collection("pending_members")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) => {
            const pending = [];
            snapshot.forEach((doc) => {
                const item = { id: doc.id, ...doc.data() };
                if ((item.status || "pending") === "pending") pending.push(item);
            });
            renderPendingList(pending);
        });
}

function stopPendingSubscription() {
    if (pendingUnsubscribe) {
        pendingUnsubscribe();
        pendingUnsubscribe = null;
    }
}

function startApprovedSubscription() {
    db.collection("approved_members").onSnapshot((snapshot) => {
        const remote = [];
        snapshot.forEach((doc) => remote.push(normalizeNode({ id: doc.id, ...doc.data() })));
        const map = new Map(seedData.map((node) => [node.id, normalizeNode(node)]));
        remote.forEach((node) => map.set(node.id, normalizeNode(node)));
        familyData = Array.from(map.values());
        if (!loaderDataReady) {
            applyInitialTreeExpansionState(familyData);
        }
        ensureBranchColors(familyData);
        applyFixedNames(familyData);
        render();
        setLoaderProgress(100);
        loaderDataReady = true;
        tryHideLoader();
    }, () => {
        // Keep app usable even when remote subscription fails.
        setLoaderProgress(100);
        loaderDataReady = true;
        tryHideLoader();
    });
}

function initBackend() {
    // debug: check Firebase availability
    if (!window.firebase) {
        console.error("Firebase script failed to load (window.firebase undefined)");
    }
    if (!appConfig.firebase) {
        console.error("appConfig.firebase missing", appConfig);
    }
    if (!window.firebase || !appConfig.firebase) {
        backendEnabled = false;
        authEnabled = false;
        db = null;
        auth = null;
        updateAdminUi();
        setLoaderProgress(100);
        loaderAuthReady = true;
        loaderDataReady = true;
        tryHideLoader();
        return;
    }

    setLoaderProgress(45);
    let app = null;
    try {
        if (Array.isArray(firebase.apps) && firebase.apps.length > 0) {
            app = firebase.app();
        } else {
            app = firebase.initializeApp(appConfig.firebase);
        }
    } catch (error) {
        backendEnabled = false;
        authEnabled = false;
        db = null;
        auth = null;
        setLoaderProgress(100);
        loaderAuthReady = true;
        loaderDataReady = true;
        updateAdminUi();
        tryHideLoader();
        return;
    }

    try {
        auth = app.auth();
        authEnabled = Boolean(auth);
    } catch (error) {
        console.error("Error initializing Firebase auth:", error);
        auth = null;
        authEnabled = false;
    }

    try {
        db = app.firestore();
        backendEnabled = Boolean(db);
    } catch (error) {
        db = null;
        backendEnabled = false;
    }

    setLoaderProgress(60);

    if (backendEnabled) {
        startApprovedSubscription();
    } else {
        loaderDataReady = true;
    }

    if (!authEnabled || !auth) {
        loaderAuthReady = true;
        currentUser = null;
        isAdmin = false;
        stopPendingSubscription();
        renderPendingList([]);
        updateAdminUi();
        tryHideLoader();
        return;
    }

    auth.onAuthStateChanged((user) => {
        setLoaderProgress(80);
        loaderAuthReady = true;
        currentUser = user;

        if (!user) {
            isAdmin = false;
            stopPendingSubscription();
            renderPendingList([]);
            updateAdminUi();
            adminSignInAttempted = false;
            return;
        }

        if (adminUids.includes(user.uid)) {
            isAdmin = true;
            if (backendEnabled) startPendingSubscription();
        } else {
            isAdmin = false;
            stopPendingSubscription();
            renderPendingList([]);
            if (adminSignInAttempted) {
                showNotice("Сиз админ боло албайсыз", "error");
            }
        }

        adminSignInAttempted = false;
        updateAdminUi();
        tryHideLoader();
    });
}

const handleDown = (x, y) => {
    clearTimeout(viewportAnimationTimer);
    setViewportTransition(0);
    dragging = true;
    startX = x - posX;
    startY = y - posY;
};

const handleMove = (x, y) => {
    if (!dragging) return;
    posX = x - startX;
    posY = y - startY;
    scheduleUpdateTransform();
};

function getTouchDistance(t1, t2) {
    const dx = t1.clientX - t2.clientX;
    const dy = t1.clientY - t2.clientY;
    return Math.hypot(dx, dy);
}

function getTouchMidpoint(t1, t2) {
    return {
        x: (t1.clientX + t2.clientX) / 2,
        y: (t1.clientY + t2.clientY) / 2
    };
}

// schedule the updateTransform call in next animation frame
function scheduleUpdateTransform() {
    if (transformScheduled) return;
    transformScheduled = true;
    requestAnimationFrame(() => {
        updateTransform();
        transformScheduled = false;
    });
}

const handleUp = () => {
    dragging = false;
};

function isUiOverlayTarget(target) {
    if (!target || typeof target.closest !== "function") return false;
    return Boolean(
        target.closest(".modal-content")
        || target.closest("#bio-overlay")
        || target.closest(".bio-modal")
        || target.closest(".biography-section")
        || target.closest("#sidebar-overlay")
        || target.closest("#mobile-sidebar")
        || target.closest(".sidebar-content")
    );
}

function hasClosest(target, selector) {
    return Boolean(target && typeof target.closest === "function" && target.closest(selector));
}

// lazy loader: inserts firebase scripts and initializes backend once
function loadFirebase() {
    if (firebaseLoadPromise) return firebaseLoadPromise;
    firebaseLoadPromise = new Promise((resolve, reject) => {
        let loaded = 0;
        FIREBASE_CDN_URLS.forEach((url) => {
            const existingScript = document.querySelector(`script[src="${url}"]`);
            if (existingScript) {
                loaded += 1;
                if (loaded === FIREBASE_CDN_URLS.length) {
                    if (!firebaseInitDone) {
                        firebaseInitDone = true;
                        initBackend();
                    }
                    resolve();
                }
                return;
            }
            const s = document.createElement("script");
            s.src = url;
            s.async = true;
            s.defer = true;
            s.onload = () => {
                loaded += 1;
                if (loaded === FIREBASE_CDN_URLS.length) {
                    // after all libs are available, initialize
                    if (!firebaseInitDone) {
                        firebaseInitDone = true;
                        initBackend();
                    }
                    resolve();
                }
            };
            s.onerror = (e) => reject(new Error("Failed to load " + url));
            document.head.appendChild(s);
        });
    });
    return firebaseLoadPromise;
}

function toggleBranch(nodeId) {
    const node = familyData.find((n) => n.id === nodeId);
    if (!node) return;

    const children = familyData.filter((n) => n.parentId === nodeId);
    if (children.length === 0) return;

    node.expanded = !node.expanded;
    render();

    if (node.expanded) {
        // remember current scale so we can restore when collapsing
        nodeZoomMemory.set(node.id, scale);
        // after layout has updated, zoom out/in to fit all direct children
        setTimeout(() => {
            centerViewOnExpandedChildren(node, {
                animate: true,
                duration: 460,
                allowZoomIn: true
            });
        }, 200);
    } else {
        setTimeout(() => {
            const savedScale = nodeZoomMemory.get(node.id);
            if (typeof savedScale === "number" && Number.isFinite(savedScale)) {
                const maxScale = window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT ? 2.2 : 3;
                scale = Math.min(Math.max(savedScale, 0.1), maxScale);
            }
            nodeZoomMemory.delete(node.id);

            const liveNode = familyData.find((n) => n.id === nodeId);
            if (!liveNode) return;
            centerViewOnNode(liveNode, {
                animate: true,
                duration: 460
            });
        }, 200);
    }

    if (!backendEnabled) persistApprovedLocal();
}

window.openModal = openModal;
window.closeModal = closeModal;
window.saveNewMember = saveNewMember;
window.resetView = resetView;
window.toggleAdminPanel = toggleAdminPanel;
window.adminSignIn = adminSignIn;
window.adminSignOut = adminSignOut;
window.approvePending = approvePending;
window.rejectPending = rejectPending;
window.openEditModal = openEditModal;
window.deleteMember = deleteMember;
window.saveMemberAction = saveMemberAction;
window.resetTree = resetTree;
window.quickShareSite = quickShareSite;
window.centerOnRootPerson = centerOnRootPerson;
