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

function habilitarDeshabilitar(elemento, estado) {
  elemento.disabled = estado;
}



btnIniciar.addEventListener('click', function(){
  let cantidadIngresada = Number(inputCantidad.value);
  let horasIngresadas = Number(inputHoras.value);
  let honorarioIngresado = Number(inputHonorario.value);

  if (isNaN(cantidadIngresada) || cantidadIngresada <= 0) {
    alert("Porfavor, ingrese datos validos.");
    return;
  }

  if (isNaN(horasIngresadas) || horasIngresadas <= 0) {
    alert("Porfavor, ingrese datos validos.");
    return;
  }

   if (isNaN(honorarioIngresado) || honorarioIngresado <= 0) {
    alert("Porfavor, ingrese datos validos.");
    return;
  }

  cantidadInstalaciones = cantidadIngresada;
  horasPorDia = horasIngresadas;
  honorarioPorHora = honorarioIngresado;

    habilitarDeshabilitar(inputCantidad, true);   // lo deshabilita
    habilitarDeshabilitar(inputNombreInst, false); // lo habilita
    habilitarDeshabilitar(inputHoras, true);   // lo deshabilita
    habilitarDeshabilitar(inputCantPersonas, false); // lo habilita
    habilitarDeshabilitar(inputHonorario, true);   // lo deshabilita
    habilitarDeshabilitar(inputCantDias, false); // lo habilita
    habilitarDeshabilitar(btnIniciar, true);   // lo deshabilita
    habilitarDeshabilitar(btnAgregarInstalacion, false); // lo habilita
});


btnAgregarInstalacion.addEventListener('click', function(){
  
  let nombreIngresado = inputNombreInst.value;
  let personasIngresadas = Number(inputCantPersonas.value);
  let diasIngresados = Number(inputCantDias.value);


   if (nombreIngresado.length < 3 || nombreIngresado.length > 50) {
    alert("El nombre debe tener entre 3 y 50 caracteres.");
    return;
  }

  if (isNaN(personasIngresadas) || personasIngresadas <= 0) {
    alert("Por favor, ingrese una cantidad de personas válida.");
    return;
  }

  if (isNaN(diasIngresados) || diasIngresados <= 0) {
    alert("Por favor, ingrese una cantidad de días válida.");
    return;
  }

    let nuevaInstalacion = {
    nombre: nombreIngresado,
    personas: personasIngresadas,
    dias: diasIngresados
  };

    instalaciones.push(nuevaInstalacion);
    inputNombreInst.value = "";
    inputCantPersonas.value = "";
    inputCantDias.value = "";

    if (instalaciones.length === cantidadInstalaciones) {
    habilitarDeshabilitar(inputNombreInst, true);
    habilitarDeshabilitar(inputCantPersonas, true);
    habilitarDeshabilitar(inputCantDias, true);
    habilitarDeshabilitar(btnAgregarInstalacion, true);
    habilitarDeshabilitar(btnCalcular, false);
    habilitarDeshabilitar(btnReiniciar, false);
}
  

});


btnCalcular.addEventListener('click', function(){
  
  let totalPersonas = 0;
  for (let i = 0; i < instalaciones.length; i++) {
    totalPersonas = totalPersonas + instalaciones[i].personas;
  }
  let costoDia = horasPorDia * honorarioPorHora * totalPersonas;

  let instalacionMax = instalaciones[0]; 

    for (let i = 1; i < instalaciones.length; i++) {
  if (instalaciones[i].dias > instalacionMax.dias) {
    instalacionMax = instalaciones[i];
  }
}

});