/*
            //Exercice 1 :

alert("Bonjour!bienvenue sur mon site");



//Exo 2 :

var prenom = prompt("Quel est votre Prénom ?")
alert(prenom + " à 20 ans")



            //Exo 3 :

var age = prompt("Quel est ton âge ?")
if (n == 20) {
    alert("Tu as le bon âge")
} else if (n < 20) {
    alert("C'est plus grand")
} else {
    alert("C'est plus petit")
}



            //Exo 4 :

var n = prompt("Nombre compris entre 1 et 3");
while (n < 1 || n > 3) {
    n = prompt("Nombre compris entre 1 et 3")
}



            //Exo 5 :

var n = prompt("Nombre compris entre 10 et 20");
while (n < 10 || n > 20) {
    n = prompt("Nombre compris entre 10 et 20");
}
if (n < 10) {
    alert("Trop petit")
} else if (n > 20) {
    alert("Trop grand")
}



            //Exo 6 :

var n = prompt("Choisir un nombre");
var q = prompt("Choisir un nombre");
if (n > q) {
    alert(n + ">" + q)
} else {
    alert(q + ">" + n)
}



            //Exo 7 :

function degre(f) {
    var c = (5 / 9) * (f - 32)
    return c;
}

alert(degre(60));

function degre(c) {
    var f = (9 * c + (32 * 5)) / 5
    return f;
}

alert(degre(30));

OOOOUUUU

function degre(c) {
    return (9 * c + (32 * 5)) / 5
}




            //Exo 8 :

function da() {
    var x = prompt("Un nombre ?")
    for (i = 0; i <= x; i++) {
        console.log(i)
    }
    return;
}
da();



            //Exo 9 :

function da() {
    var x = prompt("Un nombre ?")
    for (i = x; i >= 0; i--) {
        console.log(i)
    }
    return;
}
da();

                


                //Exercice 10 (calculatrice) :

function add(a, b) {
    var c = a + b
    return c
}
var somme = add(1, 2)
alert(somme)

                //.... autre méthode du 10 :

function addition(a, b) {

    return (parseInt(a) + parseInt(b));
}

function soustraction(a, b) {

    return (parseInt(a) - parseInt(b));
}

function multi(a, b) {

    return (parseInt(a) * parseInt(b));
}

function division(a, b) {

    return (parseInt(a) / parseInt(b));
}
var a = prompt("Valeur 1 ?")
var b = prompt("Valeur 2 ?")
var x = prompt("+ - * /")
if (x == "+") {
    document.write(a + "+" + b + "=" + addition(a, b));
}
if (x == "-") {
    document.write(a + "-" + b + "=" + soustraction(a, b));
}
if (x == "*") {
    document.write(a + "*" + b + "=" + multi(a, b));
}
if (x == "/") {
    document.write(a + "/" + b + "=" + division(a, b));
}



            //Exo tableau (11) :

function tableau() {
    var tabl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for (i = 0; i < 10; i = i + 1) {
        console.log((tabl[i] * 10) + " " + i)
    }
}
tableau()

*/

//Exo 12 (événement) :

function BoutonClick() {
    alert("Tu as cliqué sur le bouton")
    alert("Bonjour");
}



//Exo 13 (événement) :

function okey() {
    alert("Bonjour visiteur !")
}

function ok() {
    alert("Au revoir visiteur !")
}


function yes() {
    alert("Arrête STP !")
}