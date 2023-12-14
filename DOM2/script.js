// /** @format */
const doc = document;
// // pirma uzduotis
// const newElement = doc.createElement("div");
// newElement.id = `myDiv`;
// newElement.textContent = `Tuscias div`;
// doc.body.appendChild(newElement);
// //  antra uzduotis
// const isoresElementas = doc.createElement(`div`);
// isoresElementas.id = `isoresDiv`;

// const vidausElementas = doc.createElement(`span`);
// vidausElementas.textContent = `Bereiksmis tekstas spano viduje `;

// isoresElementas.appendChild(vidausElementas);
// doc.body.appendChild(isoresElementas);
// // trecia uzduotis
// const nuorodosElementas = doc.createElement("a");
// nuorodosElementas.textContent = "linksmas paveiksliukas";
// nuorodosElementas.setAttribute("class", "myClass1");
// nuorodosElementas.setAttribute("id", "myId1");
// nuorodosElementas.href =
//   "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2013%2F12%2F10%2Fistock-18586699-monkey-computer_brick-16e5064d3378a14e0e4c2da08857efe03c04695e.jpg&f=1&nofb=1&ipt=a8fffb1207070d51ef5759f02a397937c08cb9db575b4add0f8f2e2bec6aec8c&ipo=images";
// nuorodosElementas.target = "_blank";
// doc.body.appendChild(nuorodosElementas);

// const pavElementas = doc.createElement("img");
// pavElementas.setAttribute(
//   "src",
//   "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fandrewgarrison.com%2Fwp-content%2Fuploads%2F2012%2F10%2FCodeMonkey-68762_960x360.jpg&f=1&nofb=1&ipt=75ea7b28351fa4e4f8eed516c582bf392938d9db6759a2eb9bc70961bba3eaa4&ipo=images"
// );
// pavElementas.setAttribute("alt", "As kai nurasau koda");
// pavElementas.setAttribute("class", "myClass2");
// pavElementas.setAttribute("id", "myId2");
// doc.body.appendChild(pavElementas);

// // ketvirta uzduotis

// const divSuMasyvu = doc.createElement("div");
// divSuMasyvu.id = `cont`;
// doc.body.appendChild(divSuMasyvu);

// const masyvas = [];

// for (let i = 0; i < 6; i++) {
//   const pastraipa = doc.createElement("p");
//   pastraipa.textContent = `Tuscia pastraipa ${i + 1}`;
//   masyvas.push(pastraipa);
//   divSuMasyvu.appendChild(pastraipa);
// }
// masyvas.forEach((pastraipa, index) => {
//   if (index % 2 === 0) {
//     pastraipa.style.color = "white";
//     pastraipa.style.backgroundColor = "green";
//   } else {
//     pastraipa.style.color = "red";
//     pastraipa.style.backgroundColor = "black";
//   }
// });
// // penkta uzduotis nepadaryta

// // septinta uzduotis nepadaryta
// const click = doc.createElement("button");
// const click2 = doc.createElement("button");
// const counting = doc.createElement("p");
// click.setAttribute("class", "click");
// click2.setAttribute("class", "click2");
// counting.setAttribute("class", "count");
// click.innerText = "papapalauk";
// click2.innerText = "nenenelauk";
// doc.body.appendChild(counting);
// doc.body.appendChild(click);
// doc.body.appendChild(click2);
// let countClicks = 0;
// click.addEventListener("click", (event) => {
//   event.preventDefault();
//   countClicks++;
//   console.log(countClicks);
//   counting.textContent = countClicks;
// });
// click2.addEventListener("click", (event) => {
//   event.preventDefault();
//   countClicks--;
//   console.log(countClicks);
//   counting.textContent = countClicks;
// });

// // sesta uzduotis
// const knopke1 = doc.createElement("button");
// divSuMasyvu.append(knopke1);
// knopke1.innerText = "paspausk";
// knopke1.addEventListener("click", createElement);

