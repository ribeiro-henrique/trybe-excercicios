/*let a = 5;
let b = 6;
let c = 8;*/

/*let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

if (a > b) {
    console.log(a + ' é maior do que ' + b)
} 
else {
    console.log(b + ' é maior do que ' + a)
}*/

/*if (a > b && a > c) {
    console.log('O maior número é: ' + a + '(a)')
}
else if (b > a && b > c) {
    console.log('O maior número é: ' + b + '(b)')
}
else {
    console.log('O maior número é: ' + c + '(c)')
}*/

/*if (a > 0) [
    console.log('Número positivo')
]
else if (a < 0) {
    console.log('Número negativo')
}
else if (a = 0) {
    console.log('Zero')
}*/

/*const a = 45;
const b = 80;
const c = 55;

let triangle = a + b + c;
let anguloPositivo = a > 0 && b > 0 && c > 0;

if (anguloPositivo) {
    if (triangle = 180) {
        console.log(true)
    } 
    else {
        console.log(false)
    }
}*/

/*let chessPiece = 'Cavalo';

switch(chessPiece.toLowerCase()) {
    case 'bispo': console.log('bispo -> diagonal')
        break
    case 'rei': console.log('rei -> uma casa em qualquer direção')
        break
    case 'rainha': console.log('todas as casas em qualquer direção')
        break
    case 'cavalo': console.log('movimento de L')
        break
    default: console.log('Erro, peça inválida!')
    
}*/

/*let nota = 96;

if (nota > 100 || nota < 0) {
    console.log('Nota inválida!')
    } if (nota >= 90) [
        console.log('Nota: A')
    ]
    else if (nota >= 80) {
        console.log('Nota: B')
    }
    else if (nota >= 70) {
        console.log('Nota: C')
    }
    else if (nota >= 60) {
        console.log('Nota: D')
    }
    else if (nota >= 50) {
        console.log('Nota: E')
    }
    else if (nota < 49) {
        console.log('Nota: F')
    }*/


/*const a = 55;
const b = 66;
const c = 88;

let isEven = false;

if((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
    isEven = true;
};

console.log(isEven);*/

/*const a = 55;
const b = 66;
const c = 88;

let isOdd = false;

if((a % 2 != 0 || b % 2 != 0 || c % 2 != 0)) {
    isOdd = true;
};

console.log(isOdd);*/


/*const custo = -1;
const valor = 5;


let custoReal = custo * 1.2;
let lucro = (valor - custoReal) * 1000;

if (custoReal >= 0 && valor >= 0) {
    console.log(lucro);
}
else {
    console.log('Valores não aceitos')
}*/

let inss;
let ir;

let bruto = 2000;

if (bruto <= 1556.94) {
    inss = bruto * 0.08;
}
else if (bruto <= 2594.92) {
    inss = bruto * 0.09
}
else if (bruto <= 5189.82) {
    inss = bruto * 0.11
}
else {
    inss = 570.88;
};

let liquido = bruto - inss;

if (liquido <= 1903.98) {
    ir = 0;
} else if (liquido <= 2826.65) {
    ir = (liquido * 0.075) - 142.80;
} else if (liquido <= 3751.05) {
    ir = (liquido * 0.15) - 354.80;
} else if (liquido <= 4664.68) {
    ir = (liquido * 0.225) - 636.13;
} else {
    ir = (liquido * 0.275) - 869.36;
};

console.log('O salário após os descontos é de: ' + (liquido - ir));

//que rolé em, muito cálculo xD