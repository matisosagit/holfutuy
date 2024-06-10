var arrayimagenes = [
    ["Aldo Diaz", 15, "aldo diaz15.jpg"],
    ["Antonio Pacheco", 23, "antonio pacheco23.jpg"],
    ["Gastón Rodríguez", 19, "gaston rodriguez 19.jpg"],
    ["Gonzalo Bergessio", 25, "gonzalo bergessio25.jpg"],
    ["Héctor Acuña", 20, "hector acuña 20.jpg"],
    ["Ignacio Ramírez", 24, "ignacio ramirez24.jpg"],
    ["Iván Alonso", 23, "ivan alonso 23.jpg"],
    ["Juan Manuel Olivera", 18, "juan manuel olivera 18.jpeg"],
    ["Liber Quiñones", 12, "liber quiñones 12.jpeg"],
    ["Maureen Franco", 25, "maureen franco 25.jpg"],
    ["Maximiliano Silvera",21 , "maximiliano silvera21.jpg"],
    ["Pedro Cardozo", 11, "pedro cardoso 11.jpeg"],
    ["Santiago García",23 , "santiago garcia 23.jpeg"],
    ["Sergio Blanco", 14, "sergio blanco 14.jpg"],
    ["Thiago Borbas", 18, "thiago borbas18.jpeg"],
    ["Christian Stuani", 19, "stuani.jpg"],
    ["Pablo Granoche", 16, "granoche.jpg"],
    ["Alexander Medina", 26, "medina.jpg"],
    ["Germán Hornos",25, "hornos.jpeg"],
    ["Eliomar Marcon", 21, "eliomar.jpg"],
    ["Javier Chevantón", 33, "javier.jpg"],
    ["Gabriel Alve", 24, "gabriel.jpeg"],
    ["Martín Rodríguez", 13, "martin.jpg"],
    ["Pablo Bengoechea", 10, "bengoechea.jpg"],
    ["Juan González", 16, "juan.jpg"],
    ["Darío Silva", 19, "dario.jpeg"],
    ["Wilmar Cabrera", 12, "wilmar.jpg"],
    ["Julio Dely", 16, "dely.jpg"],
    ["Adolfo Barán", 13, "barán.jpg"],
    ["Johnny Miqueiro", 7, "miqueiro.jpg"]
];



document.getElementById("jugar").addEventListener("click", jugar);
document.getElementById("volver").addEventListener("click", volver);
document.getElementById("mayor").addEventListener("click", mayor);
document.getElementById("menor").addEventListener("click", menor);

var i, j, imgSrc, imgElement1, texto1, tt1, g1, imgSrc2, imgElement2, texto2, tt2, g2, puntaje = 0;
var preguntaActual = 0;
var puntaje = 0;
function seleccionarIndices() {
    i = Math.floor(Math.random() * arraycopia.length);
    do {
        j = Math.floor(Math.random() * arraycopia.length);
    } while (i === j);
}

function jugar() {
    arraycopia = [...arrayimagenes];
    seleccionarIndices();

    imgSrc = arraycopia[i][2];
    imgElement1 = document.getElementById("img1");
    texto1 = arraycopia[i][0];
    tt1 = document.getElementById("txt1");
    g1 = arraycopia[i][1];

    imgSrc2 = arraycopia[j][2];
    imgElement2 = document.getElementById("img2");
    texto2 = arraycopia[j][0];
    tt2 = document.getElementById("txt2");
    g2 = arraycopia[j][1];

    document.getElementById("inicio").style.display = "none";
    document.getElementById("maain").style.display = "flex";
    document.getElementById("abc").style.display = "flex";

    imgElement1.src = imgSrc;
    tt1.innerText = texto1 + " hizo: " + g1 + " goles";

    imgElement2.src = imgSrc2;
    tt2.innerText = texto2 + " hizo: ";

    arraycopia.splice(i, 1);
}

function volver() {
    arraycopia = [...arrayimagenes];
    document.getElementById("inicio").style.display = "block";
    document.getElementById("maain").style.display = "none";
    document.getElementById("abc").style.display = "none";
    document.getElementById("fin").style.display = "none";
    puntaje = 0;
    seleccionarIndices();
    actualizarElementos();
}

function terminarjuego() {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("maain").style.display = "none";
    document.getElementById("abc").style.display = "none";
    document.getElementById("puntuacion").innerText = "Tu puntuación es: " + puntaje;
    document.getElementById("fin").style.display = "block";
}

function actualizarElementos() {
    imgSrc = arraycopia[i][2];
    imgElement1.src = imgSrc;
    texto1 = arraycopia[i][0];
    tt1.innerText = texto1 + " hizo: " + g1 + " goles";

    imgSrc2 = arraycopia[j][2];
    imgElement2.src = imgSrc2;
    texto2 = arraycopia[j][0];
    tt2.innerText = texto2 + " hizo: " + g2 + " goles";
}

function mayor() {
    if ( (g2 >= g1) && (arraycopia.length > 0)) {
        imgElement1.src = imgSrc2;
        tt1.innerText = texto2 + " hizo: " + g2 + " goles";
        g1 = g2;
        puntaje++;

        var m = Math.floor(Math.random() * arraycopia.length);
        imgSrc2 = arraycopia[m][2];
        imgElement2.src = imgSrc2;
        texto2 = arraycopia[m][0];
        tt2.innerText = texto2 + " hizo:";
        g2 = arraycopia[m][1];
        arraycopia.splice(m, 1);
    } else {
        terminarjuego();
    }
}

function menor() {
    if ((g2 <= g1) && (arraycopia.length > 0)) {
        imgElement1.src = imgSrc2;
        tt1.innerText = texto2 + " hizo: " + g2 + " goles";
        g1 = g2;
        puntaje++;

        var m = Math.floor(Math.random() * arraycopia.length);
        imgSrc2 = arraycopia[m][2];
        imgElement2.src = imgSrc2;
        texto2 = arraycopia[m][0];
        tt2.innerText = texto2 + " hizo:";
        g2 = arraycopia[m][1];
        arraycopia.splice(m, 1);
    } else {
        terminarjuego();
    }
}