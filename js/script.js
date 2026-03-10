const seedData = [
    { id: "root", name: "Абдраман", bdate: "1938", gender: "male", partner: "Гүлай", partnerDate: "1940", bio: "", parentId: null, expanded: true },
    { id: "al", name: "Алайчы", bdate: "1958", gender: "male", partner: "Ширин", bio: "", parentId: "root", expanded: false },
    { id: "al1", name: "Тынчтыкбек (Мир)", bdate: "1981", parentId: "al", expanded: false },
    { id: "al1_1", name: "Кантемир", bdate: "", parentId: "al1", expanded: false },
    { id: "al1_2", name: "Ак моор", bdate: "", parentId: "al1", expanded: false },
    { id: "al_aidana", name: "Айдана", bdate: "1982", parentId: "al", expanded: false },
    { id: "al_roza", name: "Роза", bdate: "1985", parentId: "al", expanded: false },
    { id: "al_gulnur", name: "Гулнур", bdate: "1987", parentId: "al", expanded: false },
    { id: "al_samara", name: "Самара", bdate: "1989", parentId: "al", expanded: false },
    { id: "al2", name: "Марат", bdate: "1990", parentId: "al", expanded: false },
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
    { id: "su", name: "Суйорбек", bdate: "1980", gender: "male", partner: "Нурпери", bio: "", parentId: "root", expanded: false },
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

const rootPhoto = "assets/abdraman.jpeg";
const malePhoto = "assets/kalpak.jpeg";
const femalePhoto = "assets/yal.jpeg";
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
const MOBILE_LAYOUT_BREAKPOINT = 768;
const DESKTOP_HORIZONTAL_SPACING = 530;
const MOBILE_HORIZONTAL_SPACING = 360;
const NODE_HEIGHT = 150;
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
let ancestryExpanded = false;
let currentSearchQuery = "";
let searchPanelOpen = false;

let backendEnabled = false;
let db = null;
let auth = null;
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

    const loader = document.getElementById("app-loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                if (loader && typeof loader.remove === "function") {
                    loader.remove();
                }
            }, 400);
        }, 120);
    }

    if (document.body) {
        document.body.classList.remove("loading");
    }
}

