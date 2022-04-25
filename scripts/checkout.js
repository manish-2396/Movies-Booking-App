// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let moveis = JSON.parse(localStorage.getItem("movie"));


let movie = document.querySelector("#movie")
console.log(moveis)

let img = document.createElement("img");
img.src = "https://image.tmdb.org/t/p/w500" + moveis.poster_path ; //  ele.poster_path;
let nam = document.createElement("h2");
nam.innerText = moveis.title;

movie.append(nam,img)
console.log(img,nam)


// let pay = Number(JSON.parse(localStorage.getItem("amount")))

// if(pay > )