function addFastPressListener(element, handler) {
    if (!element) return;

    element.addEventListener("pointerup", (event) => {
        handler(event);
    });

    element.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        handler(event);
    });
}

const TAP_MOVE_PX = 18;
const TAP_MAX_DURATION_MS = 450;
const DRAG_START_PX = 12;

function isCardControlTarget(target) {
    if (!target || !target.closest) return false;
    const control = target.closest(".add-plus-inline, .bio-btn-inline, .node-icon-btn");
    return Boolean(control && control.contains(target));
}

function bindStaticUiEvents() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    addFastPressListener(mobileMenuBtn, openSidebar);

    const homeBtn = document.getElementById("home-btn");
    addFastPressListener(homeBtn, resetView);

    const resetTreeBtn = document.getElementById("reset-tree-btn");
    addFastPressListener(resetTreeBtn, resetTree);

    const shareBtn = document.getElementById("share-btn");
    addFastPressListener(shareBtn, quickShareSite);

    const sidebarOverlay = document.getElementById("sidebar-overlay");
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener("click", (event) => {
            if (event.target === sidebarOverlay) closeSidebar();
        });
    }

    const mobileSidebar = document.getElementById("mobile-sidebar");
    if (mobileSidebar) mobileSidebar.addEventListener("pointerdown", (event) => event.stopPropagation());

    const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
    addFastPressListener(sidebarCloseBtn, closeSidebar);

    const sidebarItemGoal = document.getElementById("sidebar-item-goal");
    addFastPressListener(sidebarItemGoal, () => openSidebarSection("goal"));

    const sidebarItemShare = document.getElementById("sidebar-item-share");
    addFastPressListener(sidebarItemShare, () => openSidebarSection("share"));

    const sidebarItemContact = document.getElementById("sidebar-item-contact");
    addFastPressListener(sidebarItemContact, () => openSidebarSection("contact"));

    const copySiteLinkBtn = document.getElementById("copy-site-link-btn");
    addFastPressListener(copySiteLinkBtn, copySiteLink);

    const adminSignInBtn = document.getElementById("admin-signin-btn");
    if (adminSignInBtn) {
        addFastPressListener(adminSignInBtn, async () => {
            await loadFirebase();
            adminSignIn();
        });
    }

    const adminLogoutBtn = document.getElementById("admin-logout-btn");
    addFastPressListener(adminLogoutBtn, adminSignOut);

    const pendingList = document.getElementById("pending-list");
    if (pendingList) {
        pendingList.addEventListener("pointerup", (event) => {
            const target = event.target && event.target.closest ? event.target.closest("[data-pending-action]") : null;
            if (!target) return;
            event.stopPropagation();
            const action = target.dataset.pendingAction;
            const pendingId = target.dataset.pendingId;
            if (!pendingId) return;
            if (action === "approve") approvePending(pendingId);
            if (action === "reject") rejectPending(pendingId);
        });
    }

    const modalOverlay = document.getElementById("modal-overlay");
    if (modalOverlay) {
        modalOverlay.addEventListener("click", (event) => {
            if (event.target === modalOverlay) closeModal();
        });
    }

    const memberModalContent = document.getElementById("member-modal-content");
    if (memberModalContent) memberModalContent.addEventListener("pointerdown", (event) => event.stopPropagation());

    const memberModalSaveBtn = document.getElementById("member-modal-save-btn");
    addFastPressListener(memberModalSaveBtn, saveMemberAction);

    const memberModalCancelBtn = document.getElementById("member-modal-cancel-btn");
    addFastPressListener(memberModalCancelBtn, closeModal);

    const newDateInput = document.getElementById("new-date");
    if (newDateInput) {
        newDateInput.addEventListener("input", () => {
            newDateInput.value = newDateInput.value.replace(/[^0-9]/g, "");
        });
        newDateInput.addEventListener("focus", () => {
            setTimeout(() => newDateInput.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
        });
    }

    const newNameInput = document.getElementById("new-name");
    if (newNameInput) {
        newNameInput.addEventListener("focus", () => {
            setTimeout(() => newNameInput.scrollIntoView({ behavior: "smooth", block: "center" }), 300);
        });
    }

    const bioOverlay = document.getElementById("bio-overlay");
    if (bioOverlay) {
        bioOverlay.addEventListener("click", (event) => {
            if (event.target === bioOverlay) closeBioModal();
        });
    }

    const bioModalShell = document.getElementById("sanjyra-modal");
    if (bioModalShell) bioModalShell.addEventListener("pointerdown", (event) => event.stopPropagation());

    const bioCloseBtn = document.getElementById("bio-close-btn");
    addFastPressListener(bioCloseBtn, closeBioModal);

    const nodesLayer = document.getElementById("nodes-layer");
    if (nodesLayer) {
        let activePointer = null;

        nodesLayer.addEventListener("pointerdown", (event) => {
            if (isPinching) return;
            const isControl = isCardControlTarget(event.target);
            activePointer = {
                id: event.pointerId,
                startX: event.clientX,
                startY: event.clientY,
                startTime: Date.now(),
                allowDrag: !isControl,
                dragging: false,
                moved: false
            };
        });

        nodesLayer.addEventListener("pointermove", (event) => {
            if (activePointer && event.pointerId === activePointer.id) {
                const dx = event.clientX - activePointer.startX;
                const dy = event.clientY - activePointer.startY;
                const dist = Math.hypot(dx, dy);
                if (dist > TAP_MOVE_PX) activePointer.moved = true;
                if (activePointer.allowDrag && dist > DRAG_START_PX) {
                    activePointer.dragging = true;
                    handleMove(event.clientX, event.clientY);
                }
            }
        });

        nodesLayer.addEventListener("pointerup", (event) => {
            if (activePointer && event.pointerId === activePointer.id) {
                const duration = Date.now() - activePointer.startTime;
                const dx = event.clientX - activePointer.startX;
                const dy = event.clientY - activePointer.startY;
                const dist = Math.hypot(dx, dy);
                const isTap = (!activePointer.moved && dist <= TAP_MOVE_PX)
                    || (dist <= TAP_MOVE_PX * 1.4 && duration <= TAP_MAX_DURATION_MS);
                if (activePointer.dragging) {
                    handleUp();
                }
                if (isTap && Date.now() - lastCardTouchToggleAt > 420) {
                    const toggled = handleCardToggleFromEventTarget(event.target);
                    if (toggled) {
                        lastCardTouchToggleAt = Date.now();
                        activePointer = null;
                        return;
                    }
                }
            }

            const actionTarget = event.target && event.target.closest ? event.target.closest("[data-fast-action]") : null;
            if (actionTarget) {
                event.stopPropagation();
                const action = actionTarget.dataset.fastAction;
                const nodeId = actionTarget.dataset.nodeId;
                if (action === "add" && nodeId) openModal(nodeId);
                if (action === "bio" && nodeId) openBioModal(nodeId);
                if (action === "edit" && nodeId) openEditModal(nodeId);
                if (action === "delete" && nodeId) deleteMember(nodeId);
                activePointer = null;
                return;
            }
            activePointer = null;
        });

        nodesLayer.addEventListener("pointercancel", () => {
            activePointer = null;
            handleUp();
        });
    }
}

