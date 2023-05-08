var modo = leerModoActual();
if(modo=="dia"){
  ponerModoDia();
}else{
  ponerModoNoche();
}
function leerModoActual() {
  let modo = window.localStorage.getItem("modoGuradado");
  if(!modo){
   modo = "dia";
  }
  return modo;
}

function ponerModoDia(){
let todo=document.getElementById("todo");
todo.style.color="black";
todo.style.backgroundColor="white";
let iconoDia = document.getElementById("dia");
iconoDia.style.display="none";
let iconoNoche = document.getElementById("noche");
iconoNoche.style.display="block";
}

function ponerModoNoche(){
  let todo=document.getElementById("todo");
  todo.style.color="white";
  todo.style.backgroundColor="black";
  let iconoNoche = document.getElementById("noche");
  iconoNoche.style.display="none";
  let iconoDia = document.getElementById("dia");
  iconoDia.style.display="block";
  }

