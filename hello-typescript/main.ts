var minhaVar = 'minha variavel';

function minhaFunc (x, y) {
    return x + y;
}

let num = 2;

const pi = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor) {
    return valor * 2;
});
numeros.map(valor => valor * 2); // mesma coisa que a função acima

class Matematica {
    soma(x, y) {
        return x + y;
    }
}

var n1:string = 'fred';
n1 = 4;