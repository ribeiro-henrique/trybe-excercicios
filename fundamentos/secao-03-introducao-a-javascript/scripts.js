//const base = 5;
//const heigth = 8;
//const area = base * heigth
//const perimeter = base + heigth + area//
//console.log(perimeter)//

//const nota = 77;

//if (nota >= 80) {
  //  console.log('Parabéns, você foi aprovado!')
//}
//else if (nota < 80 && nota >= 60) {
    //console.log('Você está na nossa lista de espera')
//}
//else if (nota < 60) {
  //  console.log('Infelizmente você reprovou!')
//}

/*const currentHour = 22;
let message = '';

if (currentHour >= 22) {
    message = 'Não deveríamos comer nada, é hora de dormir!'
}
else if (currentHour >= 18 && currentHour < 22) {
    message = 'Rango da noite, vamos jantar :D'
}
else if (currentHour >= 14 && currentHour < 18) {
    message = 'Vamos fazer um bolo pro café da tarde?'
}
else if (currentHour = 11 && currentHour < 14) {
    message = 'Hora do almoço!!!'
}
else if (currentHour >= 4 || currentHour < 11) {
    message = 'Hmmm, cheirinho de café recém-passado!'
}

console.log(message)*/

/*let weekDay = 'sexta-feira';

if (weekDay === 'segunda-feira, terça-feira, quarta-feira, quinta-feira' || weekDay === 'sexta-feira') {
    console.log('Oba, mais um dia de aprendizado na Trybe!')
}
else {
    console.log('Finalmente, o descanso merecido!')
}*/

let statusPessoaAprovada = 'lista';

switch (statusPessoaAprovada) {
    case 'aprovada': 
        console.log('Parabéns pela aprovação!');
        break;

    case 'reprovada':
        console.log('Infelizmente não deu!');
        break;

    case 'lista':
        console.log('Voce está na lista de espera!');
        break;

    default:
        console.log('Informação incorreta!');
        break;
}