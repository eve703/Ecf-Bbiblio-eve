
/**************** Formulaire d'inscripton *********************************/


var formValid = document.getElementById("boutonEnvoi");
var nom = document.getElementById("Nom");
var prenom = document.getElementById("Prenom");
var date = document.getElementById("Date");
var adresse = document.getElementById("Adresse");
var ville = document.getElementById("Ville");
var codePostal = document.getElementById("CodePostal");
var mail = document.getElementById("Mail");
var jury = document.getElementById("Choix1");
var auteur = document.getElementById("Choix2");

var missNom = document.getElementById("missNom");
var missAdresse = document.getElementById("missAdresse");
var missVille = document.getElementById("missVille");
var missPostal = document.getElementById("missPostal");
var missMail = document.getElementById("missMail");
var nomValid = /^[a-zA-Z]+/;
var villeValid = /^[a-zA-Z]+/;
var codeValid =/^[0-9]{5}/;

    boutonEnvoi.addEventListener("click", validation);

    function validation(event)
    {
       if (nom.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Nom merci !");
         
            }
            else if (nomValid.test(nom.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer uniquement des lettres pour votre Nom merci !");
                    }

        if (adresse.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Adresse merci !");
         
            }
            
        if (ville.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Ville merci !");

            }
            else if (villeValid.test(ville.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer uniquement des lettres pour votre Ville merci !");
                    }

        if (codePostal.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Code Postal merci !"); 
            }
            else if (codeValid.test(codePostal.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer uniquement 5 chiffres pour votre Code Postal merci !");
                    }
            
        if (mail.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Mail merci !");
            }
  
            
        if (document.getElementById("choix1").checked) 
            {
             jury = document.getElementById("choix1").value;
            } 

        if (document.getElementById("choix2").checked) 
            {
             auteur = document.getElementById("choix2").value;
            } 
            


    };         

