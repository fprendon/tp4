/*TP4: Alumnos
Ingresar un listado de nombres de alumnos por pantalla. Cada vez que se ingresa un nuevo usuario, preguntar si se quiere ingresar otro utilizando la función "Confirm". En caso de que el usuario no quiera ingresar otro alumno, mostrar los siguientes resultados por consola:
•	Indicar la cantidad de alumnos que se ingresaron
•	Preguntar si "Maradona" vino a la clase. Hacerlo con otra función que tome un array como parámetro y retorne true o false dependiendo si lo encontró
•	Mostrar el listado de alumnos por pantalla.
*/
function agregarAlumnos(){

  var alumnos = [];
  var alumnoNuevo = prompt ("Ingrese un nuevo alumno por favor");
  alumnos.push(alumnoNuevo);

  var masAlumnos = confirm ("Quiere ingresar mas alumnos?")

  while (masAlumnos === true) {
    alumnoNuevo = prompt ("Ingrese un nuevo alumno por favor");
    alumnos.push(alumnoNuevo);
    masAlumnos = confirm ("Quiere agregar mas alumnos?")
  }
  console.log(alumnos);
  return alumnos;
}


function vinoDiego(alumnos){
  for (var i = 0; i < alumnos.length; i++) {
    if (alumnos[i].toUpperCase() === "MARADONA") {
      return true;
    }
  }
  return false;
}

var alumnosIngresados = agregarAlumnos();
console.log(alumnosIngresados);
var vino = vinoDiego(alumnosIngresados);
console.log(vino);
