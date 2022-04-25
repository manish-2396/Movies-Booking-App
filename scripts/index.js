// Store the wallet amount to your local storage with key "amount"
document.querySelector("#add_to_wallet").addEventListener("click",function(){
    let arr = JSON.parse(localStorage.getItem("amount")) || 0;
    let Amount = document.querySelector("#amount").value;

    arr+=Number(Amount)
    localStorage.setItem("amount" ,JSON.stringify(arr));
});

document.querySelector("#book_movies").addEventListener("click" , function(){
    window.location.href =  "movies.html";
});