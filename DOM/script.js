const divas = document.querySelector("div");
console.log(divas);

const divas1 = document.querySelector(".divas");
const divas2 = document.querySelector("#divas");
console.log(divas1, divas2);

const byID = document.getElementById("divas1");
console.log(byID);

const byClass = document.getElementsByClassName("divas1");
console.log(byClass);

// const array = document.querySelectorAll("div");
// console.log(array);

const byTag = document.getElementsByTagName("div");
console.log(byTag);

const child = divas.querySelector("p");
console.log(child);

const child1 = document.querySelector("div").childNodes;
console.log(child);

const child2 = document.querySelectorAll("div > p");
console.log(child2);

// const firstChild = document.querySelector("div").firstChild;
// console.log(firstChild);

const firstChild = document.querySelector("div > p");
console.log(firstChild, child2[1]);

firstChild.setAttribute("id", "pirmasP");
child2[1].className = "antrasP";
console.log(firstChild, child2[1]);

// firstChild.removeAttribute("id");

const attr = firstChild.getAttribute("id");
console.log(attr);

// klasiu modifikavimas

child2[1].classList.add("myClassInCss");
child2[1].classList.remove("myClassInCss");
child2[1].classList.replace("antrasP", "myClassInCss");

child2[1].style.color = "red";
child2[1].style.backgroundColor = "black";

const myButton = document.createElement("button");

// divas2.appendChild(myButton);
divas2.append(myButton);

// divas2.insertAdjacentElement("beforebegin", myButton);
// divas2.insertAdjacentElement("afterbegin", myButton);
// divas2.insertAdjacentElement("afterend", myButton);

myButton.innerText = "spausk";
// divas2.insertAdjacentElement("beforeend", myButton);
// divas2.innerHTML += "<span>Cia yra span</span>";
//  risky shit jei = viska replace jei += tada prideda
// nenaudot!!
// remove

// const span = document.querySelector("span");
// span.remove();

console.log(myButton);

// Define the click event handler function
const clickHandler = () => {
  if (myButton.style.backgroundColor === "red") {
    myButton.style.backgroundColor = "blue";
  } else {
    myButton.style.backgroundColor = "red";
  }
};

// Add the event listener using the defined function
myButton.addEventListener("click", clickHandler);

// Attempt to remove the event listener using the same function reference
myButton.removeEventListener("click", clickHandler);

console.log(myButton);
myButton.addEventListener(
  "click",
  () => {
    if (myButton.style.backgroundColor === "red") {
      myButton.style.backgroundColor = "blue";
    } else {
      myButton.style.backgroundColor = "red";
    }
  },
  { once: true }
);

myButton.removeEventListener("click", () => {
  console.log("event listenere removed");
});

const myButton2 = document.createElement("button");
myButton2.innerText = "click2";
const myButton3 = document.createElement("button");
myButton3.innerText = "click3";
const myButton4 = document.createElement("button");
myButton4.innerText = "click4";

divas2.append(myButton2, myButton3, myButton4);

const buttonsGroup = document.querySelectorAll("button");
console.log(buttonsGroup);
buttonsGroup.forEach((el, ind) =>
  el.addEventListener("click", () => {
    console.log(`you clicked button ${el.innerText}`);
  })
);

// event.value
// event.target

const forma = document.querySelector("form");
const inputas = document.querySelector(".input");
const submitas = document.querySelector("form > button");
console.log(forma, inputas, submitas);

const array = [];
let counter = 0;

submitas.addEventListener("click", (event) => {
  event.preventDefault();
  counter++;

  const inputoValue = inputas.value;
  console.log(inputoValue);

  const person = {
    id: counter,
    name: inputoValue,
  };

  array.push(person);
  console.log(array);
  localStorage.setItem("zmones", JSON.stringify(array));

  // inputas.value=""
  forma.reset();
});

submitas.addEventListener("click", (a) => {
  a.preventDefault();
  console.log(a.target);
});

const editInput = document.querySelector("#edit");
const editas = document.querySelector("#editbutton");
console.log(editInput, editas);

editas.addEventListener("click", (e) => {
  e.preventDefault();

  const editable = parseInt(editInput.value);
  console.log(editable);

  const fromLS = JSON.parse(localStorage.getItem("zmones"));
  console.log(fromLS);

  const founded = fromLS.findIndex((el) => el.id === editable);
  console.log(founded);

  inputas.value = fromLS[founded].name;
});
