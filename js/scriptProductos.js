const cardsProductos = document.getElementById("cards-productos");
const fragment = document.createDocumentFragment();
const buttonUp = document.getElementById("up");
const slideBar = document.getElementById("slide-bar");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const menuResponsive = document.querySelector(".menu-responsive");
const listA = document.getElementsByTagName("a");

for(let i=0; i<16; i++){
    let card = document.createElement("div");
    card.innerHTML = "<img src='images/prototipo.jpg'/><div><p style='margin:0'>Maquina Barber</p><br><p style='margin:0;'>Precio: $ 340 soles</p><br><p style='margin:0'>Garantia: 2 años habiles</p></div>";
    card.className = "card";
    fragment.appendChild(card);
}

cardsProductos.appendChild(fragment);

slideBar.addEventListener("click", ()=>{
    line1.classList.toggle("activeline1");
    line2.classList.toggle("activeline2");
    line3.classList.toggle("activeline3");
    menuResponsive.classList.toggle("activemenu-responsive");
    listA[0].classList.toggle("active");
    listA[1].classList.toggle("active");
    listA[2].classList.toggle("active");
    listA[3].classList.toggle("active");
})

//Evento para el efecto de cambiar el color de la flecha up cuando llega al final de la pagina
document.addEventListener("scroll", ()=>{
    if(this.scrollY >= document.documentElement.scrollHeight - window.screen.availHeight){
        buttonUp.style.filter = "invert(100%) sepia(100%) saturate(1%) hue-rotate(243deg) brightness(103%) contrast(101%)";
    }else{
        buttonUp.style.filter = "invert(41%) sepia(3%) saturate(369%) hue-rotate(314deg) brightness(98%) contrast(79%)";
    }
});

buttonUp.addEventListener("click", ()=>{
    window.scrollTo({top:0, behavior:"smooth"});
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25.5,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });