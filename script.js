const about = document.querySelector(".aboutMenu");
const products = document.querySelector(".productsMenu");
const intimateHealth = document.querySelector(".intimateHealthMenu");
const subMenu = document.querySelector(".subMenu");

const showSubMenu = (e) => {
  if (e === "about") {
    about.style.display = "flex";
    subMenu.style.display = "flex";
  } else if (e === "products") {
    products.style.display = "flex";
    subMenu.style.display = "flex";
  } else if (e === "intimateHealth") {
    intimateHealth.style.display = "flex";
    subMenu.style.display = "flex";
  }
};

const hiddeSubMenu = (e) => {
  if (e === "about") {
    about.style.display = "none";
    subMenu.style.display = "none";
  } else if (e === "products") {
    products.style.display = "none";
    subMenu.style.display = "none";
  } else if (e === "intimateHealth") {
    intimateHealth.style.display = "none";
    subMenu.style.display = "none";
  }
};

const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");
const mobileNav = document.querySelector(".mobileNav");
const body = document.querySelector("body");

const handleOpenMenu = (e) => {
  if (e === "open") {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    closeMenu.style.visibility = "visible";
    closeMenu.style.cursor = "pointer";
    mobileNav.style.display = "block";
    body.style.overflow = "hidden";
  }
};

const handleCloseMenu = (e) => {
  if (e === "close") {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    mobileNav.style.display = "none";
    body.style.overflow = "auto";
  }
};
