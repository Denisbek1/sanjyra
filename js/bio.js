const BIOGRAPHY_BASE_PATH = "biography/";
const biographyCache = new Map();
let biographyRequestToken = 0;

function normalizeBiographyText(markdownText) {
    if (!markdownText) return getDefaultBio();

    return String(markdownText)
        .replace(/\r\n/g, "\n")
        .replace(/^#{1,6}\s*/gm, "")
        .trim() || getDefaultBio();
}

async function fetchBiographyText(filename) {
    if (!filename) return getDefaultBio();
    if (biographyCache.has(filename)) return biographyCache.get(filename);

    const response = await fetch(`${BIOGRAPHY_BASE_PATH}${encodeURIComponent(filename)}`, {
        cache: "no-cache"
    });

    if (!response.ok) {
        throw new Error(`Biography request failed: ${response.status}`);
    }

    const text = normalizeBiographyText(await response.text());
    biographyCache.set(filename, text);
    return text;
}

async function resolveBiographyText(node) {
    if (!node || !node.bio) return getDefaultBio(node);
    if (!/\.md$/i.test(node.bio)) return String(node.bio).trim() || getDefaultBio(node);

    try {
        return await fetchBiographyText(node.bio);
    } catch (error) {
        return getDefaultBio(node);
    }
}

function openFullLineageModal() {
    const modal = document.getElementById("bio-overlay");
    const titleEl = document.getElementById("bio-modal-title");
    const subtitleEl = document.getElementById("bio-modal-subtitle");
    const photoEl = document.getElementById("bio-modal-photo");
    const textEl = document.getElementById("bio-modal-text");
    const ancestorsEl = document.getElementById("bio-modal-ancestors");
    const structuredEl = document.getElementById("bio-modal-structured");
    const sectionTitleEl = document.querySelector("#sanjyra-modal .bio-section-title");
    if (!modal || !titleEl || !subtitleEl || !photoEl || !textEl || !ancestorsEl || !structuredEl || !sectionTitleEl) return;

    titleEl.textContent = "Кыргыз санжырасы";
    subtitleEl.textContent = "";
    subtitleEl.style.display = "none";
    photoEl.style.display = "none";
    sectionTitleEl.style.display = "none";
    textEl.style.display = "none";
    ancestorsEl.style.display = "none";
    ancestorsEl.textContent = "";
    structuredEl.innerHTML = FULL_LINEAGE_MODAL_HTML;
    renderLineageTimeline();
    structuredEl.style.display = "block";
    modal.style.display = "flex";
}

async function openBioModal(memberId) {
    const node = familyData.find((item) => item.id === memberId);
    if (!node || !canShowLifeStory(node)) return;

    const modal = document.getElementById("bio-overlay");
    const titleEl = document.getElementById("bio-modal-title");
    const photoEl = document.getElementById("bio-modal-photo");
    const subtitleEl = document.getElementById("bio-modal-subtitle");
    const textEl = document.getElementById("bio-modal-text");
    const ancestorsEl = document.getElementById("bio-modal-ancestors");
    const structuredEl = document.getElementById("bio-modal-structured");
    const sectionTitleEl = document.querySelector("#sanjyra-modal .bio-section-title");
    if (!modal || !titleEl || !photoEl || !subtitleEl || !textEl || !ancestorsEl || !structuredEl || !sectionTitleEl) return;

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

    titleEl.textContent = node.name;
    sectionTitleEl.textContent = "Өмүр баяны";
    sectionTitleEl.style.display = "block";
    structuredEl.innerHTML = "";
    structuredEl.style.display = "none";
    photoEl.style.display = isRootChild ? "none" : "block";
    if (!isRootChild) {
        photoEl.src = photo;
        photoEl.alt = node.name;
    }
    subtitleEl.textContent = subtitleText;
    subtitleEl.style.display = subtitleText ? "block" : "none";
    textEl.style.display = "block";
    textEl.textContent = "Загрузка...";

    if (node.id === "root") {
        ancestorsEl.textContent = "Ата-тек: Адыгине → Кенчим → Жакшылык → Токобай → Карагене → Өмүрзак → Мамбет → Нурбай → Дүйшөбай → Кул → Абдраман";
        ancestorsEl.style.display = "block";
    } else {
        ancestorsEl.textContent = "";
        ancestorsEl.style.display = "none";
    }

    modal.style.display = "flex";

    const requestToken = ++biographyRequestToken;
    const biographyText = await resolveBiographyText(node);
    if (requestToken !== biographyRequestToken) return;

    textEl.textContent = biographyText;
}

function closeBioModal() {
    biographyRequestToken += 1;
    const modal = document.getElementById("bio-overlay");
    if (modal) modal.style.display = "none";
}

window.openBioModal = openBioModal;
window.openFullLineageModal = openFullLineageModal;
window.closeBioModal = closeBioModal;
