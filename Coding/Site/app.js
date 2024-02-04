const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
})

// Condition Formulaire
const form = document.getElementById("form");
const prenom = document.getElementById("prenom");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");
const choix = document.getElementById("choix");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    if(prenom.value.length < 2) {
        prenom.style.color = "red";    
        error1.innerHTML = "<div> Minimum 2 Caractères requis </div>";
    } else {
        prenom.style.color = "green"; 
        error1.innerHTML = "";
    }

    if(nom.value.length < 2) {
        nom.style.color = "red";    
        error2.innerHTML = "<div> Minimum 2 Caractères requis </div>";
    } else {
        nom.style.color = "green"; 
        error2.innerHTML = "";
    }

    if(email.value.length < 2) {
        email.style.color = "red";    
        error3.innerHTML = "<div> Minimum 8 Caractères requis </div>";
    } else {
        email.style.color = "green"; 
        error3.innerHTML = "";
    }



});