// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//http://www.omdbapi.com/?apikey=1af9e5d9&t=${name}
let id;
const myfunction = async () => {
    try {
        const q = document.querySelector("#search").value;
        const res = await fetch(`http://www.omdbapi.com/?apikey=1af9e5d9&s=${q}`
        );

        // const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=818ec820de5649575955663bd77e57cb&language=en-US&include_adult=false&query=${q}`
        // );

        //https://api.themoviedb.org/3/search/multi?api_key=818ec820de5649575955663bd77e57cb&language=en-US&include_adult=false&query=${query}`
        const data = await res.json();

        console.log(data);

        return data.Search;

    } catch (err) {
        console.log(err)
    }
}

function append(data) {
    let movies = document.querySelector("#movies");
    movies.innerHTML = null;

    data.forEach(ele => {
        let div = document.createElement("div");

        let img = document.createElement("img");
        //img.src = "https://image.tmdb.org/t/p/w500" + ele.poster_path  //  ele.poster_path;
        img.src = ele.Poster;
        let name = document.createElement("p");
        name.innerText = ele.Title;

        let btn = document.createElement("button");
        btn.innerText = "Book Now"

        btn.addEventListener("click", function () {

            addmovie(ele)
            console.log(ele)

        })

        div.append(img, name, btn);
        movies.append(div)
    });

    function addmovie(ele){
        console.log(ele);
        localStorage.setItem("movie" , JSON.stringify(ele))
        window.location.href ="checkout.html"
    }

}




async function main() {

    let data = await myfunction();
    if (data == undefined) return false;

    append(data)
}

function debounce(func, delay) {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
        func();

    }, delay);
}

console.log("hello")

let pay = Number(JSON.parse(localStorage.getItem("amount")));
document.querySelector("#wallet").innerText = pay