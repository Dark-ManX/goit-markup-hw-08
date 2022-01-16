(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    
    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("menu-button--is-hidden");
        menuBtnRef.setAttribute("artia-expanded", !expanded);

        mobileMenuRef.classList.togle("menu-button--is-hidden");
    });
})();