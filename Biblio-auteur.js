/**************** Profil auteur *********************************/


var formValidAuteur = document.getElementById("boutonEnvoi3");
var motDePasse = document.getElementById("passwordAuteur");
var nomAuteur = document.getElementById("NomAuteur");


var adresseAuteur = document.getElementById("AdresseAuteur");
var villeAuteur = document.getElementById("VilleAuteur");
var codePostalAuteur = document.getElementById("CodePostalAuteur");
var mailAuteur = document.getElementById("MailAuteur");
var nomOeuvre = document.getElementById("NomOeuvre");

var missPassword = document.getElementById("missPasswordAuteur");
var missNomAuteur = document.getElementById("missNomAuteur");
var missAdresseAuteur = document.getElementById("missAdresseAuteur");
var missVilleAuteur= document.getElementById("missVilleAuteur");
var missPostalAuteur = document.getElementById("missPostalAuteur");
var missMailAuteur = document.getElementById("missMailAuteur");
var missNomOeuvre = document.getElementById("missNomOeuvre");
var nomValidAuteur = /^[a-zA-Z]+/;
var villeValidAuteur = /^[a-zA-Z]+/;
var codeValidAuteur =/^[0-9]{5}/;

var motDePasseValidAuteur = /^[a-zA-Z0-9]{10,12}/;

    

    boutonEnvoi3.addEventListener("click", validationAuteur);

    function validationAuteur(event)
    {
        if (motDePasse.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Mot de Passe merci ! ");
         
            }
            else if (motDePasseValidAuteur.test(motDePasse.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer des lettres majuscules et minuscules et au moins un chiffre pour votre mot de passe merci !");
                    }

       if (nomAuteur.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Nom merci !");
         
            }
            else if (nomValidAuteur.test(nomAuteur.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer uniquement des lettres pour votre Nom merci !");
                    }

        if (adresseAuteur.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Adresse merci !");
         
            }
            
        if (villeAuteur.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Ville merci !");

            }
            else if (villeValidAuteur.test(villeAuteur.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer uniquement des lettres pour votre Ville merci !");
                    }

        if (codePostalAuteur.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Code Postal merci !"); 
            }
            else if (codeValidAuteur.test(codePostalAuteur.value) == false)
                    {
                        event.preventDefault();
                        alert("Veuillez rentrer uniquement 5 chiffres pour votre Code Postal merci !");
                    }
            
        if (mailAuteur.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner votre Mail merci !");
            }

        if (nomOeuvre.validity.valueMissing)
            {
                event.preventDefault();
                alert("Veuillez renseigner le nom de l'oeuvre merci !");
         
            }
        
            
            function validationBox()
            {
                var but = document.getElementById('butt');
                var action = but.value;
                var checkboxes = document.getElementsByTagName('check');
                
                if(action==1)
                    {
                        alert("votre choix sera bien pris en compte merci !");

                            for (var i = 0; i < checkboxes.length; i++) 
                            {
                                if (checkboxes[i].type == 'checkbox')
                                    {
                                    checkboxes[i].checked = true;
                                    }
                            }
                                but.value=0;
                    }
                    
                    else
                        {
                        alert("Veuillez sélectionner une case merci !");

                            for (var i = 0; i < checkboxes.length; i++) 
                            {
                                if (checkboxes[i].type == 'checkbox') 
                                    {
                                    checkboxes[i].checked = false;
                                    }
                            }
                      
                            but.value=1;
                        }
            };

            
    }; 