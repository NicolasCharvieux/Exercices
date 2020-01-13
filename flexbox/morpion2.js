function changeCouleur(id) {
    switch (id) {
        case '1':
            document.getElementById(id).innerHTML = 'X';
            break;
        case '2':
            document.getElementById(id).innerHTML = 'X';
            break;
        case '3':
            document.getElementById(id).innerHTML = 'X';
            break;
        case '4':
            document.getElementById(id).innerHTML = 'X';
            break;
        case '5':
            document.getElementById(id).innerHTML = 'X';
            break;
        case '6':
            document.getElementById(id).innerHTML = 'X';
            break;
        case '7':
            document.getElementById(id).innerHTML = 'X';
            break;
        case '8':
            document.getElementById(id).innerHTML = 'X';
            break;
        case '9':
            document.getElementById(id).innerHTML = 'X';
            break;

        default:
            console.log('Mauvais choix');
    } /*fin switch*/

    adversaire(id);
}


/* Fonction selection de case Adversaire*/
function adversaire(id) {
    var bool = true;
    var tableau = [];
    tableau.push(id);

    while (bool == true) {
        var nb = Math.floor(Math.random() * 9);
        var caseAdversaire = 'case' + nb;

        for (var indice in tableau) {
            if (caseAdversaire != tableau[indice]) {
                document.getElementById(caseAdversaire).innerHTML = 'O';
                bool = false;
            }
        }
    }
    tableau.push(caseAdversaire);
}