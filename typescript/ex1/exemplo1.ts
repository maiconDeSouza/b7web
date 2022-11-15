

function calc(num1: number, num2: number){
    return num1 + num2
}

console.log(calc(5, 2))

interface Iobj {
    nome: string;
    idade: number;
}

const objPerson: Iobj[] = [
    {
        nome: 'Maicon',
        idade: 34
    }
]

console.log(objPerson[0].nome)

const coisas = ['Nome', 90, 'Sobrenome']

const inputName = document.querySelector('.name') as HTMLInputElement

console.log(inputName.value)