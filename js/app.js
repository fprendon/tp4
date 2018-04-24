/*console.log("hola")

var nombre = "Iron man";
consoloe.log(nombre);
var edad = 20;
console.log(edad);

var edad2 = "32";
console.log(edad2);

var dia = prompt ("ingrese un dia de la semana");
var texto = dia + " es un lindo para programar"
console.log(texto)

var perro = "Boxer";
console.log(typeof perro);

var numero = prompt ("ingrese un numero")
console.log(typeof numero);
numero = parseInt (numero);
console.log(typeof numeroparse);
var suma = numeroparse + 10;

numero += 10;

console.log(suma);

var proposicion = true;
var proposicion2 = false;
console.log(typeof proposicion);

// && //esto es la conjuncion y
// || //esto es la conjuncion o
// ! // esto es el no

var condicion= false ;

if (cond) {
  console.log("la proposicion es verdadera");
}
else {
  console.log("la proposicion es falsa");
}

var edad = prompt ("Cuantos años tiene?");
edad = parseInt (edad);
if (edad < 16) {
  console.log("Usted no puede votar");
}
else {
  console.log("Usted puede votar");
};

var num = prompt ("Ingrese un numero");
var num2 = prompt ("Ingrese un numero");
console.log(parseInt(num) + parseInt(num2));


// Funciones
var numero = parseInt(prompt ("Ingrese un numero"));

function sumar10 (num) {
  num += 10;
  console.log(num);
}

sumar10 (20); //parametro

console.log("hola".length);

function contar (palabra){
  console.log(palabra.length);
};
var palabra = prompt ("ingrese una palabra")
contar ("hola");

scope;

"use strict"; //no permite variables globales

var numero1 = parseInt (prompt("ingrese un numero"));
var numero2 = parseInt (prompt("ingrese un numero"));

function  sumarnumeros (num1 , num2){
  var suma = num1 + num2;
  console.log(suma);
}

sumarnumeros(numero1, numero2);

var nombre = prompt ("Ingrese el nombre del usuario");
var edad = prompt ("Ingrese edad del usuario");
console.log( nombre + " tiene " + edad + " años");

for (var i = 0; i < 3; i++) {
  var nombre = prompt ("Ingrese el nombre del usuario");
  var edad = prompt ("Ingrese edad del usuario");
  console.log( nombre + " tiene " + edad + " años");
}

var animales = ["burro","gato","perro"];
console.log(animales);
console.log(animales[4]);

for (var i = 0; i < animales.length; i++) {
  console.log("hola");
  console.log(array[i]);
}

function recorrerarray (arrayarecorrer) {
  for (var i = 0; i < arrayarecorrer.length; i++) {
   arrayarecorrer[i]
  }
}
var animales =["burro","gato", "unicornio"]

recorrerarray (animales);

/*

EJERCICIO N°1
"Dado el siguiente Array, informar por pantalla si se
encontró algun elemento que no sea un string y en que posición está"



var animales = ['Perro','Gato','Ratón','Loro','Aguila', 45873,'Ballena','Tiburón','Oso'];

for (var i = 0; i < animales.length; i++) {
  if (typeof animales[i] != "string") {
    console.log("Esto no es una string y esta en la posición " + i)
  }
}

/*

EJERCICIO N°3

Dado el siguiente array, encontrar si tiene el valor "-"
reemplazarlo por "valor vacío".
Al finalizar el programa, mostrar el array
e indicar la cantidad de veces que el valor
fue reemplazado.



var continentes = ['Asia','America','Europa','-','Oceanía','Africa','-','Antártida'];
var paises = ["Argnetina" , "Colombia", "Peru" , "Alemania"];
function reemplazarGuiones (arrayConGuiones) {
var contador = 0
for (var i = 0; i < arrayConGuiones.length; i++) {
  if (continentes[i] == "-") {
  console.log("valor vacio");
  contador ++;
  }
}
}
console.log(continentes);
console.log("Cantidad de vacios es " + contador);

var animales = ['Perro','Gato','Ratón','Loro','Aguila', 45873,'Ballena','Tiburón','Oso'];
for (var i = 0; i < animales.length; i++) {
  console.log(animales[i]);
  break;
}

var animales = ['Perro','Gato','Ratón','Loro','Aguila', 45873,'Ballena','Tiburón','Oso'];
for (var i = 0; i < animales.length; i++) {
  console.log(animales[i]);
  continue;
}


EJERCICIO N°4
"Crear una funcion que se llame "construirSaludo" la cual reciba un nombre y un día ingresado por pantalla.
Luego crear una función "mostrarMensaje" que reciba el mensaje creado y lo muestre por pantalla y por consola."
(function () {
 function construirSaludo (nombre, dia) {
  var mensaje = "Hola" + nombre + ". Hoy es" + dia;
  return mensaje;
}

function mostrarMensaje (mensaje) {
  console.log(mensaje);
}

var nombreIngresado = prompt ("Por favor ingrese su nombre")
var diaIngrsado = prompt ("Ahora ingrese el dia de hoy");

var mensajeCreado = construirSaludo(nombreIngresado,diaIngrsado);

mostrarMensaje (mensajeCreado);
})()

(function () {
  var nombre = "Carlos";
  var edad = 12;

  while (edad < 18) {
    console.log("Que siga la fiesta");
  }
  console.log("Se acabo la fiesta");
})()

(function () {
  var mayorEdad;

  var nombreAlumno = prompt ("Por favor ingrese el nombre de algun alumno")
  var edad = parseInt(prompt ("Por favor ingrese la edad del alumno"))
  var mayorEdad = edadAlumno
  var ingresarNuevo = confirm ("Quiere ingresar un nuevo alumno?")

  console.log(nombreAlumno,edadAlumno);

  while (ingresarNuevo === true) {
    nombreAlumno = prompt ("Por favor ingrese el nombre del alumno")
    edadAlumno = parseInt(prompt ("Por favor ingrese edad del alumno"))

    if (mayorEdad < edadAlumno) {
      mayorEdad=edadAlumno
    }
    ingresarNuevo = confirm ("QUiere ingresar un nuevo alumno")
  }
  console.log("fin del programa");


  EJERCICIO N°9
  "Realizar una funcion que tome un array como parametro
  y muestre por pantalla la cantidad de elementos tipo number,
  la cantidad de elementos tipo string y la cantidad de elementos tipo boolean.
  Luego llamar a la funcion con 3 arrays distintos."


(function (){
  "use strict";
  var array1 = [123,'azul',true,false,'verde','gris'];
  var array2 = ['azul','gris'];
  var array3 = [];

  function  contarTipos (arrayARecorrer){
    var cantStrings= 0;
    var cantNumeros = 0;
    var cantBooleanos = 0;

    for (var i = 0; i < arrayARecorrer.length; i++) {
      if (typeof arrayARecorrer[i] === "string") {
            cantStrings++;
      }
      else if (typeof arrayARecorrer[i] === "number") {
            cantNumeros++;
          }
      else if (typeof arrayARecorrer[i] === "boolean"){
            cantBooleanos++;
          }
      }
    }
    console.log("La cantidad de booleanos es " + cantBooleanos);
    console.log("La cantidad de numeros es " + cantNumeros);
    console.log("La cantidad de strings es " + cantStrings);
  }
  contarTipos(array1);
  contarTipos(array2);
  contarTipos(array3);

var colores = []
function

*/
/*
EJERCICIO N°7

Dado el siguiente array, insertar el valor "Ford"
exactamente en la mitad del array
Sin reemplazar ninguna posicion del mismo.


(function(){
  var marcas = ['Ferrari','Audi','Nissan','Kia'];
  var marcas2 = [];
  var elemento;

  for (var i = 0; i < 2; i++) {
    elemento = marcas.pop();
    marcas2.push(elemento);
  }
marcas.push("ford");

  for (var i = 0; i < marcas2.length; i++) {
    elemento =  marcas2.pop()
    marcas.push(elemento);
  }
  console.log(marcas);
})


  for (var i = 0; i < apellidos.length; i++) {
    apellidos[i]
    for (var j = 0; j < colores.length; i++) {
      if (apellidos[i] === colores[j]) {
        console.log("es igual");
        break;
      }
    }
  }
*/
/*
objetos

var cancion = {
  id: "1232321",
  letra: "locura",
  autor: "babasonicos",
  var persona = {
  	nombre: "Bart",
  	apellido: "Simpson",
  	edad: 10,
  	altura: 1.3,
  	colorDePelo: "Rubio",
  	getNombre: function () {
  		console.log(this.nombre);
  	},
  	setNombre: function (nuevoNombre) {
  		this.nombre = nuevoNombre;
  	}
  }

  var persona = {
  	nombre: "Bart",
  	apellido: "Simpson",
  	edad: 10,
  	altura: 1.3,
  	colorDePelo: "Rubio",
  	getNombre: function () {
  		console.log(this.nombre);
  	},
    getAltura:function () {
  		console.log(this.altura > 1.5);
  	},
    getEdad: function () {
  		console.log(this.edad);
  	},
    getPelo:function () {
  		console.log(this.colorDePelo);
  	},
  }

*/

