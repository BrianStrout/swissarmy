console.log("functioning");
const sticks = Array.from(document.querySelectorAll(".copy-point"));

sticks.forEach((stick) => {
  stick.addEventListener("click", () => {
    console.log(stick.parentElement.children[0].textContent);
    navigator.clipboard.writeText(stick.parentElement.children[0].textContent);
  });
});

// ("mkdir src dist scss modules images index.html index.js index.css index.scss _header.scss _landing.scss _root.scss _footer");

const carrots = Array.from(document.querySelectorAll(".carrot"));

carrots.forEach((carrot) => {
  let papa = carrot.parentElement;
  let kiddos = Array.from(papa.children);

  //   console.log(kiddos[1]);
});

// .onclick = function () {
//   navigator.clipboard.writeText("Brianjstrout@gmail.com");
// };

// console.log(carrots);
