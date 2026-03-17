function addFastPressListener(element, handler) {
    if (!element) return;

    let startX = 0;
    let startY = 0;
    let startTime = 0;

    element.addEventListener("pointerdown", (event) => {
        startX = event.clientX;
        startY = event.clientY;
        startTime = Date.now();
    });

    element.addEventListener("pointerup", (event) => {
        const dx = event.clientX - startX;
        const dy = event.clientY - startY;
        const dist = Math.hypot(dx, dy);
        const duration = Date.now() - startTime;
        if (dist <= TAP_MOVE_PX && duration <= TAP_MAX_DURATION_MS) {
            handler(event);
        }
    });

    element.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        handler(event);
    });
}

const TAP_MOVE_PX = 8; // Увеличили зону прощения дрожания пальца!
const TAP_MAX_DURATION_MS = 220; // Даем чуть больше времени на нажатие
const DRAG_START_PX = 20; // Дерево сдвинется только при уверенном движении

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
            const openedAt = Number(modalOverlay.dataset.openedAt || 0);
            if (Date.now() - openedAt < 200) return;
            if (event.target === modalOverlay) closeModal();
        });
    }

    const memberModalContent = document.getElementById("member-modal-content");
    if (memberModalContent) memberModalContent.addEventListener("pointerdown", (event) => event.stopPropagation());

    const memberModalCloseBtn = document.getElementById("member-modal-close-btn");
    addFastPressListener(memberModalCloseBtn, (event) => {
        if (event && typeof event.stopPropagation === "function") event.stopPropagation();
        closeModal();
    });

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

    if (memberModalContent) {
        memberModalContent.addEventListener("focusin", (event) => {
            const target = event.target;
            if (target && typeof target.scrollIntoView === "function") {
                setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 250);
            }
        });
    }

    setupSheetDrag(
        document.getElementById("member-modal-content"),
        document.querySelector("#member-modal-content .sheet-header"),
        closeModal
    );

    setupSheetDrag(
        document.getElementById("sanjyra-modal"),
        document.querySelector("#sanjyra-modal .bio-modal-head"),
        closeBioModal
    );

    initSheetStateObservers();

    const bioOverlay = document.getElementById("bio-overlay");
    if (bioOverlay) {
        bioOverlay.addEventListener("click", (event) => {
            if (event.target === bioOverlay) closeBioModal();
        });
    }

    const bioModalShell = document.getElementById("sanjyra-modal");
    if (bioModalShell) bioModalShell.addEventListener("pointerdown", (event) => event.stopPropagation());

    const bioCloseBtn = document.getElementById("bio-close-btn");
    addFastPressListener(bioCloseBtn, (event) => {
        if (event && typeof event.stopPropagation === "function") event.stopPropagation();
        closeBioModal();
    });

    document.querySelectorAll(".sheet-close, .bio-close").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.stopPropagation();
            const modal = btn.closest(".app-sheet");
            if (modal && modal.id === "member-modal-content") {
                closeModal();
            }
            if (modal && modal.id === "sanjyra-modal") {
                closeBioModal();
            }
        });
    });

    const dragLayer = document.getElementById("tree-container");
    if (dragLayer) {
        let activePointer = null;

        document.addEventListener("pointerdown", (event) => {
            if (isPinching) return;
            const isControl = isCardControlTarget(event.target);
            if (isControl) return;

            event.preventDefault();
            activePointer = {
                id: event.pointerId,
                startX: event.clientX,
                startY: event.clientY,
                startTime: Date.now(),
                allowDrag: false,
                dragging: false,
                moved: false
            };
        });

        document.addEventListener("pointermove", (event) => {
            if (activePointer && event.pointerId === activePointer.id) {
                event.preventDefault();
                const dx = event.clientX - activePointer.startX;
                const dy = event.clientY - activePointer.startY;
                const dist = Math.hypot(dx, dy);
                if (dist > TAP_MOVE_PX) activePointer.moved = true;
                if (dist > DRAG_START_PX && !activePointer.allowDrag) {
                    activePointer.allowDrag = true;
                    activePointer.dragging = true;
                    handleDown(activePointer.startX, activePointer.startY);
                    if (typeof dragLayer.setPointerCapture === "function") {
                        try {
                            // dragLayer.setPointerCapture(event.pointerId);
                        } catch (error) {
                            // ignore capture errors (e.g., unsupported or invalid pointer)
                        }
                    }
                }
                if (activePointer.allowDrag) {
                    event.preventDefault();
                    handleMove(event.clientX, event.clientY);
                }
            }
        }, { passive: false });

        document.addEventListener("pointerup", (event) => {
            const actionTarget = event.target && event.target.closest ? event.target.closest("[data-fast-action]") : null;
            if (actionTarget) {
                event.stopPropagation();
                const action = actionTarget.dataset.fastAction;
                const nodeId = actionTarget.dataset.nodeId;
                if (action === "add" && nodeId) {
                    console.log("openModal", nodeId);
                    openModal(nodeId);
                }
                if (action === "bio" && nodeId) openBioModal(nodeId);
                if (action === "edit" && nodeId) openEditModal(nodeId);
                if (action === "delete" && nodeId) deleteMember(nodeId);
                activePointer = null;
                return;
            }

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
                
                // Вот наша новая строчка с 50 миллисекундами:
                if (isTap && Date.now() - lastCardTouchToggleAt > 50) {
                    const toggled = handleCardToggleFromEventTarget(event.target);
                    if (toggled) {
                        lastCardTouchToggleAt = Date.now();
                        activePointer = null;
                        return;
                    }
                }
            }

            activePointer = null;
        });

        document.addEventListener("pointercancel", () => {
            activePointer = null;
            handleUp();
        });
    }
}

