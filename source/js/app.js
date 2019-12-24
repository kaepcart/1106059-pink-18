
const desktopWidth = "960";
var isOpenMenu = false;
document.addEventListener("DOMContentLoaded", function () {

  let buttonClose = document.querySelector(".main-nav__toogle");
  let nav = document.querySelector(".main-nav__list");
  let header = document.querySelector(".page-header__menu-wrapper");
  let headerWrapper = document.querySelector(".page-header__wrapper");

  let close= document.querySelector(".main-nav__icon--close");
  let burger= document.querySelector(".main-nav__icon--burger");



  header.classList.add("page-header__menu-wrapper--js");
  headerWrapper.classList.add("page-header__wrapper--js");

  function menegeMenu() {


    if (isOpenMenu) {

      buttonClose.classList.remove("main-nav__toogle--burger");
      nav.classList.remove("visually-hidden");
      header.classList.remove("page-header__menu-wrapper--close");
      close.classList.remove("visually-hidden");
      burger.classList.add("visually-hidden");

    } else {

      buttonClose.classList.add("main-nav__toogle--burger");
      nav.classList.add("visually-hidden");
      header.classList.add("page-header__menu-wrapper--close");
      burger.classList.remove("visually-hidden");
      close.classList.add("visually-hidden");
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
