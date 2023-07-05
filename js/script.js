const joinBtn = document.querySelector(".otpr"),
  modal = document.querySelector(".modal"),
  modalContainer = document.querySelector(".modal__container"),
  joinBttn = document.querySelector(".join"),
  modalClose = document.querySelector(".modal__close");

joinBtn.addEventListener("click", function () {
  modal.style.display = "flex";

  setTimeout(() => {
    modal.style.opacity = "1";
  }, 1);

  setTimeout(() => {
    modalContainer.style.transform = "scaleY(1)";
  }, 100);
});



modalClose.addEventListener("click", function () {
  modalContainer.style.transform = "scaleY(0)";

  setTimeout(() => {
    modal.style.opacity = "0";
  }, 40);

  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
});

joinBttn.addEventListener("click", function () {
  modal.style.display = "flex";

  setTimeout(() => {
    modal.style.opacity  = "1";
  }, 1);

  setTimeout(() => {
    modalContainer.style.transform = "scaleY(1)";
  }, 100);
});



const infoWindow = document.querySelector(".txt_txt"),
      send = document.querySelector(".send"),
      modall = document.querySelector(".modall");
const modallContainer = document.querySelector(".modall__container");
const closeButton = document.querySelector(".modall__closee");

send.addEventListener("click", function () {
  modall.style.display = "flex";

  setTimeout(() => {
    modall.style.opacity = "1";
}, 1);

setTimeout(() => {
  modallContainer.style.transform = "scaleY(1)";
}, 100);
});



closeButton.addEventListener("click", function () {
  modallContainer.style.transform = "scaleY(0)";

  setTimeout(() => {
    modall.style.opacity = "0";
  }, 40);

  setTimeout(() => {
    modall.style.display = "none";
  }, 300);
});