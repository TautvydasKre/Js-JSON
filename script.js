"use strict";

// let cat = "Tom";
// localStorage.setItem("cat", cat);
// let fromLS = localStorage.getItem("cat");
// console.log(fromLS);

// let dog = "Pluto";
// localStorage.setItem("doggy", dog);

// const cats = {
//   cat1: "Tom",
//   cat2: "Garfild",
//   cat3: "Pukis",
// };

// localStorage.setItem("catsArray", JSON.stringify(cats));

// const dogs = ["Pluto", "winnie", "Blackie"];

// sessionStorage.setItem("catsArray", JSON.stringify(cats));
// sessionStorage.setItem("dogsArray", JSON.stringify(dogs));

// localStorage.setItem("catsArray", JSON.stringify(cats));
// localStorage.setItem("dogsArray", JSON.stringify(dogs));
// let catsFromLD = JSON.parse(localStorage.getItem("catsArray"));
// console.log(catsFromLD);
// console.log(catsFromLD.cat2);

// const dogs2 = [
//   {
//     cat1: "Tom",
//     cat2: "Garfield",
//     cat3: "Pukis",
//   },
//   {
//     cat1: "Tom",
//     cat2: "Garfield",
//     cat3: "Pukis",
//   },
//   {
//     cat1: "Tom",
//     cat2: "Garfield",
//     cat3: "Pukis",
//   },
// ];
// localStorage.setItem("dogsArrayWithObjects", JSON.stringify(dogs2));

// const dogs2FromLS = JSON.parse(localStorage.getItem("dogsArrayWithObjects"));
// console.log(dogs2FromLS);
// console.log(dogs2FromLS[1].cat2);

// localStorage.removeItem("doggy");
// localStorage.clear();

// sessionStorage.setItem("dogsArrayWIthObjects", JSON.stringify(dogs2));

// sessionStorage.clear();

// const dataFromLS = JSON.parse(localStorage.getItem("persons"));
// // console.log(dataFromLS);
// const data = dataFromLS === null ? [] : dataFromLS;
// // console.log(data);
// const persons = {
//   name: "John",
//   lastname: "Does",
// };
// data.push(persons);
// // console.log(data);
// localStorage.setItem("persons", JSON.stringify(data));
// const dataFromLS1 = JSON.parse(localStorage.getItem("persons"));
// // console.log(dataFromLS1);
// const data1 = dataFromLS1 === null ? [] : dataFromLS1;
// // console.log(data1);
// data1.push(persons);
// localStorage.setItem("persons", JSON.stringify(data1));

// const dataFromLS2 = JSON.parse(localStorage.getItem("persons"));
// console.log(dataFromLS2);

// const newArray = dataFromLS2.find(
//   (elementas) => elementas.name === "John" && elementas.lastname === "Does"
// );
// console.log(newArray);

// const persons1 = {
//   name: "Jayna",
//   lastname: "Proudmore",
// };

// if (newArray) {
//   alert("Toks vartotojas jau yra");
// } else {
//   dataFromLS2.push(persons1);
//   localStorage.setItem("persons", JSON.stringify(dataFromLS2));
//   alert("naujas irasas isaugotas LS");
// }

// localStorage.clear();
// const dataFromLS = JSON.parse(localStorage.getItem("persons"));
// // console.log(dataFromLS);

// const data = dataFromLS === null ? [] : dataFromLS;
// // console.log(data);

// const person = {
//   name: "john",
//   lastname: "doe",
// };

// data.push(person);
// // console.log(data);

// localStorage.setItem("persons", JSON.stringify(data));

// const dataFromLS1 = JSON.parse(localStorage.getItem("persons"));
// // console.log(dataFromLS1);

// const data1 = dataFromLS1 === null ? [] : dataFromLS1;
// // console.log(data1);

// data1.push(person);
// localStorage.setItem("persons", JSON.stringify(data1));

// const dataFromLS2 = JSON.parse(localStorage.getItem("persons"));
// console.log(dataFromLS2);

// const newArray = dataFromLS2.find(
//   (elementas) => elementas.name === "john" && elementas.lastname === "doe"
// );
// console.log(newArray);

