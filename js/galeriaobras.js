let obras = [
  {titulo: "Earthly Delights 4.2", anio: "2025", imagen: "img/earthlydelights.jpg"},
  {titulo: "There's No Distance", anio: "2023", imagen: "img/theresnodistance.jpg"},
  {titulo: "Still Life (HSB E)", anio: "2023", imagen: "img/stilllife.jpg"},
  {titulo: "Process 14", anio: "2008", imagen: "img/process14.jpg"},
  {titulo: "Process 12", anio: "2006", imagen: "img/process12.jpg"}
];

let imagenObra = document.querySelector("#imgObra");
let tituloObra = document.querySelector("#nombreObra");
let anioObra = document.querySelector("#fechaObra");
let botonSiguiente = document.querySelector("#btnSiguiente");
let botonAnterior = document.querySelector("#btnAnterior");
let indiceObras = 0;

function mostrarObra() {
  imagenObra.src = obras[indiceObras].imagen;      
  tituloObra.innerText = obras[indiceObras].titulo;  
  anioObra.innerText = obras[indiceObras].anio;   
}

botonSiguiente.addEventListener('click', function(){
  indiceObras++;
  
  if (indiceObras === obras.length) {
    indiceObras = 0;   
  }
  
  mostrarObra();
});


botonAnterior.addEventListener('click', function(){
  indiceObras--;
  if (indiceObras === -1) {
    indiceObras = obras.length - 1;
  }
  mostrarObra();
});

mostrarObra(); // recomendo IA, para que no quede vacio al cagar la pagina por primera vez