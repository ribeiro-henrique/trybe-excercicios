/* //recupero o pai
const pai = document.getElementsByTagName('body'); */

//crio h1
const h1Child = document.createElement('h1');
h1Child.innerText = 'TrybeTrip - Agência de Viagens'
document.body.appendChild(h1Child);

//add tag main como class no main-content e child of body

const mainMain = document.createElement('main');
mainMain.className = 'main-content'
document.body.appendChild(mainMain);

//add tag section com class center-content as a main child

const secTionOn = document.createElement('section');
secTionOn.className = 'center-content'
mainMain.appendChild(secTionOn);

//add tag p as a section child with innerText

const para = document.createElement('p');
para.innerText = 'God is Good!'
secTionOn.appendChild(para);

//add outra section com class left-content as a main child

const sect2 = document.createElement('section');
sect2.className = 'left-content'
mainMain.appendChild(sect2);

//msm coisa do anterior, mas com tag right

const sect3 = document.createElement('section');
sect3.className = 'right-content'
mainMain.appendChild(sect3);

//add tag de img as a last section child

const myImg = document.createElement('img');
myImg.src = 'https://picsum.photos/200'
myImg.className = 'small-image'
sect2.appendChild(myImg);

//add uma Ul com li de 1 a 10

const myUlList = document.createElement('ul');
sect3.appendChild(myUlList);
const arrList = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let key of arrList) {
    const myLi = document.createElement('li')
    myLi.innerHTML = key
    myUlList.appendChild(myLi)
};

//add 3 h3 as a main child

for (let index = 1; index <= 3; index += 1) {
    const hh3 = document.createElement('h3')
    mainMain.appendChild(hh3);
}
