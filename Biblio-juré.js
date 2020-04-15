/**************** Profil du juré *********************************/


var formValidJure = document.getElementById("boutonEnvoi2");
var motDePasse = document.getElementById("password");
var nomJure = document.getElementById("NomJure");
var prenomJure = document.getElementById("PrenomJure");
var dateJure = document.getElementById("DateJure");
var adresseJure = document.getElementById("AdresseJure");
var villeJure = document.getElementById("VilleJure");
var codePostalJure = document.getElementById("CodePostalJure");
var mailJure = document.getElementById("MailJure");


var missPassword = document.getElementById("missPassword");
var missNomJure = document.getElementById("missNomJure");
var missAdresseJure = document.getElementById("missAdresseJure");
var missVilleJure = document.getElementById("missVilleJure");
var missPostalJure = document.getElementById("missPostalJure");
var missMailJure = document.getElementById("missMailJure");
var nomValidJure = /^[a-zA-Z]+/;
var villeValidJure = /^[a-zA-Z]+/;
var codeValidJure =/^[0-9]{5}/;

var motDePasseValid = /^[a-zA-Z0-9]{10,12}/;

    

    boutonEnvoi2.addEventListener("click", validationJure);

    function validationJure(event)
    {
        if (motDePasse.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Mot de Passe merci ! ");
         
            }
            else if (motDePasseValid.test(motDePasse.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer des lettres majuscules et minuscules et au moins un chiffre pour votre mot de passe merci !");
                    }

       if (nomJure.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Nom merci !");
         
            }
            else if (nomValidJure.test(nomJure.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer uniquement des lettres pour votre Nom merci !");
                    }

        if (adresseJure.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Adresse merci !");
         
            }
            
        if (villeJure.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Ville merci !");

            }
            else if (villeValidJure.test(villeJure.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer uniquement des lettres pour votre Ville merci !");
                    }

        if (codePostalJure.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Code Postal merci !"); 
            }
            else if (codeValidJure.test(codePostalJure.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer uniquement 5 chiffres pour votre Code Postal merci !");
                    }
            
        if (mailJure.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Mail merci !");
            }
    }; 
    
    

