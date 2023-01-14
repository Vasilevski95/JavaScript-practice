// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = view.querySelector("h2");

//Event Listeneri
//Syntax: addEventListener(event, function, useCapture)

// const doSomething = () => {
//   alert("Do something");
// };

// h2.addEventListener("click", doSomething, false);
// h2.removeEventListener("click", doSomething, false);

// h2.addEventListener("click", function (e) {
//   e.target.textContent = "Clicked";
//   console.log(e.target);
// });

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = view.querySelector("h2");

  view.addEventListener(
    "click",
    (e) => {
      view.classList.toggle("purple");
      view.classList.toggle("darkblue");
    },
    true
  );

  div.addEventListener(
    "click",
    (e) => {
      div.style.backgroundColor = "blue";
    },
    true
  );

  h2.addEventListener(
    "click",
    (e) => {
      const myText = e.target.textContent;
      myText === "My 2nd View"
        ? (e.target.textContent = "clicked")
        : (e.target.textContent = "My 2nd View");
    },
    true
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (e) => {
    e.target.classList.add("height-100");
  });

  nav.addEventListener("mouseout", (e) => {
    e.target.classList.remove("height-100");
  });
};
