/*----------------------------------------------------------
TRABAJANDO CON VARIABLES
-----------------------------------------------------------*/
   alert("h") ;   
    //Concatenacion A N T E S
    let nombre = "Jose";
    let apellido = "Ramirez";
    let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";
    console.log(saludo)
    //Concatenacion A H O R A
    //Interpolacion de variables
    //Templates String

    let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`
    console.log(saludo2);

    let a = 2;
    let b = new Number(1);
    let c = 7.19;

    console.log(a,b);
    console.log(c.toFixed(1));
    console.log(c.toFixed(5));



/*----------------------------------------------------------
FUNCIONES, FUNCIONES Y MAS FUNCIONES
-----------------------------------------------------------*/

    //Funcion declarada 
    function estoEsUnaFuncion() {
        console.log("Hola Mundo");
    }
        //Invocar una funcion
        estoEsUnaFuncion();

    //Asignar argumentos por defecto
    function saludar(nombre = "Anonimo", edad = 0){
        console.log(`Hola mi nombre es ${nombre} y tengo
        ${edad} años :D`)
    }
    saludar();


    //Funciones declaradas VS funciones expresadas
    funcionDeclarada();
        function funcionDeclarada() {
            console.log(`Esto es una funcion declarada
            puede invocarse en cualquier parte de nuestro
            codigo, incluso antes de que la funcion 
            sea declarada`);
        }

    functionDeclarada();




    //FUNCION E-X-P-R-E-S-A-D-A o Funcion ANONIMA
    //Se guarda dentro de una variable

    funcionExpresada();

    const funcionExpresada = function (){
        console.log(`Esto es una funcion expresada, es decir
        una funcion que se le ha asignado como valor
        a una variable, si invocamos esta funcion antes de
        su definicion JS nos dira...`)
    }

    funcionExpresada();




/*----------------------------------------------------------
TRABAJANDO CON ARREGLOS
-----------------------------------------------------------*/
   
    //N U E V A FORMA DE DEFINIR A R R E G L O S

    const c1 = Array.of("X","Y","Z",9,8,7);
    console.log(c1); 

    // GENERAR MULTIPLES ARREGLOS CON EL METODO .fill
    
    const d = Array(500).fill(true);
    console.log(d);

    //FORMA ANTIGUA DE ESCRIBIR ARREGLOS
    const e = new Array ();
    console.log(e);

    const f = new Array (1,2,3,true,false);
    console.log(f);

//AGREGAR UN NUEVO ELEMENTO A UN ARREGLO *METODO .push*
    const colores = Array.of("Azul", "Verde", "Rojo");
        console.log(colores)
    colores.push("Negro")
         console.log(colores)

// ELIMINAR EL ULTIMO ELEMENTO *METODO .pop*
     colores = Array.of("Azul", "Verde", "Rojo");
     colores.pop();
     console.log(colores)

// METODO .forEach
// ES UN METODO DE LOS ARREGLOS QUE RECIBE UNA FUNCION 
    colores.forEach(function(el,index){
        console.log(`<li id="${index}">${el}</li>`)
    })


/*----------------------------------------------------------
TRABAJANDO CON |OBJETOS|
-----------------------------------------------------------*/

const jose ={
    nombre:"Alberto",
    apellido:"Ramirez",
    edad:21,
    pasatiempos:["Hacer Ejercicio","Series","Musica"],
    soltero:false,

    contacto:{
        email:"joe.broken.com",
        num:123,
        fb:"JoseRamirezOz"
    },

    saludar:function(){
        cosole.log(`Hola :)`)
    },

    decirMiNombre: function(){
        console.log(`
            Hola me llamo ${this.nombre} ${this.apellido}
            y tengo ${this.edad} años y me puedes encontrar como 
            ${this.contacto.fb}
        `)
    }

}

jose.decirMiNombre();

/*INFORMACION IMPORTANTE!
    -> DENTRO DE UN OBJETO A LAS VARIABLES SE LE VAN A LLAMAR ATRIBUTOS 
    Y A LAS FUNCIONES SE LE VAN A LLAMAR METODOS
*/ 


/*----------------------------------------------------------
OPERADORES LOGICOS Y DE COMPARACION
-----------------------------------------------------------*/

//OPERADORES ARITMETICOS ( + - * / %)
//OPERADORES RELACIONALES (<, >, >=, <=, = , ==, ===, !=, !==)
/*
    = Es un operador de asignacion
    == Comparacion de valores 
    === Comparacion de tipo de dato y de valor
*/ 

/*Incremento Decremento*/

let i = 2;

// i = i+2;
// i = i+3:

//Operador Unitario 
i++;
i--;
++i;
--i;




/*----------------------------------------------------------
TRABAJANDO CON CONDICIONALES 
-----------------------------------------------------------*/

///ESTRUCTURA DE CONTRO FI ELSE
let hora = 20;
if (hora >= 0 && hora <=5){
    console.log("Dejame dormir");
} else if(hora >= 6 && hora <=11 ){
    console.log("Buenos dias!");
} else if(hora >= 12 && hora <=18 ){
    console.log("Buenas tardes!");
} else if(hora >= 19 && hora <=23 ){
    console.log("Buenas noches!");
} else{
    console.log("Digita una hora valida");
}


/*OPERADOR TERNARIO (CONDICION) ? VERDADERO:FALSO*/ 
let edad = 21;
let  eresMayor = (edad>=18)?"Eres mayor de Edad":"EresMenor";
console.log(eresMayor)

//ESTRUCTURA SWITCH CASE 
/*
Domingo 0
Lunes 1
Martes 2 
Miercoles 3
Jueve 4
Viernes 5
Sabado 6
*/

let dia = 1;

switch(dia){
    case 0:
        console.log("Domingo");
    break;
    case 1:
        console.log("Lunes");
    break;
    case 2:
        console.log("Martes");
    break;
    case 3:
        console.log("Miercoles");
    break;
    case 4:
        console.log("Jueves");
    break;
    case 5:
        console.log("Viernes");
    break;
    case 6:
        console.log("Sabado");
    break;
 
    default:
        break;
}






/*----------------------------------------------------------
CICLOS - LOOPS - FOR - WHILE - DO WHILE
-----------------------------------------------------------*/

let contador = 0;
let i = 1;
while (i <= 100){
    i = i + 1;
    contador = contador + 1;
    console.log(contador);
}

let i = 1;
let contador = 0;
do {
    i = i + 1;
    contador = contador +1;
    console.log(contador);
} while(i <= 100)

for (let contador = 0; contador <= 100; contador ++){
    console.log(contador)
}

let numeros = [10,20,30,40,50,60,70,80,90];
    for (let i = 0; i<numeros.length;i++){
        console.log(numeros[i])
    }


 // FOR IN - VARIANTE DEL CICLO FOR ITERA TODOS LOS OBJETOS
const dev = {
    nombre: "Jose",
    apellido: "ramirez",
    edad: 21
}

for (const propiedad in dev) {
   console.log(`key ${propiedad}, Valor ${dev[propiedad]}`)
}

// FOR OF - ITERA CUALQUIER DATO ITERABLE
let numeros = [10,20,30,40,50,60,70,80,90];
for (const i of numeros) {
    console.log(i)
}







/*----------------------------------------------------------
MANEJO DE ERRORES TRY | CATCH | FINALLY
-----------------------------------------------------------*/
try{
    console.log(`
    En el try se agrega el codigo a evaluar
    `)
    noExiste;
} catch(error){
    console.log(`
    Catch, captura cualquier error surgido o lanzado en 
    el try
    `)
    console.log(error)
} finally{
    console.log(`
    El bloque finally se ejecutara siempre al 
    final de un bloque try-catch
    `)
}

//PERSONALIZACION DE ERRORES

/*LA FUNCION isNaN DEVUELVE VERDADERO O FALSO

EVALUA SI EL CARACTER INSERTADO ES NotANumber
    TRUE= CUANDO EL VALOR NO ES UN NUMERO
    FALSE= CUANDO EL VALOR ES UN NUMERO
*/

try {
    let numero = "y"

    if (isNaN){
        throw new Error (`El caracter insertado no es 
        un numero`)
    }
    console.log(numero*numero)
} catch(error){
    console.log(`Se produjo el siguiente ${error}`)
}

/*BREAK Y CONTINUE
    BREAK = FUNCIONA PARA ROMPER LA EJECUCION 
        Y SALIR DE LA MISMA
        
    CONTINUE= SALTA LA ITERACION Y CONTINUA CON
        LOS DEMAS ELEMENTOS
          
        */

    
const numeros = [1,2,3,4,5,6,7,8,9,0];

for (let i = 0; i < numeros.length ; i++){
    if (i === 5){
        break;
    }
    console.log(numeros[i])
}

for (let i = 0; i < numeros.length ; i++){
    if (i === 5){
        continue;
    }
    console.log(numeros[i])
}


/*--------------------------------------------------------
Desestructuración:
---------------------------------------------------------*/
const numeros = [1,2,3];

//SIN DESESTRUCTURACION
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno,dos,tres)

//CON DESESTRUCTURACION 
const [one,two,three] = numeros;
console.log(one,two,three);

let persona = {
    nombre:"Jose",
    apellido:"Ramirez",
    edad:21
}

let {nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad)

/*--------------------------------------------------------
Objetos Literales 
---------------------------------------------------------*/

//DECLARACION DE VARIABLES
let nombre = "Kenai",
    edad = 7;

// OBJETO LITERAL
const perro = {
    nombre: nombre,
    edad:edad,
    ladrar: function(){
        console.log("guauu guauu")
    }
}

//NUEVA FORMA DE DEFINIR EL OBJETO 

const dog = {
    nombre,  /*ASUME QUE SE TOMA EL VALOR, 
    QUE HAY EN LA VARIABLE CON EL MISMO NOMBRE*/
    edad,  /*ASUME QUE SE TOMA EL VALOR, 
    QUE HAY EN LA VARIABLE CON EL MISMO NOMBRE*/
    raza: "Callejero",
    ladrar(){ //ELIMINACION DE LOS DOS PUNTOS:
        console.log("guauu guauu guauu!!!!")
    }
}








/*--------------------------------------------------------
PARAMETROS REST & OPERADOR SPREEAD: 
---------------------------------------------------------*/
/*REST - SE UTILIZA CUANDO POR EJEMPLO EN UNA FUNCION
NO SABEMOS CON EXACTITUD CUANTOS PARAMETROS
LE VAMOS A PASAR */

function sumar (a,b, ...c){
    let resultado = a +b ;

    c.forEach(
        function(n){
            resultado += n
        }
    );
    return resultado
}

/*OPERADOR DE PROPAGACION, SPREEAD OPERADOR*/
const arr1 = [1,2,3,4,5],
      arr2 = [6,7,8,9,0];

console.log(arr1, arr2);

//spreed ...
const arr3 = [...arr1,...arr2];
console.log(arr3);






/*-----------------------------------------------------------
ARROW FUCTIONS
------------------------------------------------------------*/

/*FUNCION EXPRESADA - 
A UNA VARIABLE SE LE ASIGNA UNA FUNCION*/
const expresada = function (){
    console.log(`Funcion expresada`);
}
expresada();

/*FUNCION DECLARADA -
SE LE ASIGNA UN NOMBRE A LA FUNCION*/
function declarada (){
    console.log(`Funcion declarada`);
}
declarada();

/*ARROW FUNCTION -
MUERTE A LA PALABRA function*/
const saludarArrowFunction = () => 
console.log(`Hola soy una Arrow Function`)

saludarArrowFunction()

/*ELIMINACION DE LLAVES EN UNA ARROW FUNCTION
UNICAMENTE CUNADO LA FUNCION V A A EJECUTAR 
UNA SOLA LINEA DE CODIGO*/




/*----------------------------------------------------------
 PROGRAMACION ORIENTADA A OBJETOS
--> PROTOTIPOS
-----------------------------------------------------------*/
//Programacion Orientada a Objetos

/*
 - Clases: Modelo a seguir("Esquema")

 - Objetos: Es una instancia de una clase

 ->  Atributos: Es una caracteristica o propiedad
    del objeto (Son varibales dentro del objeto)

 ->  Metodos: Son las acciones que un objeto puede 
    realizar (Son funciones dentro de un objeto)
*/

/*const animal = {
    nombre: "Snoopy",
    sonar(){
        console.log(`
        Hago sonidos por que estoy vivo
        `);
    }
}

const animal2 = {
    nombre: "LolaBunny",
    sonar(){
        console.log(`
        Hago sonidos por que estoy vivo
        `);
    }
}

animal;
animal2;*/

//FUNCION CONSTRUCTORA

/*function Animal(nombre, genero){
    //ATRIBUTOS
    this.nombre = nombre;
    this.genero = genero;

    //METODOS
    this.sonar = function(){
        console.log(`
        Mi nombre es ${this.nombre} y soy ${this.genero}`
        );
    }

    this.saludar = function(){
        console.log(`Hola me llamo, ${this.nombre}`)
    }
}*/

function Animal(nombre, genero){
    //ATRIBUTOS
    this.nombre = nombre;
    this.genero = genero;
}
        //METODOS DE ANIMAL
        Animal.prototype.sonar = function(){
            console.log(`
            Mi nombre es ${this.nombre} y soy ${this.genero}`
            );
        }

    Animal.prototype.saludar = function(){
        console.log(`Hola me llamo, ${this.nombre}`)
    }


/*----------------------------------------------------------
    HERENCIA PROTOTIPICA
-----------------------------------------------------------*/
function Perro(nombre,genero,tamanio){
    this.super = Animal;
    this.super(nombre,genero);
    this.tamanio = tamanio;
}

//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del Prototipo padre en el hijo
Perro.prototype.sonar = function (){
    console.log("Ladrido");
}

Perro.prototype.ladrar = function(){
    console.log("Guau Guau!!!");
}


const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
      lolaBunny = new Animal("Lola Bunny", "Hembra");


//Mandando a llamar las funciones
console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();


/*-------------------------------------------------------
CLASES Y HERENCIA
--------------------------------------------------------*/
 class Animal{
    
    constructor(nombre, genero)
    {
        //ATRIBUTOS
        this.nombre = nombre;
        this.genero = genero;
    }
  
    //METODOS
    sonar(){
        console.log(`
        Mi nombre es ${this.nombre} y soy ${this.genero}`
        );
    }

    saludar(){
        console.log(`Hola me llamo, ${this.nombre}`)
    }
}

    class Perro extends Animal {
        constructor(nombre, genero, tamanio){
        /*Con el método super() se manda a llamar 
        el constructor de la clase padre */ 
            super(nombre,genero);
            this.tamanio = tamanio;
        }

        sonar(){
            console.log("Hago sonido");
        }

        ladrar(){
            console.log("Guaaauu");
        }
    }


 const mimi = new Animal("Mimi", "Hembra"),
       scooby = new Perro ("ScoobyDo", "Macho", "Gigante")

console.log(mimi)
mimi.saludar()
mimi.sonar()
console.log(scooby)
scooby.saludar()
scooby.sonar()
scooby.ladrar()





/*---------------------------------------------------------
METODOS ESTATICOS
----------------------------------------------------------*/
/*Un metodo estatico se puede ejecutar sin necesidad de 
instanciar la clase*/

class Animal{
    
    constructor(nombre, genero)
    {
        //ATRIBUTOS
        this.nombre = nombre;
        this.genero = genero;
    }
  
    //METODOS
    sonar(){
        console.log(`
        Mi nombre es ${this.nombre} y soy ${this.genero}`
        );
    }

    saludar(){
        console.log(`Hola me llamo, ${this.nombre}`)
    }
}

    class Perro extends Animal {
        constructor(nombre, genero, tamanio){
        /*Con el método super() se manda a llamar 
        el constructor de la clase padre */ 
            super(nombre,genero);
            this.tamanio = tamanio;
            this.raza = null;
        }

        sonar(){
            console.log("Hago sonido");
        }

        ladrar(){
            console.log("Guaaauu");
        }

        static queEres(){
            console.log("Animal del tipo canino")
        }

        /* Los setters y getters son metodos especiales que
        nos permiten establecer y obtener los valores de 
        atributos de nuestra clase */

        get getRaza(){
            return this.raza;
        }

        set setRaza(raza){
            this.raza = raza;
        }
    }

    
 const mimi = new Animal("Mimi", "Hembra"),
 scooby = new Perro ("ScoobyDo", "Macho", "Gigante")
Perro.queEres();
console.log(scooby.getRaza);
scooby.setRaza = "Gran Danés";
console.log(scooby.getRaza);


/*----------------------------------------------------------
EL OBJETO CONSOLE.LOG()
-----------------------------------------------------------*/

console.log("Este es un registro de lo que hacemos");
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es solo informacion");

/*TRABAJANDO CON COMODINES PARA CAMBIAR EL TIPO DE
VALOR O FORMATO 
%s es igual a una cadena de texto 
%d es igual a un digito
*/ 

let nombre = "Jose Alberto",
    apellido = "Ramirez",
    edad = 21;

console.log(`Hello everyone my name is
    %s %s y tengo %d años de edad
