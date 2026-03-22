const container = document.getElementById("grid-container");
let mouseEntered = false;
const colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

document.getElementById("size").value = 16;
generateNewGrid();
document.getElementById("size").value = "";

function generateNewGrid() {
  const size = document.getElementById("size").value;
  if (size > 0 && size <= 100) {
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("box");
      container.appendChild(div);
    }
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    clearButtons();
  } else {
    window.alert("please enter a number between 1-100");
    document.getElementById("size").value = "";
    document.getElementById("size").focus();
  }
}

function fillingGrid(choice) {
  const randomBtn = document.getElementById("random");
  const randomIcon = document.getElementById("random-icon");
  const eraseBtn = document.getElementById("eraser");
  const eraserIcon = document.getElementById("eraser-icon");
  const colorBtn = document.getElementById("color");
  switch (choice) {
    case "random":
      randomColor();
      clearButtons();
      randomBtn.classList.add("chosen");
      randomIcon.classList.add("chosen");
      break;
    case "eraser":
      eraser();
      clearButtons();
      eraseBtn.classList.add("chosen");
      eraserIcon.classList.add("chosen");
      break;
    case "color":
      fixedColor();
      clearButtons();
      colorBtn.classList.add("chosen");
      break;
  }
}
function randomColor() {
  const boxes = document.querySelectorAll(".box");
  document.addEventListener("mouseup", () => {
    mouseEntered = false;
  });
  boxes.forEach((element) => {
    element.addEventListener("mousedown", (event) => {
      event.preventDefault();
      mouseEntered = true;
      event.target.style.backgroundColor = getRandomColor();
    });
  });
  boxes.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      if (mouseEntered) {
        event.target.style.backgroundColor = getRandomColor();
      }
    });
  });
}

function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * 16)];
  }
  return color;
}

function eraser() {
  const boxes = document.querySelectorAll(".box");
  document.addEventListener("mouseup", () => {
    mouseEntered = false;
  });
  boxes.forEach((element) => {
    element.addEventListener("mousedown", (event) => {
      event.preventDefault();
      mouseEntered = true;
      event.target.style.backgroundColor = "white";
    });
  });
  boxes.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      if (mouseEntered) {
        event.target.style.backgroundColor = "white";
      }
    });
  });
}

function fixedColor() {
  const boxes = document.querySelectorAll(".box");
  document.addEventListener("mouseup", () => {
    mouseEntered = false;
  });
  boxes.forEach((element) => {
    element.addEventListener("mousedown", (event) => {
      event.preventDefault();
      mouseEntered = true;
      event.target.style.backgroundColor =
        document.getElementById("colorPicker").value;
    });
  });
  boxes.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
      if (mouseEntered) {
        event.target.style.backgroundColor =
          document.getElementById("colorPicker").value;
      }
    });
  });
}

function clearGrid() {
  clearButtons();
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((element) => {
    element.style.backgroundColor = "white";
  });
}
function clearButtons() {
  const buttons = document.querySelectorAll(".button");
  const icons = document.querySelectorAll("i");
  buttons.forEach((element) => {
    element.classList.remove("chosen");
  });
  icons.forEach((element) => {
    element.classList.remove("chosen");
  });
}
