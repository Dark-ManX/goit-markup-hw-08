(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    
    menuBtRef.addEventsListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.togle("is-open");
        menuBtnRef.setAttribute("artia-expanded", !expanded);

        mobileMenuRef.classList.togle("is-open");
    });
})();