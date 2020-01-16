document.createElement("picture");

const desktopWidth = "960";
let isOpenMenu = false;
const visuallyHidden = "visually-hidden";

document.addEventListener("DOMContentLoaded", function () { //Тут функция без имени ставится пробел как например в for (;;)
  let buttonClose = document.querySelector(".main-nav__toogle");
  let nav = document.querySelector(".main-nav__list");
  let header = document.querySelector(".page-header__menu-wrapper");
  let headerWrapper = document.querySelector(".page-header__wrapper");

  let close = document.querySelector(".main-nav__icon--close");
  let burger = document.querySelector(".main-nav__icon--burger");

  let doalogClose = document.querySelectorAll(".dialog__button");
  let submitForm = document.querySelector("#submit-form");
  let formInputs = document.querySelectorAll(".competition__form input");
  let form = document.querySelector(".competition__form");

  let dialogSuccess = document.querySelector(".dialog--success");
  let dialogFail = document.querySelector(".dialog--fail");

  headerWrapper.classList.add("page-header__wrapper--js");

  function menegeMenu() {//Тут именованная функция пробел между названием функции и скобками не ставится
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

  function validateForm(e) {
    let isValid = true;

    formInputs.forEach(i => {
      if (!i.validity.valid) {
        isValid = false;
      }
    });

    if (isValid) {
      dialogSuccess.classList.remove(visuallyHidden);
      return true;
    } else {
      dialogFail.classList.remove(visuallyHidden);
      return false;
    }
  }

  buttonClose.addEventListener("click", function (e) {
    isOpenMenu = !isOpenMenu;
    menegeMenu();
  });

  if (submitForm) {
    submitForm.addEventListener("click", function (e) {
      validateForm(e);
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  }

  if (doalogClose) {
    doalogClose.forEach(dialog => {
      dialog.addEventListener("click", function (e) {
        let doalogs = document.querySelectorAll(".dialog");

        doalogs.forEach(d => {
          if (!d.classList.contains(visuallyHidden)) {
            d.classList.add(visuallyHidden);
          }
        });
      });
    });
  }

  window.onresize = function () {
    menegeMenu();
  };
  menegeMenu();
});
