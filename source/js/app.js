const desktopWidth = "960";
var isOpenMenu = false;
document.addEventListener("DOMContentLoaded", function () {

  let buttonClose = document.querySelector(".main-nav__toogle");
  let nav = document.querySelector(".main-nav__list");
  let header = document.querySelector(".page-header__menu-wrapper");

  function menegeMenu() {


    if (isOpenMenu) {

      buttonClose.classList.remove("main-nav__toogle--burger");
      nav.classList.remove("visually-hidden");
      header.classList.remove("page-header__menu-wrapper--close");

    } else {

      buttonClose.classList.add("main-nav__toogle--burger");
      nav.classList.add("visually-hidden");
      header.classList.add("page-header__menu-wrapper--close");

    }

    if (window.innerWidth > desktopWidth && !isOpenMenu) {
      nav.classList.remove("visually-hidden");
    }

  }


  buttonClose.addEventListener("click", function (e) {
    isOpenMenu = !isOpenMenu;
    menegeMenu();

  });

  window.onresize = function () {
    menegeMenu();
  };

  menegeMenu();

});
