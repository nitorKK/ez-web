const btns = document.querySelectorAll(".tab-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("js-button-active"));

    btn.classList.add("js-button-active");
    const tabContents = document.querySelectorAll(".c-tab-content");

    // tabContents.forEach((tabContent) => {
    //   tabContent.className = tabContent.className.replace("active", "");
    // });

    tabContents.forEach((tab) => tab.classList.remove("js-active"));

    document.querySelector(btn.dataset.targetTab).classList.add("js-active");
  });
});
