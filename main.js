window.addEventListener("load", function (){
    let btn = document.querySelector(".container__button");
    btn.addEventListener("click", function (){
        alert(btn.textContent);
    })
})