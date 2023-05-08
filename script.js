var modo = leerModoActual();
if(modo=="dia"){
  ponerModoDia();
}else{
  ponerModoNoche();
}
function leerModoActual() {
  window.localStorage.setItem("modoGuardado");
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

function toggleDarkMode() {
  var body = document.body;

  var estilos = document.getElementById("estilos");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    estilos.href = "estilos.css";
    document.getElementById("imagen-noche").style.display = "none";
    document.getElementById("imagen-dia").style.display = "block";
  } else {
    body.classList.add("dark-mode");
    estilos.href = "estilos-noche.css";
    document.getElementById("imagen-dia").style.display = "none";
    document.getElementById("imagen-noche").style.display = "block";
  }
}