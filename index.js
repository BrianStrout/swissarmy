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

window.onload = (e) => {
  const now = new Date();
  const day = now.getDay(); // returns a number representing the day of the week, starting with 0 for Sunday
  const hours = now.getHours();
  const minutes = now.getMinutes();

  if (day === "1") {
    alert(`Today is ${day} and the time is ${hours}:${minutes}.`);
  } else {
    document.getElementById("modal-1").classList.remove("hidden");
  }

  document.getElementById("yes").addEventListener("click", (e) => {
    document.getElementById("modal-1").classList.add("hidden");
  });
  document.getElementById("no").addEventListener("click", (e) => {
    window.open("https://app.invoicing.co/#/invoices", "_blank");

    window.open(
      "https://pcgus.my.workfront.com/team/64010c2a000400c0ea326b63c22878f5/schedule",
      "_blank"
    );
  });

  // document.getElementById("no").classList.remove("hidden");
};

// .onclick = function () {
//   navigator.clipboard.writeText("Brianjstrout@gmail.com");
// };

// console.log(carrots);
