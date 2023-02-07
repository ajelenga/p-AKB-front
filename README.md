# Nom du projet : AKB
**Partie Front - p-AKB-front**



# Description : 
Application de gestion de location d’automobile.Une entreprise qui possède un certain nombre de véhicules qui les met à la disposition des utilisateurs pour une location. Cette entreprise propose à des particuliers ou professionnels la possibilité de mettre en location leurs véhicules, à condition que leur véhicule respecte les critères pour autoriser leur location auprès de l'agence.

# clients:    
mettre leur bien en location - MEL
louer des véhicules - LV
# gestionnaires:
Administrateur
validateur
    -	consultation

# Fonctionnalités - US:
# Client : 
…je veux pouvoir créer un compte si je n’en possède pas un. 
accès page connexion 
case à cocher LV ou MEL
en fonction de la case cochée redirigée vers la page d’accueil de la case cochée précédent.

# Client page MEL : 
en tant que client ML je veux pouvoir me connecter afin d’accéder à mon compte
accès page d’accueil MEL 
CRUD gestion profil
CRUD gestion mise en location
		Client page LV : 

CRUD gestion profil
CRUD gestion pour la location

# Gestionnaire :
# Administrateur:
Connexion / CRUD gestionnaire.
Rôle inclus validateur 
validateur
Valider la mise en location.
Valider les locations (attente des justificatifs de pièces).
Site :
page d’accueil - barre de recherche - liste des véhicules dispo (3 derniers )
resultat recherche liste des véhicules en rapport avec les critères
bouton connexion
footer contacter nous informations sur l’entreprise


# Fonctionnalités détaillé - US:
Client  MEL
si un compte (déjà connecté)
mise en location: 
enregistrer mon véhicule (km - marque - modèle - plaque im- pays année- carburant - boite vitesse - nb porte - siège -  option- photo)
validation des critères (date - carte grise - assurance)
attente validation du validateur
si pas de compte 
formulaire de création compte (si formulaire création ko essayer avec autre pseudo)
enregistrer mon véhicule (km - marque - modèle - plaque im- pays année- carburant - boite vitesse - nb porte - siège -  option)
justificatif facture - PI  
validation des critères (cuation - carte grise - assurance - etat du véhicule)
attente validation du validateur
Client LV
si déjà connecté:
page d’accueil barre de recherche véhicule à louer
bouton switch client MEL pour mettre en location.
résultat recherche -> sélection véhicule choisi.
mes réservations
mon profil CRUD.

# Technologie:  
	IDE: intellij , github, dbeaver
# Back: spring , mysql
# Front: react html css bootstrap 



Boostrap : https://tailwindcss.com/

# Site de location de véhicule : 
	https://fr.getaround.com/

--mainColor: #e07b7b;
--mainColorLight: #ea1919;
--secondaryColor: #918b8b;
--textColor: #eee
— bleu : #
@import url('https://fonts.googleapis.com/css2?family=Sono:wght@511&display=swap');


*{
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'Sono', sans-serif;
}