// const person1 = {
//   name: "Aetras",
//   lastname: "do",
// };

// if (newArray) {
//   alert("toks jau yra");
// } else {
//   dataFromLS2.push(person1);
//   localStorage.setItem("persons", JSON.stringify(dataFromLS2));
//   alert("naujas irasas isaugotas");
// }

//----------------------------------------------------

// const duomenys = localStorage.getItem("persons");
// const atsakymas = duomenys === null ? [] : JSON.parse(duomenys);

// const person = {
//   name: "John",
//   lastName: "Wick",
// };

// const ieskomas = atsakymas.find(
//   (el) => el.name === person.name && el.lastName === person.lastName
// );
// console.log(ieskomas);

// if (ieskomas) {
//   alert("Toks jau yra");
// } else {
//   atsakymas.push(person);
//   localStorage.setItem("persons", JSON.stringify(atsakymas));
//   alert("Naujas irasas patalpintas");
// }

// const duomenysIsLs = JSON.parse(localStorage.getItem("persons"));

// const person1 = {
//   name: "Jayna",
//   lastName: "Proudmore",
// };

// const ieskomas1 = duomenysIsLs.find(
//   (el) => el.name === person1.name && el.lastName === person1.lastName
// );
// console.log(ieskomas1);

// if (ieskomas1) {
//   alert("Toks jau yra");
// } else {
//   duomenysIsLs.push(person1);
//   localStorage.setItem("persons", JSON.stringify(duomenysIsLs));
//   alert("Naujas irasas patalpintas");
// }

// ------------------------------------------------------

// // 1.
// import result from "./data.js";
// console.log(result);

// // 2.
// const tikrinam = JSON.parse(localStorage.getItem("favorites"));
// // console.log(tikrinam);

// // 3.
// const fav = tikrinam === null ? [] : JSON.parse(tikrinam);
// console.log(fav);

// // 4.
// const getMovies = (id) => {
//   const movie = result.find((el) => el.id === id);
//   // console.log(movie);
//   return movie;
// };

// getMovies(414906);

// // 5.
// const myMovies = (id) => {
//   const loved = {
//     id: getMovies(id).id,
//     title: getMovies(id).title,
//   };
//   console.log(loved);
//   const movieExistInFavorites = fav.find((el) => el.id === loved.id);
//   if (movieExistInFavorites) {
//     alert("Filmuks jau prazets");
//   } else {
//     fav.push(loved);
//     localStorage.setItem("favorites", JSON.stringify(fav));
//     alert("Itrauktas i must watch");
//   }
// };
// myMovies(414906);
// myMovies(284054);
// myMovies(438148);

// const print = () => {
//   const fromLS = JSON.parse(localStorage.getItem("favorites"));
//   console.log(fromLS);
//   fromLS.forEach((el) => console.log(`id: ${el.id}, title: ${el.title}`));
// };
// print();

// const removeMovie = (id) => {
//   const fromLS = JSON.parse(localStorage.getItem("favorites"));
//   const movieIndex = fromLS.findIndex((movie) => movie.id === id);
//   console.log(movieIndex);
//   if (movieIndex > -1) {
//     alert(`filmas${fromLS[movieIndex].title} panaikintas`);
//     fromLS.splice(movieIndex, 1);
//     localStorage.setItem("favorites", JSON.stringify(fromLS));
//   } else {
//     alert(`movie not found`);
//   }
//   localStorage.setItem("favorites", JSON.stringify(fromLS));
// };
// removeMovie(438148);

import data from "./data.json" assert { type: "json" };
console.log(data);
const patikra = localStorage.getItem("countries");
console.log(patikra);
const sal = patikra === null ? [] : JSON.parse(patikra);
console.log(sal);
data.forEach((el, index) => {
  if (!el.hasOwnProperty(`capital`)) {
    const country = {
      id: index + 1,
      name: el.name.common,
      capital: "Data not found",
    };
    console.log(country);
    sal.push(country);
  } else {
    const country = {
      id: index + 1,
      name: el.name.common,
      capital: el.capital[0],
    };
    console.log(country);
    sal.push(country);
  }
});
console.log(sal);
localStorage.setItem("countries", JSON.stringify(sal));
