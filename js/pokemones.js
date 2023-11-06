var all = document.getElementById("all");
var ofens = document.getElementById("ofensivo");
var agil = document.getElementById("agil");
var defe = document.getElementById("defensivo");
var equi = document.getElementById("equilibrado");
var aux = document.getElementById("auxiliar");

// Selecciona todos los elementos con las clases correspondientes
var atackCards = document.querySelectorAll(".carta.atack");
var defCards = document.querySelectorAll(".carta.def");
var jgCards = document.querySelectorAll(".carta.jg");
var suppCards = document.querySelectorAll(".carta.supp");
var norCards = document.querySelectorAll(".carta.nor");

// Obtén una lista de todos los botones en la barra de navegación.
var buttons = document.querySelectorAll(".navpoke button");

all.addEventListener("click", function () {
    // Mostrar todas las cartas
    displayAllCards("flex");
});

ofens.addEventListener("click", function () {
    // Mostrar solo las cartas ofensivas
    displayAllCards("none");
    displayCards(atackCards, "flex");
});

agil.addEventListener("click", function () {
    // Mostrar solo las cartas ágiles
    displayAllCards("none");
    displayCards(jgCards, "flex");
});

defe.addEventListener("click", function () {
    // Mostrar solo las cartas defensivas
    displayAllCards("none");
    displayCards(defCards, "flex");
});

equi.addEventListener("click", function () {
    // Mostrar solo las cartas equilibradas
    displayAllCards("none");
    displayCards(norCards, "flex");
});

aux.addEventListener("click", function () {
    // Mostrar solo las cartas auxiliares
    displayAllCards("none");
    displayCards(suppCards, "flex");
});

function displayAllCards(displayValue) {
    // Muestra todas las cartas
    displayCards(atackCards, displayValue);
    displayCards(defCards, displayValue);
    displayCards(jgCards, displayValue);
    displayCards(suppCards, displayValue);
    displayCards(norCards, displayValue);
}

function displayCards(cards, displayValue) {
    // Cambia el estilo de las cartas en el arreglo
    cards.forEach(function (card) {
        card.style.display = displayValue;
    });
}

// Agrega un evento click a cada botón.
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Restablece el color de fondo de todos los botones.
        buttons.forEach(function (btn) {
            btn.style.backgroundColor = "#4C60A6";
        });

        // Establece el color de fondo del botón actual en #EDB313.
        button.style.backgroundColor = "#EDB313";
    });
});