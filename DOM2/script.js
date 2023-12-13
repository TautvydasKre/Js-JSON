/** @format */
const doc = document;
// pirma uzduotis
const newElement = doc.createElement("div");
newElement.id = `myDiv`;
newElement.textContent = `Tuscias div`;
doc.body.appendChild(newElement);
//  antra uzduotis
const isoresElementas = doc.createElement(`isoresDiv`);
isoresElementas.id = `isoresDiv`;

const vidausElementas = doc.createElement(`span`);
vidausElementas.textContent = `Bereiksmis tekstas spano viduje `;

isoresElementas.appendChild(vidausElementas);
doc.body.appendChild(isoresElementas);
// trecia uzduotis
const nuorodosElementas = doc.createElement("a");
nuorodosElementas.textContent = "linksmas paveiksliukas";
nuorodosElementas.setAttribute("class", "myClass1");
nuorodosElementas.setAttribute("id", "myId1");
nuorodosElementas.href =
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2013%2F12%2F10%2Fistock-18586699-monkey-computer_brick-16e5064d3378a14e0e4c2da08857efe03c04695e.jpg&f=1&nofb=1&ipt=a8fffb1207070d51ef5759f02a397937c08cb9db575b4add0f8f2e2bec6aec8c&ipo=images";
nuorodosElementas.target = "_blank";
doc.body.appendChild(nuorodosElementas);

const pavElementas = doc.createElement("img");
pavElementas.setAttribute(
  "src",
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fandrewgarrison.com%2Fwp-content%2Fuploads%2F2012%2F10%2FCodeMonkey-68762_960x360.jpg&f=1&nofb=1&ipt=75ea7b28351fa4e4f8eed516c582bf392938d9db6759a2eb9bc70961bba3eaa4&ipo=images"
);
pavElementas.setAttribute("alt", "As kai nurasau koda");
pavElementas.setAttribute("class", "myClass2");
pavElementas.setAttribute("id", "myId2");
doc.body.appendChild(pavElementas);

// ketvirta uzduotis

const divSuMasyvu = doc.createElement("div");
divSuMasyvu.id = `cont`;
doc.body.appendChild(divSuMasyvu);

const masyvas = [];

for (let i = 0; i < 6; i++) {
  const pastraipa = doc.createElement("p");
  pastraipa.textContent = `Tuscia pastraipa ${i + 1}`;
  masyvas.push(pastraipa);
  divSuMasyvu.appendChild(pastraipa);
}
// console.log(masyvas);

masyvas.forEach((pastraipa, index) => {
  if (index % 2 === 0) {
    pastraipa.style.color = "white";
    pastraipa.style.backgroundColor = "green";
  } else {
    pastraipa.style.color = "red";
    pastraipa.style.backgroundColor = "black";
  }
});
// penkta uzduotis nepadaryta
// septinta uzduotis nepadaryta

// sesta uzduotis
const knopke1 = doc.createElement("button");
divSuMasyvu.append(knopke1);
knopke1.innerText = "paspausk";
knopke1.addEventListener("click", createElement);

const knopke2 = doc.createElement("button");
divSuMasyvu.append(knopke2);
knopke2.innerText = "nespausk";
knopke2.addEventListener("click", removeElement);

let naujai = [];

function createElement() {
  const naujas = doc.createElement("p");
  naujas.textContent = "Naujove darze";
  divSuMasyvu.appendChild(naujas);
  naujai.push(naujas);
}

function removeElement() {
  if (naujai.length > 0) {
    const lastElement = naujai.pop();
    lastElement.remove();
  }
}

knopke1.style.color = "red";
knopke1.style.backgroundColor = "green";
knopke2.style.color = "green";
knopke2.style.backgroundColor = "red ";
knopke1.style.width = "100px";
knopke1.style.height = "50px";
knopke1.style.borderRadius = "25px";
knopke2.style.width = "100px";
knopke2.style.height = "50px";
knopke2.style.borderRadius = "25px";
knopke1.addEventListener("mouseover", function () {
  knopke1.style.backgroundColor = "black";
});
knopke1.addEventListener("mouseout", function () {
  knopke1.style.backgroundColor = "green";
});
knopke2.addEventListener("mouseover", function () {
  knopke2.style.backgroundColor = "white";
});
knopke2.addEventListener("mouseout", function () {
  knopke2.style.backgroundColor = "red";
});
