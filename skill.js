const cercles = document.querySelectorAll(".progresse");


cercles.forEach(cercle => {

    let color = cercle.getAttribute("data-color");
    let target = parseInt(cercle.getAttribute("data-pourcentage"));
    let texte = cercle.querySelector(".centre");
    let e = 0;
    const intervalle = setInterval(() => {
        if (e <= target) {

            e++;
            let degre = (e / 100 )* 360;
            cercle.style.background = `conic-gradient(${color} ${degre}deg , rgb(228, 227, 222) ${degre}deg)`
            texte.textContent = e + "%"

        }
        else {
            clearInterval(intervalle);
        }
    }, 16);

})

const menu = document.getElementById("menu");
const bars = document.getElementById("bars");
const img = document.getElementById("photo");
bars.addEventListener("click", () => {
    if (menu.style.display === "none") {
        menu.style.display = "block";
        bars.className = "fa fa-x";
    }
    else {
        menu.style.display = "none";
        bars.className = "fa fa-bars";
       
    }
});

document.addEventListener("click", () => {
    if (menu.style.display === "block" && !menu.contains(event.target) && !bars.contains(event.target)) {
        menu.style.display = "none";
        bars.className = "fa fa-bars";
    }
});