`,nombre, apellido, edad);


console.clear(); //Limpia la consola
console.dir(); //Muestra propiedades de un elemento



console.group("Creando un grupo de tech");
console.log("Preprocesadores");
console.log("Bootstrap");
console.log("Js Avanzado");
console.log("React");
console.groupEnd();

//CREANDO TABLAS
//Object.entries Creara un arreglo a opartir de un array
//.sort Ordena de forma ascendente o descendente
console.log(console);
console.table(Object.entries(console).sort());


//TOMANDO TIEMPO DE EJECUCION
console.time("Cuanto tiempo tarda");
const arreglo = Array(1000000);
for(let i = 0; i < arreglo.length; i++){
    arreglo[i]=i;
}
console.timeEnd("Cuanto tiempo tarda");


/*Contando cuantas veces se ejecuto un bloque*/
for(let i= 0; i<100; i++){
    console.count("Codigo For");
    console.log(i)
}

let x = 1,
    y = 2,
    pruebaXY = "SE ESPERA QUE x SEA MENOR QUE y";

console.assert(x<y,{x,y,pruebaXY})




/*----------------------------------------------------------
EL OBJETO DATE
-----------------------------------------------------------*/
console.log(date)

let fecha = new Date();
console.log(fecha)
//DIA DEL MES
console.log(fecha.getDate())
//DIA DE LA SEMANA |D L M M J V S| > 0 1 2 3 4 5 6
console.log(fecha.getDay())
/* OBTENER EL DIA DEL MES
 Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic
    0 1 2 3 4 5 6 7 8 9 10 11
*/
console.log(fecha.getMonth())
//OBTENER EL AÑO DESDE 1900
console.log(fecha.getYear())
//OBTENER EL AÑO COMPLETO
console.log(fecha.getFullYear())

//OBTENIENDO HORAS MIN SEG
console.group("TIEMPO EN HORAS MIN SEG")
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())
//OBTENIENDO FECHA Y HORA COMPLETAS
console.log(fecha.toString())
//EXTRAYENDO SOLO LA FECHA
console.log(fecha.toDateString())
//EXTRAYENDO SIN USO HORARIO
console.log(fecha.toLocaleString())
//SOLAMENTE LA FECHA Y HORA POR SEPARADO
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleTimeString())
// USO HORARIO
console.log(fecha.getTimezoneOffset())

/*EL MERIDIANO DE GRENWICH SE CONSIDERA COMO 
   LA HORA 0 PARA EL RELOJ Y TIENE UNA
   LOCACION DIRECTA EN LONDRES*/

console.log(fecha.getUTCDate())
console.log(fecha.getUTCMonth())
console.log(Date.now())
console.groupEnd();



/*----------------------------------------------------------
EL OBJETO MATH: Math();
-----------------------------------------------------------*/
console.log(Math) // Es un objeto estatico

console.log(Math.PI) //DEVUELVE PI
console.log(Math.abs(-98)) //DEVULEVE EL VALOR ABSOLUTO
console.log(Math)
console.log(Math)
console.log(Math)
console.log(Math)
console.log(Math)
console.log(Math)
console.log(Math)