// const knopke2 = doc.createElement("button");
// divSuMasyvu.append(knopke2);
// knopke2.innerText = "nespausk";
// knopke2.addEventListener("click", removeElement);

// let naujai = [];

// function createElement() {
//   const naujas = doc.createElement("p");
//   naujas.textContent = "Naujove darze";
//   divSuMasyvu.appendChild(naujas);
//   naujai.push(naujas);
// }

// function removeElement() {
//   if (naujai.length > 0) {
//     const lastElement = naujai.pop();
//     lastElement.remove();
//   }
// }

// knopke1.style.color = "red";
// knopke1.style.backgroundColor = "green";
// knopke2.style.color = "green";
// knopke2.style.backgroundColor = "red ";
// knopke1.style.width = "100px";
// knopke1.style.height = "50px";
// knopke1.style.borderRadius = "25px";
// knopke2.style.width = "100px";
// knopke2.style.height = "50px";
// knopke2.style.borderRadius = "25px";
// knopke1.addEventListener("mouseover", function () {
//   knopke1.style.backgroundColor = "black";
// });
// knopke1.addEventListener("mouseout", function () {
//   knopke1.style.backgroundColor = "green";
// });
// knopke2.addEventListener("mouseover", function () {
//   knopke2.style.backgroundColor = "white";
// });
// knopke2.addEventListener("mouseout", function () {
//   knopke2.style.backgroundColor = "red";
// });
// antros skaidres
// 1-2
// const konteineris = doc.createElement("div");
// konteineris.setAttribute("id", "pirmas");
// doc.body.appendChild(konteineris);
// const pirmasEl = doc.createElement("p");
// pirmasEl.textContent = "aaaaaaaa";
// const antrasEl = doc.createElement("p");
// antrasEl.textContent = "bbbbbbbb";
// const treciasEl = doc.createElement("p");
// treciasEl.textContent = "cccccccc";
// const ketvirtasEl = doc.createElement("p");
// ketvirtasEl.textContent = "dddddddd";
// const penktasEl = doc.createElement("p");
// penktasEl.textContent = "eeeeeeeee";

// konteineris.append(pirmasEl, antrasEl, treciasEl, ketvirtasEl, penktasEl);

// pirmasEl.setAttribute("class", "a");
// pirmasEl.setAttribute("id", "aa");
// antrasEl.setAttribute("class", "b");
// antrasEl.setAttribute("id", "bb");
// treciasEl.setAttribute("class", "c");
// treciasEl.setAttribute("id", "cc");
// ketvirtasEl.setAttribute("class", "d");
// ketvirtasEl.setAttribute("id", "dd");
// penktasEl.setAttribute("class", "e");
// penktasEl.setAttribute("id", "ee");

// const div1 = doc.createElement("div");
// const div2 = doc.createElement("div");
// const div3 = doc.createElement("div");
// const div4 = doc.createElement("div");
// const div5 = doc.createElement("div");
// const div6 = doc.createElement("div");
// div1.setAttribute("class", "dydis");
// div2.setAttribute("class", "dydis");
// div3.setAttribute("class", "dydis");
// div4.setAttribute("class", "dydis");
// div5.setAttribute("class", "dydis");
// div6.setAttribute("class", "dydis");

// konteineris.append(div1, div2, div3, div4, div5, div6);

// const bendras = konteineris.querySelectorAll("div");
// bendras.forEach((el) => {
//   el.style.height = "50px";
//   el.style.width = "50px";
// });

// const button = doc.createElement("button");
// konteineris.append(button);

