// const tabButtons = document.querySelectorAll(".tab-button");
// const tabContents = document.querySelectorAll(".tab-content");

// tabButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const tab = button.getAttribute("data-tab");

//     // Deactivate all
//     tabButtons.forEach((btn) => btn.classList.remove("active"));
//     tabContents.forEach((content) => content.classList.remove("active"));

//     // Activate selected
//     button.classList.add("active");
//     document.getElementById(tab).classList.add("active");
//   });
// });

const buttons = document.querySelectorAll(".tab-button");

const tabContents = document.querySelectorAll(".tab-content");

buttons.forEach((btn, index, arr) => {
  console.log(btn, index, arr);

  btn.addEventListener("click", () => {
    const tab = btn.getAttribute("data-tab");

    // remove active

    tabContents.forEach((content) => {
      content.classList.remove("active");
    });
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    btn.classList.add("active");
    document.getElementById(tab).classList.add("active");
  });
});
