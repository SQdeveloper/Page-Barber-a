const slideBar = document.getElementById("slide-bar");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const menuResponsive = document.querySelector(".menu-responsive");
const listA = document.getElementsByTagName("a");
const buttonSubmit = document.querySelector("input[type='submit']");
const ArrayInput = document.querySelectorAll("#contact form input");
const textArea = document.querySelector("#contact form textarea");

//Evento para mostra modal cuando se envia mensaje en el formulario
buttonSubmit.addEventListener("click", ()=>{
    if(ArrayInput[0].value != "" && ArrayInput[1].value != "" && ArrayInput[2].value != "" && textArea.value != ""){
        swal("Mensaje enviado correctamente", "Te contactaremos pronto.", "success");
    }    
});

//Evento para mostrar el menu cuando esta responsive
slideBar.addEventListener("click", ()=>{
    line1.classList.toggle("activeline1");
    line2.classList.toggle("activeline2");
    line3.classList.toggle("activeline3");
    menuResponsive.classList.toggle("activemenu-responsive");
    listA[0].classList.toggle("active");
    listA[1].classList.toggle("active");
    listA[2].classList.toggle("active");
    listA[3].classList.toggle("active");
  });