function tryHideLoader() {
    const ready = loaderUiReady && loaderDataReady && (!backendEnabled || loaderAuthReady);
    if (ready) hideLoader();
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

function getDefaultBio(node) {
    if (!node) return "";
    return "Өмүр баян азырынча кошула элек.";
}

function normalizeSearchText(value) {
    return String(value || "").trim().toLowerCase();
}

function isMobileLayout() {
    return window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT;
}

function getSearchPanelHeight() {
    return searchPanelOpen ? Math.min(320, Math.round(window.innerHeight * 0.24)) : 0;
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

function buildSearchContext() {
    const query = normalizeSearchText(currentSearchQuery);
    if (!query) return null;

    const nodeById = new Map(familyData.map((node) => [node.id, node]));
    const visibleIds = new Set();
    const expandedIds = new Set();
    let matchedCount = 0;

    familyData.forEach((node) => {
        if (!normalizeSearchText(node.name).includes(query)) return;
        matchedCount += 1;

        let current = node;
        while (current) {
            visibleIds.add(current.id);
            if (current.parentId) expandedIds.add(current.parentId);
            current = current.parentId ? (nodeById.get(current.parentId) || null) : null;
        }
    });

    return { query, visibleIds, expandedIds, matchedCount };
}

function getSearchMatches(limit) {
    const query = normalizeSearchText(currentSearchQuery);
    if (!query) return [];

    const matches = familyData.filter((node) => normalizeSearchText(node.name).includes(query));
    return typeof limit === "number" ? matches.slice(0, limit) : matches;
}

function renderSearchResults() {
    const host = document.getElementById("search-results");
    if (!host) return;

    if (!searchPanelOpen) {
        host.innerHTML = "";
        return;
    }

    const matches = getSearchMatches();
    if (!currentSearchQuery) {
        host.innerHTML = '<div class="search-results-empty">Атын жазыңыз.</div>';
        return;
    }

    if (!matches.length) {
        host.innerHTML = `<div class="search-results-empty">"${currentSearchQuery}" боюнча эч ким табылган жок.</div>`;
        return;
    }

    host.innerHTML = matches.map((node) => `
        <button type="button" class="search-result-item" onclick="selectSearchResult('${node.id}')">
            <span class="search-result-item-name">${node.name}</span>
            <span class="search-result-item-meta">${getParentDisplayName(node.parentId, "")}${node.bdate ? ` • ${node.bdate}` : ""}</span>
        </button>
    `).join("");
}

function syncSearchPanelState() {
    const searchBar = document.getElementById("top-search-bar");
    if (!searchBar) return;
    searchBar.classList.toggle("is-open", searchPanelOpen);
    renderSearchResults();
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

function initSearchInput() {
    const searchInput = document.getElementById("personSearch");
    if (!searchInput || searchInput.dataset.bound === "true") return;

    searchInput.dataset.bound = "true";
    searchInput.addEventListener("focus", () => {
        searchPanelOpen = true;
        syncSearchPanelState();
        resetView();
    });

    searchInput.addEventListener("input", (event) => {
        const nextQuery = normalizeSearchText(event.target.value);
        const wasActive = Boolean(currentSearchQuery);
        currentSearchQuery = nextQuery;
        if (Boolean(nextQuery) !== wasActive) resetView();
        render();
        renderSearchResults();
    });

    searchInput.addEventListener("keydown", (event) => {
        if (event.key !== "Escape") return;
        event.target.value = "";
        currentSearchQuery = "";
        searchPanelOpen = false;
        syncSearchPanelState();
        resetView();
        render();
    });
}

function closeSearchPanel() {
    searchPanelOpen = false;
    syncSearchPanelState();
    resetView();
    if (!rootNode) return;
}

function bindStaticUiEvents() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openSidebar);

    const searchCloseBtn = document.getElementById("search-close-btn");
    if (searchCloseBtn) searchCloseBtn.addEventListener("click", closeSearchPanel);

    const homeBtn = document.getElementById("home-btn");
    if (homeBtn) homeBtn.addEventListener("click", resetView);

    const resetTreeBtn = document.getElementById("reset-tree-btn");
    if (resetTreeBtn) resetTreeBtn.addEventListener("click", resetTree);

    const shareBtn = document.getElementById("share-btn");
    if (shareBtn) shareBtn.addEventListener("click", quickShareSite);

    const sidebarOverlay = document.getElementById("sidebar-overlay");
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", (event) => {
            if (event.target === sidebarOverlay) closeSidebar();
        });
    }

    const mobileSidebar = document.getElementById("mobile-sidebar");
    if (mobileSidebar) mobileSidebar.addEventListener("click", (event) => event.stopPropagation());

    const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
    if (sidebarCloseBtn) sidebarCloseBtn.addEventListener("click", closeSidebar);

    const sidebarItemGoal = document.getElementById("sidebar-item-goal");
    if (sidebarItemGoal) sidebarItemGoal.addEventListener("click", () => openSidebarSection("goal"));

    const sidebarItemShare = document.getElementById("sidebar-item-share");
    if (sidebarItemShare) sidebarItemShare.addEventListener("click", () => openSidebarSection("share"));

    const sidebarItemContact = document.getElementById("sidebar-item-contact");
    if (sidebarItemContact) sidebarItemContact.addEventListener("click", () => openSidebarSection("contact"));

    const copySiteLinkBtn = document.getElementById("copy-site-link-btn");
    if (copySiteLinkBtn) copySiteLinkBtn.addEventListener("click", copySiteLink);

    const adminSignInBtn = document.getElementById("admin-signin-btn");
    if (adminSignInBtn) adminSignInBtn.addEventListener("click", adminSignIn);

    const adminLogoutBtn = document.getElementById("admin-logout-btn");
    if (adminLogoutBtn) adminLogoutBtn.addEventListener("click", adminSignOut);

    const modalOverlay = document.getElementById("modal-overlay");
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (event) => {
            if (event.target === modalOverlay) closeModal();
        });
    }

    const memberModalContent = document.getElementById("member-modal-content");
    if (memberModalContent) memberModalContent.addEventListener("click", (event) => event.stopPropagation());

    const memberModalSaveBtn = document.getElementById("member-modal-save-btn");
    if (memberModalSaveBtn) memberModalSaveBtn.addEventListener("click", saveMemberAction);

    const memberModalCancelBtn = document.getElementById("member-modal-cancel-btn");
    if (memberModalCancelBtn) memberModalCancelBtn.addEventListener("click", closeModal);

    const newDateInput = document.getElementById("new-date");
    if (newDateInput) {
        newDateInput.addEventListener("input", () => {
            newDateInput.value = newDateInput.value.replace(/[^0-9]/g, "");
        });
    }

    const bioOverlay = document.getElementById("bio-overlay");
    if (bioOverlay) {
        bioOverlay.addEventListener("click", (event) => {
            if (event.target === bioOverlay) closeBioModal();
        });
    }

    const bioModalShell = document.getElementById("bio-modal-shell");
    if (bioModalShell) bioModalShell.addEventListener("click", (event) => event.stopPropagation());

    const bioCloseBtn = document.getElementById("bio-close-btn");
    if (bioCloseBtn) bioCloseBtn.addEventListener("click", closeBioModal);
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
        duration = VIEWPORT_ANIMATION_MS
    } = options;

    const directChildren = getTreeChildren(node.id, null);
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

    scale = Math.min(Math.max(Math.min(scale, fitScale), 0.1), maxScale);

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
        scaleOverride = null
    } = options;

    const rootNode = familyData.find((node) => node.name === "Абдраман") || familyData.find((node) => node.id === "root");
    if (!rootNode) return;

    if (typeof scaleOverride === "number" && Number.isFinite(scaleOverride)) {
        const maxScale = window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT ? 2.2 : 3;
        scale = Math.min(Math.max(scaleOverride, 0.1), maxScale);
    }

    centerViewOnNode(rootNode, { animate, duration });
}

