

// //declarar una variable
// let NombreUsuario;
// //declarar una variable con valor inicial 
// let User = "Juan";

// console.log(NombreUsuario)
// console.log(User);

// //Operador Ternario
// if (User==="Pedro"?console.log("verdadero"): console.log("falso"));

// //Const es parecido a constante

// const PI=3.1416;
// //trato de cambiar el valor, da error
// //PI=20;

// //métodos propios del lenguaje

// let PI_DOS;
// PI_DOS = Math.PI;
// User.includes("P");
// console.log(User.length);


// //metodos por funciones
// // Arrow function

// const saludarUsuario = () => {
//     return "hola juan";
// }

// const saludarUser = nameUser =>{
// //concatena "Hola" con nameUser
//  return "Hola "+ nameUser;

// } 
// console.log(saludarUser(User));

// //suma de variables

// const sumaDatos =(numero1,numero2) =>{
//     return numero1+numero2;
// }

// console.log(sumaDatos(1.0,2));

// //instancia de una funcion. hace lo mismo
// let tres = saludarUser;
// console.log(tres("Juan"));

// //ciclos

// for(let i=0; i<10; i++){

// }

// //funciones (forma anterior)

// function sum(num1,num2){
//     return num1+num2;
// }

// const wave = function(){

// }




//3 funciones (arrow function)
//1- sin parametros
//2-  un parametro
//3- dos o mas parametros
//Declarar variables con let y const(minimo 5)
// integrar con llamado a funciones mostrar resultados


// Función sin parámetros
const obtenerHoraActual = () => {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    return `La hora actual es: ${hora}:${minutos}:${segundos}`;
};

// Función con un parámetro
const calcularAreaRectangulo = (base, altura) => {
    const area = base * altura;
    return `La Área del rectángulo es: `+area;
};

// Función con dos o más parámetros
const calcularPromedioEdad = (edad1, edad2, edad3) => {
    const promedio = (edad1 + edad2 + edad3) / 3;
    return `El Promedio de las edades de las 3 personas son:`+promedio;
};

// Variables con let y const
let ladoCuadrado = 3;
let baseTriangulo = 9;
const constanteSaludo = "Hola, ";
const constanteDespedida = "¡Hasta luego!, ";

// Interacción con el usuario
const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
const edadPersona1 = parseInt(prompt("Ingresa la edad de la 1 persona:"));
const edadPersona2 = parseInt(prompt("Ingresa la edad de la 2 persona:"));
const edadPersona3 = parseInt(prompt("Ingresa la edad de la 3 persona:"));

// Resultados
console.log(obtenerHoraActual()); //La hora actual
console.log(constanteSaludo + nombreUsuario); //Saludo personalizado
console.log(calcularAreaRectangulo(ladoCuadrado, baseTriangulo)); //Área del rectángulo
console.log(calcularPromedioEdad(edadPersona1, edadPersona2, edadPersona3)); //Promedio de las edades
console.log(constanteDespedida + nombreUsuario); //Despedida




