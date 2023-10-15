//// EJERCICIO 1

/*let arreglo = [10,"5","7",9,23,"17" ]

let result = arreglo.map((arreglo)=> arreglo.valueOf(Number) * 2 )

console.log(result)
*/

/////////// EJERCICIO 2

/*let arreglo =["mango", "pera","manzana"]

let result = arreglo.fiLter((x)=>x.length>6)

console.log(result)
*/

///////////////////////// EJERCICIO 3

/*let tabla =[1,2,3,4,5,6,7,8,9,10]

let  tablas = tabla.forEach((item,index)=>{
    console.log("["+ index +"] " + 7 + "*"+ item + "="+ item*7)
})
*/


//////////// EJERCICIO 4

/*let arreglo = ["manazana","limon", "sandia", "pera","toronja","naranja"]

let resultado = arreglo.includes("sandia")

console.log(resultado)
*/

//////////////// EJERCICIO 5

/*const usuarios=[
    {
      nombre:"Rafael perez",
      email: "rafael@gmail.com"

    },
    {
        nombre:"Rosario Perez",
        email: "rosario@gmail.com" 
    },
    {
        nombre:"Rodrigo avila",
      email: "rodrigo@gmail.com"
    },
    {
        nombre:"Alberto Campos",
        email: "alberto@gmail.com"
    }
]
 const validez = usuarios.find((usuario)=> usuario.email==="rosario@gmail.com")
 console.log(validez)
*/

/////////////// EJERCICIO 5.1 XD

/*const arreglo= [1,6,3,4,2,56,10]

const desorden = arreglo.sort((a,b)=>b-a)
console.log(desorden)
*/

///////////// EJERCICIO 6
/*const arreglo= [1,2,3,4,5,6,7]

const mayores = arreglo.every((arreglo)=>arreglo>5)
console.log(mayores)
*/

//////////// EJERCICIO 7

/*const arreglo1 =[1,"hola",false]
const arreglo2 =["nada",24,true]
const arreglo3 =[false,"que tal",10]

const result = arreglo1.concat(arreglo2,arreglo3)
console.log(result)
*/

///////////////////////// EJERCICIO 8

/*const arreglo=[1,2,3,4,5,6]

const eliminar = arreglo.shift()
console.log("el campo eliminado es:", eliminar)
console.log(arreglo)
*/

/////////////////// EJERCICIO 9

/*const arreglo=[12,6,7,8,11,10,9,5,3,43]

const resul = arreglo.findIndex((x)=>x===5)

console.log("El indice del numero 5 es el:", resul)
*/

/////////////////////////// EJERCICIO 10

/*const arreglo =[1,2,3,4,5,6,7,8,9,10]

const result = arreglo.map((x)=> x*3)
console.log(result)
*/