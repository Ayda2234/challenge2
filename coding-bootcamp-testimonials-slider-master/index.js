const John = document.querySelector(".John");
const Tanya = document.querySelector(".Tanya");
const previous = document.querySelectorAll(".previous");
const next = document.querySelectorAll(".next");

John.classList.add("hide");


const slideChange = () => { 
    if(John.classList.contains("hide")){
        John.classList.remove("hide");
        Tanya.classList.add("hide");
    }else if(Tanya.classList.contains("hide")){
        Tanya.classList.remove("hide");
        John.classList.add("hide");
    } else {
        John.classList.add("hide");
    }
}   




previous.forEach(item => item.addEventListener("click" , slideChange));
next.forEach(item => item.addEventListener("click" , slideChange));