document.addEventListener("mousedown", (event) => {
    if (!hasClosest(event.target, ".node-container")
        && !hasClosest(event.target, "#home-btn")
        && !hasClosest(event.target, "#admin-btn")
        && !hasClosest(event.target, "#reset-tree-btn")
        && !hasClosest(event.target, "#share-btn")
        && !hasClosest(event.target, "#admin-panel")
        && !isUiOverlayTarget(event.target)) {
        handleDown(event.clientX, event.clientY);
    }
}, { passive: true });

document.addEventListener("mousemove", (event) => handleMove(event.clientX, event.clientY), { passive: true });
document.addEventListener("mouseup", handleUp, { passive: true });

document.addEventListener("touchstart", (event) => {
    if (isUiOverlayTarget(event.target)) return;

    if (event.touches.length === 2) {
        event.preventDefault();
        clearTimeout(viewportAnimationTimer);
        setViewportTransition(0);
        isPinching = true;
        dragging = false;
        pinchStartDistance = getTouchDistance(event.touches[0], event.touches[1]);
        pinchStartScale = scale;
        pinchStartPosX = posX;
        pinchStartPosY = posY;
        return;
    }

    if (event.touches.length === 1
        && !hasClosest(event.target, "#admin-panel")
        && !hasClosest(event.target, "#reset-tree-btn")
        && !hasClosest(event.target, "#share-btn")
        && !isUiOverlayTarget(event.target)
        && !isCardControlTarget(event.target)) {
        handleDown(event.touches[0].clientX, event.touches[0].clientY);
    }
}, { passive: false });