function focusInitialNode() {
    centerOnRootPerson({
        animate: true,
        duration: VIEWPORT_ANIMATION_MS,
        scaleOverride: Math.min(Math.max(INITIAL_FOCUS_SCALE, 1.5), 2.4)
    });
}

function selectSearchResult(nodeId) {
    const node = familyData.find((item) => item.id === nodeId);
    if (!node) return;

    currentSearchQuery = normalizeSearchText(node.name);
    const searchInput = document.getElementById("personSearch");
    if (searchInput) searchInput.value = node.name;
    render();
    searchPanelOpen = false;
    syncSearchPanelState();
    centerViewOnNode(node);
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
    if (closeBtn) closeBtn.addEventListener("click", close);
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
        return JSON.parse(raw);
    } catch (error) {
        return fallback;
    }
}

function saveLocalJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
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

function openModal(parentId) {
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
    const bioInput = document.getElementById("new-bio");
    const bioGroup = document.getElementById("member-bio-group");
    if (!overlay || !titleEl || !parentNameEl || !confirmTextEl || !saveBtn || !nameInput || !dateInput || !genderInput || !bioInput || !bioGroup) return;

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
    bioInput.value = "";
    bioGroup.style.display = "none";
}

function closeModal() {
    const overlay = document.getElementById("modal-overlay");
    const nameInput = document.getElementById("new-name");
    const dateInput = document.getElementById("new-date");
    const genderInput = document.getElementById("new-gender");
    const bioInput = document.getElementById("new-bio");
    const bioGroup = document.getElementById("member-bio-group");
    const titleEl = document.getElementById("member-modal-title");
    const parentNameEl = document.getElementById("member-modal-parent-name");
    const confirmTextEl = document.getElementById("member-modal-confirm-text");
    if (!overlay || !nameInput || !dateInput || !genderInput || !bioInput || !bioGroup || !titleEl || !parentNameEl || !confirmTextEl) return;

    overlay.style.display = "none";
    titleEl.style.display = "block";
    parentNameEl.style.display = "none";
    confirmTextEl.style.display = "none";
    parentNameEl.textContent = "";
    nameInput.value = "";
    dateInput.value = "";
    genderInput.value = "male";
    bioInput.value = "";
    bioGroup.style.display = "none";
    memberModalMode = "add";
    editMemberId = null;
}

