Projet Deezer Playlist
Ce projet vise à créer une application permettant de rechercher et de créer des playlists à partir de l'API Deezer. L'application est divisée en deux parties : le front-end et le back-end.

Installation et exécution du front-end
Naviguez vers le dossier deezer-playlist-app/cors-anywhere dans votre terminal.
Exécutez la commande node server.js pour démarrer le serveur local permettant d'accéder à l'API Deezer via CORS.
Ouvrez un autre terminal et naviguez vers le dossier deezer-playlist-app.
Exécutez la commande npm install pour installer les dépendances.
Ensuite, lancez l'application en exécutant ng serve.
L'application front-end devrait être accessible à l'adresse http://localhost:4200.
Installation et exécution du back-end
Importez la base de données tbs.sql située dans le dossier du projet TBS.
Ouvrez votre terminal et naviguez vers le dossier racine du projet Symfony.
Exécutez la commande composer install pour installer les dépendances.
Configurez votre base de données dans le fichier .env.
Lancez le serveur Symfony en exécutant php bin/console server:run.
Votre serveur back-end Symfony devrait être accessible à l'adresse http://localhost:8000.
Tests unitaires
Des tests unitaires sont disponibles pour les parties front-end et back-end.

Front-end
Les tests unitaires du front-end peuvent être exécutés en naviguant vers le dossier deezer-playlist-app et en exécutant npm run test.
Back-end
Les tests unitaires du back-end peuvent être exécutés en naviguant vers le dossier racine du projet Symfony et en exécutant php bin/phpunit.
Utilisation de Postman
Vous pouvez également tester les fonctionnalités de l'API en utilisant Postman. Voici les endpoints disponibles :

GET /subscription/{idContact} : Récupérer les abonnements d'un contact.
POST /subscription : Créer un nouvel abonnement.
PUT /subscription/{idSubscription} : Mettre à jour un abonnement existant.
DELETE /subscription/{idSubscription} : Supprimer un abonnement.