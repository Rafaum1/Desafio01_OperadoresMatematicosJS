// Caixas de textos
alert("Vamos fazer todas as operações matemáticas com dois valores");
let numberOne = prompt("Digite o primeiro valor:");
let numberTwo = prompt("Digite o segundo valor:");

// Operadores matemáticos
let sum = Number(numberOne) + Number(numberTwo);
let subtraction = Number(numberOne) - Number(numberTwo);
let multiplication = Number(numberOne) * Number(numberTwo);
let division = Number(numberOne) / Number(numberTwo);
let remainderOfDivision = Number(numberOne) % Number(numberTwo);

alert(`A soma de ${numberOne} e ${numberTwo} é: ${sum}`);
alert(`A subtração de ${numberOne} e ${numberTwo} é: ${subtraction}`);
alert(`A multiplicação de ${numberOne} e ${numberTwo} é: ${multiplication}`);
alert(`A divisão de ${numberOne} e ${numberTwo} é: ${division}`);
alert(`O resto de divisão de ${numberOne} e ${numberTwo} é: ${remainderOfDivision}`);


//Impar ou par
if(sum % 2 === 0){
    alert(`a soma dos dois valores "${sum}" é par`)
} else{
    alert(`a soma dos dois valores "${sum}" é impar`)
}


// Iguais ou diferentes
if(numberOne === numberTwo){
    alert(`Os dois valores são iguais`)
} else{
    alert(`Os dois valores são diferentes`)
};


