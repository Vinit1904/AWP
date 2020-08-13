//=============Query Selecto==================

function HandleMouseOver() {
    let newele = document.querySelector(".container");
    newele.style.background = "red";


}

function HandleMouseDown() {
    let ele = document.querySelector(".container");

    ele.style.background = "green";
}


//=========================ID Selector========================

function HandleMouseOver1() {
    let newele = document.querySelector("#f001");
    newele.style.background = "yellow";


}

function HandleMouseDown1() {

    let ele = document.querySelector("#f001");

    ele.style.background = "green";
}

//=========================div selector=========================


function HandleMouseOver2() {
    let newele = document.querySelector("div").children[2];

    newele.style.background = "blue";


}

function HandleMouseDown2() {

    let ele = document.querySelector("div").children[2];;

    ele.style.background = "green";
}
