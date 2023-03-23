class MobileNavbar {
    constructor(mobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(this.navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }
}

addClickEvent()
    this.mobileMenu.addEventListener("click"), () => console.log("HEY!");


init () 
    if (this.mobileMenu) {
        this.addClickEvent();
    }


const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".navlist",
  ".navlist li",  
);

mobileNavbar.init();