/*let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index = index += 1) {
    console.log(groceryList[index]);
}*/

/*let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let item of names) {
    console.log(item);
}*/

//iniciando os exercícios foguetinho!

//percorre a array e print os itens

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}*/

//aqui eu to somando todos os itens do array

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += (numbers[index]);
}

console.log(result);*/

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*let parcial = 0; //tive que definir uma nova var

for (let index = 0; index < numbers.length; index += 1) {
    parcial += (numbers[index]); //parcial vai ser: 5, 5+9, 5+9+3...
}
let media = parcial / numbers.length;

if (media > 20) {
    console.log('Valor maior do que 20.')
} else {
    console.log('Valor diferente de 20.')
}*/

/*let maiorValor = numbers[0]; //aqui o meu maiorValor recebe 5.

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) { //aqui eu vou comparar numero a numero, SE for maior, eu atribuo novo valor ao maiorValor
        maiorValor = numbers[index];
    }
}

console.log(maiorValor);*/


//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*let odd = 0; //declarei a variável impar

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) { //aqui eu só defini o que é um num impar
        odd += 1; //sempre que encontrar um impar, meu odd(zero) conta mais 1
    }
}

if (odd == 0) {
    console.log('Nenhum num par encontrado!')
} else {
    console.log(odd);
}*/


/*let menor = numbers[0]; //primeiro item do array, 5 no caso

for (index = 1; index < numbers.length; index +=1) { //meu laço começa no 2 item, pq o primeiro ja é meu valor
    if (numbers[index] < menor) { //se meu item no array for menor do que 5, ele substitui o valor
        menor = numbers[index]
    }
}

console.log(menor);*/


let numbers = [];

for (index = 0; index <= 25; index +=1) {
    numbers.push(index);
} for (index = 0; index < 25; index += 1) {
    console.log(numbers[index] / 2)
}