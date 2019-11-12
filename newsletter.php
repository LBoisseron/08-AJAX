<?php


$bdd = new PDO('mysql:host=localhost;dbname=newsletter2', 'root', '', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
]);

// on déclare que notre fichier va retourner du json
// pas obligatoire mais préférable
header('Content-Type: application/json');

// détecter la méthode POST
if (!empty($_POST)) {
    // récupération des données POST
    $email = $_POST['email'];
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];

    // vérification des données soumises par l'utilisateur
    $erreurs = [];

    // vérification du mail
        if(!empty($email)) {
            
            // vérification du format du mail
            if( filter_var($email, FILTER_VALIDATE_EMAIL)) {

                $query = $bdd->prepare('SELECT COUNT(id_abonn) FROM abonn WHERE email = :email');
                $query->bindvalue(':email', $email, PDO::PARAM_STR);
                $query->execute();

                $isEmailInBDD = $query->fetchColumn();
                if ($isEmailInBDD) {
                    $erreurs['isEmailInBDD'] = true;

                } else {
                    $query = $bdd->prepare('INSERT INTO abonn (email, prenom, nom) VALUES (:email, :prenom, :nom)');
                    $query->bindvalue(':email', $email, PDO::PARAM_STR);
                    $query->bindvalue(':prenom', $prenom, PDO::PARAM_STR);
                    $query->bindvalue(':nom', $nom, PDO::PARAM_STR);
                    $query->execute();
                }
            } else {
                $erreurs['isEmailInvalid'] = true;
            }
        } else {
            $erreurs['isEmailEmpty'] = true;
        }

    // une fois notre traitement terminé, on va faire un retour à l'application
    if(empty($erreurs)) {
        // je retourne une réponse positive
        echo json_encode(['success' => true]);
    
    } else {
        // sinon, il y a eu des erreurs, je retourne les erreurs
        echo json_encode(['success' => false, 'errors' => $erreurs]);

    }
}
?>