//calcular salário líquido, descontos de inss e IR

const bruto = 3000.00;

let inss;
let impR;

if (bruto <= 1556.94) {
    inss = bruto * 0.08;
} else if (bruto > 1556.94 && bruto <= 2594.92) {
    inss = bruto * 0.09;
} else if (bruto > 2594.93 && bruto <= 5189.82) {
    inss = bruto * 0.11;
} else if (bruto > 5189.82) {
    inss = 570.88;
}

const líquido = bruto - inss;

if (líquido >= 1903.98 && líquido <= 2826.65) {
    impR = (líquido * 0.075) - 142.80;
} else if (líquido >= 2826.26 && líquido <= 3751.05) {
    impR = (líquido * 0.15) - 354.80;
} else if (líquido >= 3751.06 && líquido <= 4664.68) {
    impR = (líquido * 0.225) - 636.13;
} else if (líquido > 4664.68) {
    impR = (líquido * 0.275) - 869.36;
}

const salarioFinal = líquido - impR;

console.log(salarioFinal);