function buildPendingPayload(name, date, gender, bio, parentId) {
    const parent = familyData.find((node) => node.id === parentId);
    return {
        name,
        year: date,
        bdate: date,
        gender,
        status: "pending",
        bio,
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
    const nameInput = document.getElementById("new-name");
    const dateInput = document.getElementById("new-date");
    const genderInput = document.getElementById("new-gender");
    const bioInput = document.getElementById("new-bio");
    if (!nameInput || !dateInput || !genderInput || !bioInput) return;

    const name = nameInput.value.trim();
    const date = dateInput.value.trim();
    const gender = genderInput.value;
    const bio = bioInput.value.trim();
    if (!name) return;

    const pendingPayload = buildPendingPayload(name, date, gender, bio, currentParentId);

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
    const bioInput = document.getElementById("new-bio");
    const bioGroup = document.getElementById("member-bio-group");
    const overlay = document.getElementById("modal-overlay");
    if (!titleEl || !parentNameEl || !confirmTextEl || !saveBtn || !nameInput || !dateInput || !genderInput || !bioInput || !bioGroup || !overlay) return;

    titleEl.style.display = "block";
    parentNameEl.style.display = "none";
    confirmTextEl.style.display = "none";
    parentNameEl.textContent = "";
    titleEl.textContent = "Адамды өзгөртүү";
    saveBtn.textContent = "Сактоо";
    nameInput.value = node.name || "";
    dateInput.value = node.bdate || "";
    genderInput.value = node.gender || "male";
    bioInput.value = node.bio || "";
    bioGroup.style.display = canShowLifeStory(node) ? "block" : "none";
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
    const bioInput = document.getElementById("new-bio");
    if (!nameInput || !dateInput || !genderInput || !bioInput) return;

    const name = nameInput.value.trim();
    const date = dateInput.value.trim();
    const gender = genderInput.value;
    const bio = canShowLifeStory(node) ? bioInput.value.trim() : node.bio;
    if (!name) return;

    node.name = name;
    node.bdate = date;
    node.gender = gender;
    node.bio = bio;

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

function canAddToNode(node) {
    if (!node) return false;
    if (node.id === "root") return false;
    if (node.parentId === "root") return false;
    return true;
}

function canShowLifeStory(node) {
    if (!node) return false;
    return node.id === "root" || node.parentId === "root";
}

function getLeafVerticalSpacing(node) {
    if (!node) return 180;
    if (node.id === "root") return 180;
    if (node.parentId === "root") return 154;
    return 120;
}

function getNodeHeight(node) {
    if (!node) return NODE_HEIGHT;
    if (node.id === "root") return NODE_HEIGHT;
    if (node.parentId === "root") return 130;
    return 92;
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

function render() {
    const searchContext = buildSearchContext();
    const { nodeWidth, ancestryGap } = getTreeMetrics();
    layout("root", 0, 0, searchContext);
    const nodesLayer = document.getElementById("nodes-layer");
    const svg = document.getElementById("tree-svg");
    if (!nodesLayer || !svg) return;
    nodesLayer.innerHTML = "";
    svg.innerHTML = "";

    if (searchContext && searchContext.matchedCount === 0) {
        const empty = document.createElement("div");
        empty.className = "search-empty";
        empty.textContent = `\"${currentSearchQuery}\" боюнча эч ким табылган жок.`;
        nodesLayer.appendChild(empty);
        updateTransform();
        return;
    }

    familyData.forEach((n) => {
        if (!isVisible(n, searchContext)) return;

        if (n.parentId) {
            const p = familyData.find(x => x.id === n.parentId);

            if (p && isNodeExpanded(p, searchContext)) {
                const x1 = p.x + getNodeWidth(p);
                const y1 = getEdgeSourceY(p, n.id, searchContext);

                const x2 = n.x;
                const y2 = n.y + (getNodeHeight(n) / 2);

                appendConnector(svg, x1, y1, x2, y2, n.branchColor);
            }
        }

        const isRootCard = n.id === "root";
        const isRootChild = n.parentId === "root";
        const isCompactDescendant = !isRootCard && !isRootChild;

        const el = document.createElement("div");
        el.className = `node-container person-card ${isRootCard ? "node-root" : ""} ${isRootChild ? "node-root-child" : ""} ${isCompactDescendant ? "node-compact-descendant" : ""} ${isNodeExpanded(n, searchContext) ? "is-expanded" : ""}`;
        el.style.left = n.x + "px";
        el.style.top = n.y + "px";
        el.style.height = getNodeHeight(n) + "px";
        el.style.setProperty("--branch-color", n.branchColor || "transparent");
        el.dataset.personName = n.name || "";

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
            <button class="add-plus add-plus-inline" onclick="event.stopPropagation(); openModal('${n.id}')" title="Кошуу">
                <span class="add-plus-icon">+</span>
                <span class="add-plus-text">Кошуу</span>
            </button>
        ` : "";

        const lifeStoryBtn = canShowLifeStory(n)
            ? `<button class="bio-btn bio-btn-inline" onclick="event.stopPropagation(); openBioModal('${n.id}')">Өмүр баяны</button>`
            : "";
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
                    <button class="node-icon-btn" onclick="event.stopPropagation(); openEditModal('${n.id}')" title="Өзгөртүү"><i class="fas fa-pen"></i></button>
                    ${n.id !== "root" ? `<button class="node-icon-btn node-icon-btn-danger" onclick="event.stopPropagation(); deleteMember('${n.id}')" title="Өчүрүү"><i class="fas fa-trash"></i></button>` : ""}
                </div>
            </div>
        ` : "";

        el.innerHTML = `
            <img src="${mainPhoto}" class="profile-img" loading="lazy" />
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

        if (n.id === "root") {
            const rootAvatar = el.querySelector(".profile-img");
            if (rootAvatar) {
                rootAvatar.addEventListener("click", (event) => {
                    event.stopPropagation();
                    openBioModal("root");
                });
            }
        }

        el.onclick = () => {
            if (searchContext) return;
            if (hasChildren(n.id)) {
                const nextExpanded = !n.expanded;
                n.expanded = nextExpanded;
                render();
                if (nextExpanded) {
                    centerViewOnExpandedChildren(n, {
                        animate: true,
                        duration: 460
                    });
                }
                if (!backendEnabled) persistApprovedLocal();
            }
        };

        nodesLayer.appendChild(el);

        if (n.id === "root" && !searchContext) {
            const ancestryX = n.x - (nodeWidth + ancestryGap);
            const ancestryY = n.y;

            appendAncestryBridge(svg, ancestryX + nodeWidth, ancestryY + (getNodeHeight(n) / 2), n.x);

            const ancestryEl = document.createElement("div");
            ancestryEl.className = "node-container node-ancestry-card";
            ancestryEl.style.left = ancestryX + "px";
            ancestryEl.style.top = ancestryY + "px";
            ancestryEl.style.height = ancestryExpanded ? "auto" : NODE_HEIGHT + "px";
            ancestryEl.innerHTML = ancestryExpanded ? `
                <div class="ancestry-shell">
                    <div class="ancestry-head">
                        <div class="ancestry-head-icon"><img src="assets/atatek.png" alt="Ата-тек" loading="lazy"></div>
                        <div class="ancestry-head-copy">
                            <div class="ancestry-head-title">Ата-тек жөнүндө</div>
                            <div class="ancestry-head-sub">Негизги муундардын тарыхы</div>
                        </div>
                        <div class="ancestry-head-toggle"><i class="fas fa-chevron-up"></i></div>
                    </div>
                    <div class="ancestry-body">
                        <div class="ancestry-pill-lineage">
                            ${rootAncestors.map((name, index) => `
                                <span class="ancestry-pill">${index + 1}. ${name}</span>
                            `).join("")}
                        </div>
                        <div class="ancestry-inline-text ancestry-body-text">${ancestryAboutText}</div>
                    </div>
                </div>
            ` : `
                <div class="ancestry-shell">
                    <div class="ancestry-head">
                        <div class="ancestry-head-icon"><img src="assets/atatek.png" alt="Ата-тек" loading="lazy"></div>
                        <div class="ancestry-head-copy">
                            <div class="ancestry-head-title">Ата-тек</div>
                            <div class="ancestry-head-sub">Кеңири көрүү үчүн басыңыз</div>
                        </div>
                        <div class="ancestry-head-toggle"><i class="fas fa-chevron-down"></i></div>
                    </div>
                </div>
            `;
            ancestryEl.onclick = () => {
                ancestryExpanded = !ancestryExpanded;
                render();
            };
            nodesLayer.appendChild(ancestryEl);
        }

    });

    updateTransform();
    renderSearchResults();
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
        duration: 460,
        scaleOverride: isMobileLayout() ? 1.02 : 0.9
    });
}

function resetTree() {
    familyData.forEach((node) => {
        node.expanded = false;
    });
    // Reset must keep only root branch open (root + 10 sons).
    const rootNode = familyData.find((node) => node.id === "root");
    if (rootNode) rootNode.expanded = true;

    ancestryExpanded = false;
    currentSearchQuery = "";

    const searchInput = document.getElementById("personSearch");
    if (searchInput) searchInput.value = "";
    searchPanelOpen = false;
    syncSearchPanelState();

    closeModal();
    closeBioModal();

    if (!backendEnabled) persistApprovedLocal();
    render();
    // Slightly wider framing than Home so all 10 sons fit comfortably.
    centerOnRootPerson({
        animate: true,
        duration: 460,
        scaleOverride: isMobileLayout() ? 0.96 : 0.88
    });
}

function updateTransform() {
    const treeContainer = document.getElementById("tree-container");
    if (!treeContainer) return;
    treeContainer.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
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

    if (backendEnabled) {
        if (currentUser) {
            authBlock.style.display = isAdmin ? "none" : "block";
            logoutBtn.style.display = "block";
            pendingWrap.style.display = isAdmin ? "flex" : "none";
            if (pendingTitle) pendingTitle.style.display = isAdmin ? "block" : "none";
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
                <button class="btn-save" onclick="approvePending('${item.id}')">Сохранить</button>
                <button class="btn-save bg-gray-600 text-white" onclick="rejectPending('${item.id}')">Удалить</button>
            </div>
        </div>
    `).join("");
}

async function adminSignIn() {
    if (!backendEnabled || !auth) {
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
    if (backendEnabled && auth && currentUser) {
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
    if (!window.firebase || !appConfig.firebase) {
        backendEnabled = false;
        updateAdminUi();
        setLoaderProgress(100);
        loaderAuthReady = true;
        loaderDataReady = true;
        tryHideLoader();
        return;
    }

    backendEnabled = true;
    setLoaderProgress(45);
    const app = firebase.initializeApp(appConfig.firebase);
    db = app.firestore();
    auth = app.auth();
    setLoaderProgress(60);

    startApprovedSubscription();

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
            startPendingSubscription();
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
    updateTransform();
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
        || target.closest("#top-search-bar")
    );
}

function hasClosest(target, selector) {
    return Boolean(target && typeof target.closest === "function" && target.closest(selector));
}

document.addEventListener("mousedown", (e) => {
    if (!hasClosest(e.target, ".node-container")
        && !hasClosest(e.target, "#home-btn")
        && !hasClosest(e.target, "#admin-btn")
        && !hasClosest(e.target, "#reset-tree-btn")
        && !hasClosest(e.target, "#share-btn")
        && !hasClosest(e.target, "#admin-panel")
        && !isUiOverlayTarget(e.target)) {
        handleDown(e.clientX, e.clientY);
    }
});
document.addEventListener("mousemove", (e) => handleMove(e.clientX, e.clientY));
document.addEventListener("mouseup", handleUp);

document.addEventListener("touchstart", (e) => {
    if (isUiOverlayTarget(e.target)) return;

    if (e.touches.length === 2) {
        e.preventDefault();
        clearTimeout(viewportAnimationTimer);
        setViewportTransition(0);
        isPinching = true;
        dragging = false;
        pinchStartDistance = getTouchDistance(e.touches[0], e.touches[1]);
        pinchStartScale = scale;
        pinchStartPosX = posX;
        pinchStartPosY = posY;
        return;
    }

    if (e.touches.length === 1
        && !hasClosest(e.target, ".node-container")
        && !hasClosest(e.target, "#admin-panel")
        && !hasClosest(e.target, "#reset-tree-btn")
        && !hasClosest(e.target, "#share-btn")
        && !isUiOverlayTarget(e.target)) {
        handleDown(e.touches[0].clientX, e.touches[0].clientY);
    }
}, { passive: false });

document.addEventListener("touchmove", (e) => {
    if (isPinching && e.touches.length === 2) {
        e.preventDefault();
        const touchA = e.touches[0];
        const touchB = e.touches[1];
        const currentDistance = getTouchDistance(touchA, touchB);
        if (pinchStartDistance > 0) {
            const maxScale = window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT ? 2.2 : 3;
            const nextScale = Math.min(Math.max(pinchStartScale * (currentDistance / pinchStartDistance), 0.1), maxScale);
            const midpoint = getTouchMidpoint(touchA, touchB);
            const worldX = (midpoint.x - pinchStartPosX) / pinchStartScale;
            const worldY = (midpoint.y - pinchStartPosY) / pinchStartScale;

            scale = nextScale;
            posX = midpoint.x - (worldX * scale);
            posY = midpoint.y - (worldY * scale);
            updateTransform();
        }
        return;
    }

    if (!dragging) return;
    e.preventDefault();
    handleMove(e.touches[0].clientX, e.touches[0].clientY);
}, { passive: false });

document.addEventListener("touchend", (e) => {
    if (isPinching && e.touches.length < 2) {
        isPinching = false;
        pinchStartDistance = 0;
        pinchStartScale = scale;
        pinchStartPosX = posX;
        pinchStartPosY = posY;

        if (e.touches.length === 1 && !isUiOverlayTarget(e.target)) {
            handleDown(e.touches[0].clientX, e.touches[0].clientY);
            return;
        }
    }
    handleUp();
});
document.addEventListener("touchcancel", () => {
    isPinching = false;
    pinchStartDistance = 0;
    handleUp();
});
document.addEventListener("wheel", (e) => {
    e.preventDefault();
    clearTimeout(viewportAnimationTimer);
    setViewportTransition(0);
    const maxScale = window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT ? 2.2 : 3;
    scale = Math.min(Math.max(scale * (e.deltaY > 0 ? 0.9 : 1.1), 0.1), maxScale);
    updateTransform();
}, { passive: false });

document.addEventListener("DOMContentLoaded", () => {
    if (document.body) {
        document.body.classList.add("loading");
    }
    setLoaderProgress(0, true);

    bindStaticUiEvents();
    initSearchInput();
    initSidebarContent();
    loadInitialLocalData();
    syncSearchPanelState();
    render();
    centerOnRootPerson({
        animate: true,
        duration: VIEWPORT_ANIMATION_MS,
        scaleOverride: Math.min(Math.max(INITIAL_FOCUS_SCALE, 1.5), 2.4)
    });
    setLoaderProgress(30);
    initBackend();
    updateAdminUi();
    renderPendingList();
    loaderUiReady = true;
    setLoaderProgress(40);
    tryHideLoader();
});

window.addEventListener("resize", () => {
    syncSearchPanelState();
    render();
    resetView();
});

function openBioModal(memberId) {
    const node = familyData.find((n) => n.id === memberId);
    if (!node) return;
    if (!canShowLifeStory(node)) return;
    const modal = document.getElementById("bio-overlay");
    if (!modal) return;
    const photoEl = document.getElementById("bio-modal-photo");
    const subtitleEl = document.getElementById("bio-modal-subtitle");
    const textEl = document.getElementById("bio-modal-text");
    const ancestors = document.getElementById("bio-modal-ancestors");
    if (!photoEl || !subtitleEl || !textEl || !ancestors) return;

    const photo = node.id === "root"
        ? rootPhoto
        : (node.gender === "female" ? femalePhoto : (node.gender === "male" ? malePhoto : getGenderPhoto(node.name)));
    const isRootChild = node.parentId === "root" && node.id !== "root";
    let subtitleText = "";
    if (node.id === "root") {
        subtitleText = "Абдраман ата 1938 жыл\nГүлай 1940";
    } else if (isRootChild) {
        const partnerDate = node.partnerDate ? ` ${node.partnerDate}-жыл` : "";
        subtitleText = node.partner
            ? `${node.gender === "female" ? "Жолдошу" : "Жубайы"}: ${node.partner}${partnerDate}`
            : "";
    } else {
        const subtitleParts = [];
        if (node.bdate) subtitleParts.push(`${node.bdate}-жыл`);
        if (node.partner) {
            const partnerDate = node.partnerDate ? ` ${node.partnerDate}-жыл` : "";
            subtitleParts.push(`${node.gender === "female" ? "Жолдошу" : "Жубайы"}: ${node.partner}${partnerDate}`);
        }
        subtitleText = subtitleParts.join("\n");
    }

    const titleEl = document.getElementById("bio-modal-title");
    if (!titleEl) return;
    titleEl.textContent = node.name;
    photoEl.style.display = isRootChild ? "none" : "block";
    if (!isRootChild) {
        photoEl.src = photo;
        photoEl.alt = node.name;
    }
    subtitleEl.textContent = subtitleText;
    subtitleEl.style.display = subtitleText ? "block" : "none";
    const hasStructuredBiography = renderStructuredBiography(node.id);
    textEl.style.display = hasStructuredBiography ? "none" : "block";
    textEl.textContent = node.bio || getDefaultBio(node);

    if (node.id === "root") {
        ancestors.textContent = `Ата-тек: ${rootAncestors.join(" -> ")}`;
        ancestors.style.display = "block";
    } else {
        ancestors.textContent = "";
        ancestors.style.display = "none";
    }

    modal.style.display = "flex";
}

function closeBioModal() {
    const modal = document.getElementById("bio-overlay");
    if (modal) modal.style.display = "none";
}

function renderStructuredBiography(memberId) {
    const host = document.getElementById("bio-modal-structured");
    if (!host) return false;

    host.innerHTML = "";
    const payload = STRUCTURED_BIOGRAPHIES[memberId];
    if (!payload || !Array.isArray(payload.sections) || payload.sections.length === 0) {
        host.style.display = "none";
        return false;
    }

    payload.sections.forEach((section) => {
        const block = document.createElement("div");
        block.className = "bio-block";

        const title = document.createElement("h4");
        title.className = "bio-block-title";
        title.textContent = `${section.icon || ""} ${section.title || ""}`.trim();

        const text = document.createElement("p");
        text.className = "bio-block-text";
        text.textContent = section.text || "";

        block.appendChild(title);
        block.appendChild(text);
        host.appendChild(block);
    });

    host.style.display = "block";
    return true;
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
window.openBioModal = openBioModal;
window.closeBioModal = closeBioModal;
window.resetTree = resetTree;
window.quickShareSite = quickShareSite;
window.closeSearchPanel = closeSearchPanel;
window.selectSearchResult = selectSearchResult;
window.centerOnRootPerson = centerOnRootPerson;
