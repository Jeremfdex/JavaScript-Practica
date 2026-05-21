let message: string = 'Hello World'; // los tipados basicos de Ts son string, number y boolean
console.log(message);

var nombre : string = "jeremy"; // es para variables globales, incluso si declaro con var dentro de un if puedo acceder a ella

const numero_pi: number = 3.14;
const numero_e: number = 2.7;

console.log(numero_e*numero_pi)

let condicional: boolean = true;

if (condicional){
    let imprimir: string = "En efecto el condicional funciona";
    var imprimir2: string = "Es Var, funciona igual";
    console.log(imprimir)
};

console.log(imprimir2);

let miPrimerObjeto: {miHija: string, miAmor: string, yo: string}= { // Estos son los llamados objetos en Js
    miHija : "Victoria",
    miAmor : "Canela",
    yo : "jeremy"
}
console.log(miPrimerObjeto.miAmor)

let miPrimerArray: number[] = [1,2,3,4,5];

console.log(miPrimerArray);
console.log(typeof(miPrimerArray));

console.log(2==="2");






