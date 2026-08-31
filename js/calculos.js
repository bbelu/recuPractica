let inputCantidad = document.querySelector("#cantidad");
let inputHoras = document.querySelector("#horasPordia");
let inputHonorario = document.querySelector("#honorarioHora");
let btnIniciar = document.querySelector("#btnIniciar");


let inputNombreInst = document.querySelector("#nombreInst");
let inputCantPersonas = document.querySelector("#cantPersonas");
let inputCantDias = document.querySelector("#cantDias");
let btnAgregarInstalacion = document.querySelector("#btnAgregarInstalacion");

let btnCalcular = document.querySelector("#btnCalcular");
let resulCostDia = document.querySelector("#resulCostDia");
let maxDiaCost = document.querySelector("#maxDiaCost");
let porcentCosto = document.querySelector("#porcentCosto");
let btnReiniciar = document.querySelector("#btnReiniciar");


let instalaciones = [];        // array vacío, se va llenando con objetos
let horasPorDia;                // se asigna en btnIniciar
let honorarioPorHora;           // se asigna en btnIniciar
let cantidadInstalaciones;      // se asigna en btnIniciar