/*
EJERCICIO
Hacer un objeto que represente un Auto
	Debera tener las propiedades color, modelo, patente, marca, prendido,
	velocidad y velocidad maxima;
	Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
	Por lo tanto mediante el metodo acelerar tendra que ir aumentando
	la propiedad velocidad en 10 hasta llegar a la velocidad maxima.


var autoCrear = (function  (){
  var auto = {
    prendido: false,
    marca: "Volkswagen",
    modelo: "Bora",
    color: "Bordo",
    velocidad:0,
    velocidadMaxima:60,
    encender: function(){
      if (this.prendido === true) {
        console.log("Ya esta prendido amigo");
      }
      else {
        this.prendido = true;
        console.log(this.prendido);
      }
    },
    acelerar: function(){
      if (this.prendido === true) {
        if (this.velocidad < this.velocidadMaxima ) {
          this.velocidad = this.velocidad + 10;
        }
      }
      else {
        console.log("Flaco, prende el auto");
      }
    },
    mostrarVelocidadActual: function(){
      return this.velocidad;
      console.log(this.velocidad);
    },
    frenar: function (){
      if (this.velocidad > 0) {
        this.velocidad = this.velocidad - 10;
        console.log(this.velocidad);
      }
    },
    apagar: function(){
      this.prendido = false;
      this.velocidad = 0;
      console.log(this.prendido);
    },
  }
  return auto;
}) ()
*/
/*

EJERCICIO N°5
"Crear un objeto llamado partidoDeFutbol, el cual tenga las propiedades id (numero),
jugadoresEquipo1 (array), jugadoresEquipo2 (array), golesEquipo1 (numero), golesEquipo2 (numero).
- Deberá tener 1 metodo golEquipo1 y otro golEquipo2 que sumará 1 a los goles del equipo especificado.
- Crear otro metodo que muestre por pantalla como salió el partido.
- hacer un metodo para agregar jugadores.

*/