document.addEventListener("touchmove", (event) => {
    if (isPinching && event.touches.length === 2) {
        event.preventDefault();
        const touchA = event.touches[0];
        const touchB = event.touches[1];
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
            scheduleUpdateTransform();
        }
        return;
    }

    if (!dragging) return;
    event.preventDefault();
    handleMove(event.touches[0].clientX, event.touches[0].clientY);
}, { passive: false });

document.addEventListener("touchend", (event) => {
    if (isPinching && event.touches.length < 2) {
        isPinching = false;
        pinchStartDistance = 0;
        pinchStartScale = scale;
        pinchStartPosX = posX;
        pinchStartPosY = posY;

        if (event.touches.length === 1 && !isUiOverlayTarget(event.target)) {
            handleDown(event.touches[0].clientX, event.touches[0].clientY);
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

document.addEventListener("wheel", (event) => {
    if (isUiOverlayTarget(event.target)) return;
    if (!event.target || !event.target.closest || !event.target.closest("#tree-container")) return;
    event.preventDefault();
    clearTimeout(viewportAnimationTimer);
    setViewportTransition(0);
    const maxScale = window.innerWidth <= MOBILE_LAYOUT_BREAKPOINT ? 2.2 : 3;
    scale = Math.min(Math.max(scale * (event.deltaY > 0 ? 0.9 : 1.1), 0.1), maxScale);
    scheduleUpdateTransform();
}, { passive: false });

document.addEventListener("DOMContentLoaded", () => {
    if (document.body) document.body.classList.add("loading");
    setLoaderProgress(0, true);
    loaderRenderDone = false;
    loaderConnectionsDone = false;
    loaderStartedAt = Date.now();
    loaderHideRequested = false;
    loaderMinimumPromise = new Promise((resolve) => {
        loaderMinTimer = setTimeout(resolve, LOADER_MIN_VISIBLE_MS);
    });
    resetTreeReadyPromise();
    startLoaderMaxWaitTimer();

    try {
        setLoaderProgress(8, true);
        preloadImages();
        bindStaticUiEvents();
        loadFirebase();
        initSidebarContent();
        loadInitialLocalData();
        render();
        centerOnRootPerson({
            animate: true,
            duration: VIEWPORT_ANIMATION_MS
        });
        setLoaderProgress(30);
        updateAdminUi();
        renderPendingList();
        loaderUiReady = true;
        setLoaderProgress(40);
        tryHideLoader();
    } catch (error) {
        loaderUiReady = true;
        loaderAuthReady = true;
        loaderDataReady = true;
        setLoaderProgress(100, true);
        hideLoaderWithMinDelay(true);
    }
});

window.addEventListener("resize", handleViewportResize, { passive: true });
window.addEventListener("load", () => {
    runDrawConnectionsFrame();
    observeCardPhotos();
});
