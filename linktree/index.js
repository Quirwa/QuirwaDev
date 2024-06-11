
const body = document.body;
const bodyBefore = document.createElement("style");
document.head.appendChild(bodyBefore);

function setBackground(imageUrl) {
  bodyBefore.innerHTML = `
  body::before {
    background-image: url(${imageUrl});
    opacity: 1;
  }
`;
}

function clearBackground(imageUrl) {
  bodyBefore.innerHTML = `
  body::before {
    background-image: url(${imageUrl});
    opacity: 0;
  }
`;
}
document.querySelector(".quirwa").addEventListener("mouseover", () => {
  setBackground("bg/headers.jpg");
});

document.querySelector(".quirwa").addEventListener("mouseout", () => {
  clearBackground("bg/headers.jpg");
});
document.querySelector(".pizza").addEventListener("mouseover", () => {
  setBackground("bg/header.jpg");
});

document.querySelector(".pizza").addEventListener("mouseout", () => {
  clearBackground("bg/header.jpg");
});
document.querySelector(".cafe2").addEventListener("mouseover", () => {
  setBackground("bg/flour-5290444_1280.jpg");
});

document.querySelector(".cafe2").addEventListener("mouseout", () => {
  clearBackground("bg/flour-5290444_1280.jpg");
});

document.querySelector(".studio").addEventListener("mouseover", () => {
  setBackground("bg/header2.jpg");
});

document.querySelector(".studio").addEventListener("mouseout", () => {
  clearBackground("bg/header2.jpg");
});

document
  .querySelector(".construction")
  .addEventListener("mouseover", () => {
    setBackground("bg/drawing.jpg");
  });

document
  .querySelector(".construction")
  .addEventListener("mouseout", () => {
    clearBackground("bg/drawing.jpg");
  });