// button.innerText = "click";

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   bendras.forEach((el) => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     el.style.backgroundColor = "#" + randomColor;
//   });
// });

// const wordsContainer = doc.createElement("div");
// konteineris.appendChild(wordsContainer);

// const masiova = ["obuolys", "kriause", "slyva", "vyscia", "vynuoge"];

// for (let i = 1; i <= masiova.length; i++) {
//   const pElementas = doc.createElement("p");
//   const randomWord = random(masiova);
//   pElementas.innerText = randomWord;
//   wordsContainer.appendChild(pElementas);
// }

// function random(array) {
//   const randIndex = Math.floor(Math.random() * array.length);
//   return array[randIndex];
// }

// trecios skaidres
// const button = doc.createElement("button");
// button.innerText = "CREATE TABLE: ";
// const inputRows = doc.createElement("input");
// inputRows.placeholder = "eilutes";
// const inputColumns = doc.createElement("input");
// inputColumns.placeholder = "stulpeliai";
// const container = doc.createElement("div");
// container.append(button, inputRows, inputColumns);
// doc.body.append(container);

// const tableContainer = doc.createElement("div");
// tableContainer.setAttribute("id", "tableContainer");
// doc.body.appendChild(tableContainer);

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   const tableCheck = doc.querySelector("table");
//   if (tableCheck) {
//     tableCheck.remove();
//   }

//   const table = doc.createElement("table");
//   const tableBody = doc.createElement("tbody");
//   const eilSK = inputRows.value;
//   const stulpSk = inputColumns.value;

//   for (let i = 0; i < eilSK; i++) {
//     const row = doc.createElement("tr");
//     for (let j = 0; j < stulpSk; j++) {
//       const cell = doc.createElement("td");
//       const cellText = doc.createTextNode(`cell in row ${i}, column ${j}`);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }
//     tableBody.appendChild(row);
//   }

//   table.appendChild(tableBody);
//   tableContainer.appendChild(table);
//   table.setAttribute("border", "2");
// });

// ketvirtos skaidres

const imgContainer = doc.createElement("div");
const konteineris = doc.createElement("div");
konteineris.appendChild(imgContainer);
doc.body.appendChild(konteineris);
const masiova = [
  "https://image.shutterstock.com/image-illustration/photorealistic-3d-illustration-futuristic-city-260nw-2000612981.jpg",
  "https://image.shutterstock.com/image-photo/cyberpunk-style-image-beautiful-brunette-260nw-1886182798.jpg",
  "https://image.shutterstock.com/image-illustration/3d-rendering-cyberpunk-girl-stylish-260nw-1360869662.jpg",
  "https://image.shutterstock.com/image-illustration/science-fiction-cyborg-female-kneeling-260nw-1367287115.jpg",
  "https://image.shutterstock.com/image-illustration/futuristic-samurai-standing-on-building-260nw-1798382134.jpg",
];

for (let i = 0; i < masiova.length; i++) {
  const pElementas = doc.createElement("img");
  pElementas.style.height = "300px";
  pElementas.style.width = "500px";
  const randomPic = random(masiova);
  pElementas.setAttribute("src", randomPic);
  pElementas.innerText = randomPic;
  imgContainer.appendChild(pElementas);

  for (let j = 1; j < masiova.length; j++) {
    const siorca1 = document.createElement("ion-icon");
  }
}

function random(array) {
  const randIndex = Math.floor(Math.random() * array.length);
  return array[randIndex];
}

const siorca1 = doc.createElement("ion-icon");
siorca1.setAttribute("name", "heart-outline");
imgContainer.append(siorca1);
const siorca2 = doc.createElement("ion-icon");
siorca2.setAttribute("name", "heart");
imgContainer.append(siorca2);
siorca1.style.width = "50px";
siorca1.style.height = "30px";
siorca2.style.width = "50px";
siorca2.style.height = "30px";

siorca2.style.color = "red";
siorca1.style.color = "red  ";
siorca1.addEventListener("mouseover", function () {
  siorca1.style.color = "black";
});
siorca1.addEventListener("mouseout", function () {
  siorca1.style.color = "red";
});
siorca2.addEventListener("mouseover", function () {
  siorca2.style.color = "black";
});
siorca2.addEventListener("mouseout", function () {
  siorca2.style.color = "red";
});

imgContainer.style.position = "relative";
siorca1.style.position = "absolute";
siorca2.style.position = "absolute";
