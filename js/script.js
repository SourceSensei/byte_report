const boxes = document.querySelectorAll(".box");
let isScrolling = false;

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  if (!isScrolling) {
    isScrolling = true;
  }

  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (isScrolling && boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
