// modal

const modalbtns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".modalclose");
const modal = document.querySelectorAll('.has-background-modal');

modalbtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
  const modal = btn.closest(".has-background-modal");
    modal.classList.remove("active");
  });
});

/* window.onclick = function (event) {
  if (event.target == modal)
  modal.classList.remove("active");
} */

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.classList.remove("active");
  }
});

/* window.onclick = (event) => {
  if (event.target == modal) {
    console.log('clicked');
    forEach((modal) => modal.classList.remove("active"));
  }
}; */

/* const onClick = () => {
  console.log('clicked');
  modal.forEach(modal => {
    modal.classList.remove("active");
  });
}; */

modal.forEach(modal => {
  modal.addEventListener('click', onClick);
});