const menu = document.getElementById("menu");
const bars = document.getElementById("bars");
const img = document.getElementById("photo");
bars.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = "block";
        bars.className = "fa fa-x";
        img.style.filter = " blur(3px)";
    }
    else {
        menu.style.display = "none";
        bars.className = "fa fa-bars";
        img.style.filter ="none";
    }
});

document.addEventListener("click", () => {
    if (menu.style.display === "block" && !menu.contains(event.target) && !bars.contains(event.target)) {
        menu.style.display = "none";
        bars.className = "fa fa-bars";
    }
});

const texte=document.getElementById("txt");
let element =texte.textContent;
texte.textContent=" ";
let i = 0;
const interval =()=>{
    if( i <element.length){
        texte.textContent += element[i];
        i++;
        setTimeout(interval,120)
    }
}
interval();