function initSheetStateObservers() {
    const sync = () => {
        const memberModal = document.getElementById("member-modal-content");
        const memberOverlay = document.getElementById("modal-overlay");
        if (memberModal && memberOverlay) {
            const isOpen = memberOverlay.style.display !== "none" && memberOverlay.style.display !== "";
            memberModal.classList.toggle("open", isOpen);
        }

        const bioModal = document.getElementById("sanjyra-modal");
        const bioOverlay = document.getElementById("bio-overlay");
        if (bioModal && bioOverlay) {
            const isOpen = bioOverlay.style.display !== "none" && bioOverlay.style.display !== "";
            bioModal.classList.toggle("open", isOpen);
        }

        const adminModal = document.querySelector(".admin-pass-modal");
        if (adminModal) {
            adminModal.classList.add("app-sheet");
            const isOpen = adminModal.style.display !== "none";
            adminModal.classList.toggle("open", isOpen);
        }
    };

    sync();

    const overlays = ["modal-overlay", "bio-overlay"].map((id) => document.getElementById(id)).filter(Boolean);
    overlays.forEach((overlay) => {
        const observer = new MutationObserver(sync);
        observer.observe(overlay, { attributes: true, attributeFilter: ["style", "class"] });
    });

    const bodyObserver = new MutationObserver(sync);
    bodyObserver.observe(document.body, { childList: true, subtree: true });
}

function setupSheetDrag(modalEl, handleEl, onClose) {
    if (!modalEl || !handleEl || typeof onClose !== "function") return;
    let startY = 0;
    let currentY = 0;
    let draggingSheet = false;

    const onMove = (event) => {
        if (!draggingSheet) return;
        const dy = Math.max(0, event.clientY - startY);
        currentY = dy;
        modalEl.style.transform = `translateY(${dy}px)`;
    };

    const onUp = () => {
        if (!draggingSheet) return;
        draggingSheet = false;
        if (currentY > 80) {
            modalEl.style.transition = "transform 200ms ease";
            modalEl.style.transform = "translateY(100%)";
            setTimeout(() => {
                modalEl.style.transition = "";
                modalEl.style.transform = "";
                onClose();
            }, 200);
        } else {
            modalEl.style.transition = "transform 200ms ease";
            modalEl.style.transform = "translateY(0)";
            setTimeout(() => {
                modalEl.style.transition = "";
            }, 200);
        }
    };

    handleEl.addEventListener("pointerdown", (event) => {
        startY = event.clientY;
        currentY = 0;
        draggingSheet = true;
        modalEl.style.transition = "none";
        handleEl.setPointerCapture?.(event.pointerId);
    });
    handleEl.addEventListener("pointermove", onMove);
    handleEl.addEventListener("pointerup", onUp);
    handleEl.addEventListener("pointercancel", onUp);
}

document.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 2) return;
    if (isUiOverlayTarget(event.target)) return;
    event.preventDefault();
    clearTimeout(viewportAnimationTimer);
    setViewportTransition(0);
    isPinching = true;
    dragging = false;
    pinchStartDistance = getTouchDistance(event.touches[0], event.touches[1]);
    pinchStartScale = scale;
    pinchStartPosX = posX;
    pinchStartPosY = posY;
}, { passive: false });

document.addEventListener("touchmove", (event) => {
    if (!isPinching || event.touches.length !== 2) return;
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
}, { passive: false });

document.addEventListener("touchend", (event) => {
    if (!isPinching) return;
    if (event.touches.length < 2) {
        isPinching = false;
        pinchStartDistance = 0;
        pinchStartScale = scale;
        pinchStartPosX = posX;
        pinchStartPosY = posY;
    }
});

document.addEventListener("touchmove", (event) => {
    const target = event.target;
    const allowScroll = target && typeof target.closest === "function" && (
        target.closest(".modal-content") ||
        target.closest("#member-modal-content") ||
        target.closest(".bio-modal") ||
        target.closest(".biography-section") ||
        target.closest("#mobile-sidebar") ||
        target.closest(".sidebar-content")
    );
    if (allowScroll) return;
    event.preventDefault();
}, { passive: false });

document.addEventListener("keydown", (event) => {
    const modal = document.getElementById("member-modal-content");
    const overlay = document.getElementById("modal-overlay");
    const bioModal = document.getElementById("sanjyra-modal");
    const bioOverlay = document.getElementById("bio-overlay");

    const isMemberOpen = modal && overlay && overlay.style.display !== "none" && overlay.style.display !== "";
    const isBioOpen = bioModal && bioOverlay && bioOverlay.style.display !== "none" && bioOverlay.style.display !== "";

    if (!isMemberOpen && !isBioOpen) return;

    if (event.key === "Escape") {
        event.preventDefault();
        if (isBioOpen) closeBioModal();
        if (isMemberOpen) closeModal();
        return;
    }

    if (event.key !== "Tab") return;

    const scope = isBioOpen ? bioModal : modal;
    if (!scope) return;
    const focusable = scope.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
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
        if (typeof preloadImages === "function") preloadImages();
        bindStaticUiEvents();
        loadFirebase();
        if (typeof initSidebarContent === "function") initSidebarContent();
        if (typeof loadInitialLocalData === "function") loadInitialLocalData();
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

window.addEventListener("load", () => {
    runDrawConnectionsFrame();
    observeCardPhotos();
});
if (typeof handleViewportResize === "function") {
    window.addEventListener("resize", handleViewportResize, { passive: true });
}
