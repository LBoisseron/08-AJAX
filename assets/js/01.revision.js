// -- déclarer un tableau indexé
const Prenoms = ['Léna', 'Gérard', 'Khélian', 'Khénaël']

// -- aperçu dans la console
console.log(Prenoms);

// -- le nombre d'éléments du tableau ?
const nbElementDansMonTableau = Prenoms.length;
console.log(nbElementDansMonTableau);

// -- récupérer la valeur d'un élément
console.log(Prenoms[1]);

let i = 2;
console.log(Prenoms[i]);

// boucle permettant d'afficher dans la console les prénoms
for(let i = 0 ; i < nbElementDansMonTableau ; i++) {
    // -- tout ce qui est situé à l'intérieur des accolades sera dans la boucle
    console.log(Prenoms[i]);
}

// -- révision avec les objets
const Contact = {
    prenom : 'Léna',
    nom    : 'BOISSERON',
    tel    : '690424043'
};
console.log(Contact);

// -- pour récupérer les valeurs d'un objet, j'utilise le "." suivi de l'indice
console.log('Prénom : ' + Contact.prenom);
console.log('Nom : ' + Contact.nom);
console.log('Tel : ' + Contact.tel);

const Contacts = [
    {
        prenom : 'Léna',
        nom    : 'BOISSERON',
        tel    : '690424043' 
    },
    {
        prenom : 'Gérard',
        nom    : 'SELBONNE',
        tel    : '690716507'
    },
    {
        prenom : 'Khélian',
        nom    : 'SELBONNE',
        tel    : '590927955'
    },
    {
        prenom : 'Khénaël',
        nom    : 'SELBONNE',
        tel    : '590227374'
    },
];
console.clear();
console.log(Contacts);

// -- pour récupérer mon objet
console.log(Contacts[3]);
console.log(Contacts[3].prenom);
console.log(Contacts[3].nom);
console.log(Contacts[3].tel);

// -- en résumé, j'accède à la valeur de l'indice "prenom" de l'objet situé à l'index 3 de mon tableau indexé "Contacts"

const Familia = [
    {prenom: "Léna", nom: "BOISSERON", orientation: "Maman"},
    {prenom: "Gérard", nom: "SELBONNE", orientation: "Papa"},
    {prenom: "Khélian", nom: "SELBONNE", orientation: "Grand Frère"},
    {prenom: "Khénaël", nom: "SELBONNE", orientation: "Petit Frère"},
];
console.log(Familia);


/* ------------------------------------------------------
|       ~ ~ ~ ~    💀  EXERCICE 😜     ~ ~ ~ ~          |
|                                                        |  
|                                                        |  
|  Affichez dans la page HTML à l'aide de jQuery la      | 
|  liste (ul>li) des Etudiants et leur compétence.       | 
|                                                        | 
|_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  */





$(function() {

    // Ici, jQuery est prêt à travailler !
    console.log( 'jQuery is ready to rock !' );

    // Création d'une balise <ul></ul>
    const ul = $('<ul>');

    for( let i = 0 ; i < Familia.length ; i++ ) {

        // -- Je récupère l'étudiant en cours dans ma boucle.
        let Familiaa = Familia[i];

        // Aperçu dans la console.
        console.log( Familiaa );

        $(`
            <li>
                <strong> ${Familiaa.prenom} ${Familiaa.nom} </strong>
                : ${Familiaa.orientation}
            </li>
        `).appendTo( ul );

    } // Fin boucle For

    ul.appendTo( $('body') );

}); 