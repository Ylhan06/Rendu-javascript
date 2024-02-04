let form = document.querySelector("#my-form");
let firstName = document.querySelector("#firstName"); // input firstName
let lastName = document.querySelector("#lastName"); // input lastName
let age = document.querySelector("#age"); // input age
let country = document.querySelector("#country"); // select country
let firstnamediv = document.getElementById("fnamediv"); 
let lastnamediv = document.getElementById("lnamediv"); 
let agediv = document.getElementById("agediv"); 
let error = document.getElementById("error");

// capter le moment ou le formulaire est soumis
form.addEventListener("submit", function (event) {
    // annuler le rechargement de la page
    event.preventDefault();
    

    // controller les champs
    // tous les champs sont obligatoires
    // faut au moins deux caractères pour prénom et nom

    if(firstName.value.length < 2) {
        firstName.style.backgroundColor = "red";    
        error.innerHTML = "<div> Veuillez saisir un prénom avec minimum 2 caractères </div>";
    } else {
        firstName.style.backgroundColor = "green"; 
    }

    if(lastName.value.length < 2) {
        lastName.style.backgroundColor = "red"; 
    } else {
        lastName.style.backgroundColor = "green"; 
    }

    if(age.value < 18 || age.value > 70) {
        age.style.backgroundColor = "red"; 
    } else {
        age.style.backgroundColor = "green"; 
    }

    // agé entre 18 et 70 ans pour l'âge
    // selectionner un pays

    // si jamais j'ai un champ en erreur
    // vous allez mettre son background en rouge
    // si il est ok vous mettez son background en vert
    // m'afficher au dessus de mon formulaire les messages d'erreurs



});



