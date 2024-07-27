const menuToggle = document.getElementById("menu-icon");
const menu = document.getElementById("nav-menu");


function toggleNavMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
       
    } else {
        menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        menu.classList.add("active");

        
        menuToggle.innerHTML = "<i class='fas fa-times'></i>";
    }
}

menuToggle.addEventListener("click", toggleNavMenu, false);