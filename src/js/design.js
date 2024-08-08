let indicator = document.querySelector("#indicator");
let items = document.querySelectorAll(".navigation li");

const padding = 20;

function marker(e){
    indicator.style.left = (e.offsetLeft - padding/2)+"px";
    indicator.style.width = (e.offsetWidth + padding)+"px";
    
    items.forEach(link => {
        link.querySelector('a').style.color = "#F4D9D0";
    });
    e.querySelector('a').style.color = "#921A40";
}
function initializeMarker(){
    let activeItem = document.querySelector(".navigation li.active");
    if(activeItem){
        marker(activeItem);
    }else{
        marker(items[0]);
    }
}
items.forEach(link => {
    link.addEventListener("click", (e) => {
        items.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
        marker(link);
    })
})
initializeMarker();
