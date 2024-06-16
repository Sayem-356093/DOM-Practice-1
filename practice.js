let tabButton = document.querySelectorAll(".tab-menu-button");
let tabBody = document.querySelectorAll(".tab-body");

tabBody[0].classList.add("tab-active");
tabButton[0].classList.add("tab-menu-active");

for(let i = 0; i<tabButton.length; i++){

    tabButton[i].addEventListener("click", ()=>{
        for(let j = 0; j<tabButton.length; j++){
            tabBody[j].classList.remove("tab-active");
            tabButton[j].classList.remove("tab-menu-active");
        }
        tabBody[i].classList.add("tab-active");
        tabButton[i].classList.add("tab-menu-active");
    })

}