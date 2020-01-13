var color = "red"

function changeCouleur(id) {
    var x = document.getElementById(id)

    if (x.style.backgroundColor == "red") {

    } else if (x.style.backgroundColor == "black") {

    } else {
        if (color == "red") {
            x.style.backgroundColor = "black"
            color = "black"
        } else {
            x.style.backgroundColor = "red"
            color = "red"
        }
    }
}