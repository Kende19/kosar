var termek1 = 9999
var termek2 = 14999
var termek3 = 39999

function kosarba(termek) {
    db=Number(prompt("Add meg, hogy mennyit szeretnél:"))
    localStorage.setItem(termek , db)
}

function torles() {
    localStorage.clear()
}

function kosar() {

    var lista = "<tr> <th> név:  </th> <th> db:  </th> <th> ár:  </th> </tr>"
    aru = localStorage.key(1)
    darab = localStorage.getItem(localStorage.key(1))
    ar = localStorage.key(1) 

    lista += "<tr> <th> " + aru + " </th> <th> " + darab + " </th> <th> " + ar + " </th> </tr>"


    document.getElementById('lista').innerHTML = lista

}