/*
var crearPartido = (function (){
  var partidoDeFutbol= {
    id: 10,
    jugadoresEquipo1:[],
    jugadoresEquipo2:[],
    golesEquipo1: 0,
    golesEquipo2: 0,
    golEquipo1: function(){
      this.golesEquipo1 = this.golesEquipo1 + 1
    },
    golEquipo2: function(){
      this.golesEquipo2 = this.golesEquipo2 + 1
    },
    sumarJugadorE1: function(nuevoJugador){
      if (this.jugadoresEquipo1.length < 5) {
      this.jugadoresEquipo1.push("Jugador "+ nuevoJugador)
      }
    },
    sumarJugadorE2: function(nuevoJugador){
      if (this.jugadoresEquipo2.length < 5) {
      this.jugadoresEquipo2.push("Jugador "+ nuevoJugador)
      }
    },
  }
  if (this.golesEquipo1 > this.golesEquipo2) {
    console.log("Gano Equipo 1");
  }
  else if (this.golesEquipo1 < this.golesEquipo2) {
    console.log("Gano Equipo 2");
  }
  else {
    console.log("Empataron");
  };

  return partidoDeFutbol;
})()
 */
/*
 var Diario = (function () {
   var noticias = [
     {id:2, titulo: "Maradona desaparece", descripcion: "Ya era hora"}
 ];
   return {
     getNoticias: function (){
      console.log(noticias);
    },
    crearNoticia: function (id, titulo, desc){
      var hayCoincidencias = False;
      for (var i = 0; i < noticias.length; i++) {
        if (noticias[i].id === id) {
          hayCoincidencias = true;
          break;
          }
        }
        if (hayCoincidencias ==== true) {
          console.log("ya hay una noticia creada con el id ingresado");
        }
        else {
          var noticia ={
            id:id,
            titulo:titulo,
            descripcion:descripcion
          }
        }
        noticia.push(noticias)
      }
    }

   }
 })()

 */

 /*

 EJERCICIO N°7


 Dado el objeto "gameOfThrones" realizar las siguientes funciones:

 1) "MostrarCasas": Muestra una lista de todas las casas disponibles.
 2) "mostrarRey": RETORNA el nombre del Rey de los 7 reinos
 3) "mostrarDescendencia": Mostrar el nombre de la casa y todos los hijos de casa una de las casas.
 4) "mayorDescendencia": RETORNA el nombre de la casa que tiene mas hijos.
 5) "agregarCasa": Agrega un nuevo objeto de casa de juegoDeTronos con todos sus parámetros

 Atención:
 - Todas las funciones reciben el objeto como parámetro

 *//*
"use strict"

 var juegoDeTronos = [
 	{
 		casa: "Stark",
 		residencia: "Winterfell",
 		Lord: "Eddard Stark",
 		Rango: "Guardián del Norte",
 		hijos: ["Brandon","Arya","Jon","Rickon","Sansa","Robert"]
 	},
 	{
 		casa: "Lannister",
 		resdencia: "Casterly Rock",
 		Lord: "Twin Lannister",
 		Rango: "Guardián del Oeste",
 		hijos: ["Jamie","Cercey","Tyrion"]
 	},
 	{
 		casa: "Baratheon",
 		residencia: "King's Landing",
 		Lord: "Robert Baratheon",
 		Rango: "Rey de los 7 reinos",
 		hijos: ["Jeoffrey","Tommen","Mircella"]
 	}
 ]

 function MostrarCasas(arrayDeCasa){
    for (var i = 0; i < juegoDeTronos.length; i++) {
      console.log(juegoDeTronos[i].casa)
    }
 }
 function mostrarRey(){
   for (var i = 0; i < juegoDeTronos.length; i++) {
     if (juegoDeTronos[i].Rango === "Rey de los 7 reinos") {
       return juegoDeTronos.Lord;
     }
   }
 }
 function mostrarDescendencia(arrayDeCasa){
   for (var i = 0; i < arrayDeCasa.length; i++) {
      for (var j = 0; j < arrayDeCasa[i].hijos.length; i++) {
        console.log(arrayDeCasa[i].hijos[j])
      }
   }
 }
 function mayorDescendencia(){
   for (var i = 0; i < juegoDeTronos.length; i++) {
     if (juegoDeTronos[0].hijos > juegoDeTronos[1].hijos && juegoDeTronos[0].hijos > juegoDeTronos[2].hijos) {
       console.log(juegoDeTronos.casa[0]);
     }
     else if (juegoDeTronos[1].hijos > juegoDeTronos[0].hijos && juegoDeTronos[1].hijos > juegoDeTronos[2].hijos) {
       console.log(juegoDeTronos.casa[1]);
     }
     else if (juegoDeTronos[2].hijos > juegoDeTronos[1].hijos && juegoDeTronos[2].hijos > juegoDeTronos[0].hijos) {
       console.log(juegoDeTronos.casa[2]);
     }
   }
 }
 function agregarCasa(casa, residencia, Lord, Rango, hijos){
   var nuevaCasa ={
     casa:casa,
     residencia:residencia,
     Lord:Lord:,
     Rango:Rango,
     hijos:hijos,
   }
   return nuevaCasa;
 }

 function mostrarPropiedades (objetoARecorrer) {
   for (var key in objetoARecorrer) {
       objetoARecorrer[key]
   }
 }

 */
/*
var edades = [4,8,32,54,16,28];
edades.sort(
  function(a,b){
      if (a<b) {
        return 1;
      }
      else {
        return -1;
      }
  }
);
console.log(edades);

function ordenarArray (arrayAOrdenar, modo) {
  arrayAOrdenar.sort(function(a,b,forma){
    if (forma === "asc") {
      if (a<b) {
        return 1;
      }
      else {
        return -1;
      }
    }
    else {
      if (a<b) {
        return 1;
      }
      else {
        return -1;
      }
    }
  }
});
return arrayAOrdenar;

var Diario = (function (){
  var noticias = []
})()

*/
/*

EJERCICIO N°8

1) Generar el módulo "Netflix".

2) El modulo tendra una funcion que permita agregar una pelicula o una serie.
Recibirá los siguientes parámetros:
- titulo: string
- typo: serie o pelicula.
- critica: string

- Las nuevas series o peliculas ingresadas estarán agrupadas por tipo (Todas las pelis juntas en un array y todas las series en otro);
- Validar que la pelicula o serie ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error.

3) - El modulo tendra que eliminar una por ID. //usa splice.

4) Crear una funcion que guarde todas las peliculas y series en el localstorage.
5) Crear una funcion que resture las peliculas y las series que están en el localstorage.


generar el id con mathrandom.



*/

var Netflix = (function () {
  var serie = [{titulo:"Arrow", tipo:"serie", critica:"meh"}];
  var pelicula = [{titulo:"Avengers", tipo:"pelicula", critica:"meh2"}];
  return {
    getSeries: function (){
     console.log(serie);
   },
   getPeliculas: function (){
     console.log(pelicula);
   },
   agregarSerie: function (titulo, tipo, critica, id){
     var hayCoincidencias = False;
     for (var i = 0; i < serie.length; i++) {
       if (serie[i].titulo === this.titulo) {
         hayCoincidencias = true;
         return pelicula[i];
         }
       }
       if (hayCoincidencias === true) {
         console.log("ya hay un item creado con el titulo ingresado");
       }
       else {
         var entretenimiento ={
           titulo:titulo,
           tipo:tipo,
           critica:critica,
           id: mathrandom,
         }
         if (entretenimiento.tipo === serie) {
           serie.push(entretenimiento[i])
         }
       }
     },
    agregarPelicula: function (titulo, tipo, critica, id){
       var hayCoincidencias = False;
       for (var i = 0; i < pelicula.length; i++) {
         if (pelicula[i].titulo === this.titulo) {
           hayCoincidencias = true;
           return pelicula[i];
           }
         }
         if (hayCoincidencias === true) {
           console.log("ya hay un item creado con el titulo ingresado");
         }
         else {
           var entretenimiento ={
             titulo:titulo,
             tipo:tipo,
             critica:critica,
             id: mathrandom,
           }
           if (entretenimiento.tipo === pelicula) {
             pelicula.push(entretenimiento[i])
           }
         }
       },
     }
})()
