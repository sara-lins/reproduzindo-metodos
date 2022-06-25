class Array {
    constructor(...array) {
        this._array = array;
    }

    newForEach(callback) {

        for(let count = 0; count < this._array.length; count++) {

            let elem = this._array[count];
            let index = count;
            let array = this._array;

            callback(elem, index, array);   //teste 1
            //callback(elem, index);        //teste 2
            //callback(elem);               //teste 3
        }
    }

    newMap(callback) {
    //O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
    /*  valorAtual => O valor do elemento original do Array de origem. 
        indice => O índice do elemento atual que está sendo processado no array.
        array => O Array de origem.
    */
        let result = [];
    
        for(let count = 0; count < this._array.length; count++) {
            result.push(callback(this._array[count]), count, this._array);
        }
    
        return result;
    }

    newFilter(callback) {
    //O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    /*  element => O elemento que está sendo processado no array.
        index => O índice do elemento atual que está sendo processado no array.
        array => O array para qual filter foi chamada.
    */
        let result = [];
    
        for(let count = 0; count < this._array.length; count++) {
            if(callback(this._array[count], count, this._array) == true) {
                result.push(this._array[count]);
            }
        }
    
        return result;
    }

    newFind(callback) {
    //O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.
    /*  element => O elemento atual que está sendo processado no array.
        indexOptional => O índice do elemento atualmente sendo processado no array.
        arrayOptional => O array sobre o qual find foi chamado.
    */

        let result = undefined;
    
        for(let count = 0; count < this._array.length; count++) {
            if(callback(this._array[count], count, this._array) == true) {
                result = this._array[count];
                return result;
            }
        }
    }

    newIndexOf(value) {
    //O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
        let result = "";

        for(let count = 0; count < this._array.length; count++) {
            if(value == this._array[count]) {
                result = count;
                return result;
            }
        }

        if(result == "") {
            return -1;
        }
    }


    newIncludes(value, index = 0) {
    //O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
    /*  searchElement => O elemento a buscar
        fromIndex => Opcional. A posição no array de onde a busca pelo searchElement se iniciará. Por padrão, 0. 
    */
        let result = false;
    
        for(count = index; count < this._array.length; count++) {
            if(this._array[count] == value) {
                result = true;
            }
        }
    
        return result;
    }

    newReduce(callback, valorInicial = this._array[0]) {
    //O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
    /* Acumulador (acc)
        Valor Atual (cur)
        Index Atual (idx)
        Array original (src)
    */

    /* valorInicial:
        Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função callback. Se nenhum valorInicial é fornecido, o primeiro 
        elemento do array será usado como o valor inicial do acumulador e o valorAtual não será lido. Chamar reduce() em uma array vazia sem valor inicial
        retornará um erro.
    */

        let result = valorInicial;
    
        for(let count = 0; count < this._array.length; count++) {
            const acumulador = result;
            const valorAtual = this._array[count];
            const index = count;
            const array = this._array;

            //result = callback(acumulador,valorAtual,index,array);     //teste 1
            //result = callback(acumulador,valorAtual,index);           //teste 2
            result = callback(acumulador,valorAtual);                   //teste 3
        }
        
        return result; 
    }

    newFindIndex(callback) {
    // método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste 

    let result = "";

        for(let count = 0; count < this._array.length; count++) {
            if(callback(this._array[count], count, this._array) == true) {
                result = count;
                return result;
            }
        }

        if(result == "") {
            return -1;
        }
    }

    newSome(callback) {
    //O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.

        let result = false;

        for(let count = 0; count < this._array.length; count++) {
            if(callback(this._array[count], count, this._array) == true) {
                result = true;
            }
        }

        return result;
    }

    newEvery(callback) {
    //O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

        let result = false;

        for(let count = 0; count < this._array.length; count++) {
            if(callback(this._array[count], count, this._array) == false) {
                return result;
            } else {
                result = true;
            }
        }

        return result;
    }

    newConcat(...valorN) {
    //O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro.
        const newArr = []

        for(let count = 0; count < this._array.length; count ++) {
            newArr.push(this._array[count])
        }
        console.log(newArr)
        console.log(valorN)

        for(let count = 0; count < valorN.length; count ++) {
            if(typeof valorN[count] != typeof []) {
                newArr.push(valorN[count])
            } else {
                for(let i = 0; i < valorN[count].length; i++) {
                    newArr.push(valorN[count][i])
                }
            }
        }
        return newArr;
    }

    newJoin(valor) {
        //O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

        let result = "";

        for(let count = 0; count < this._array.length; count ++) {
             if(this._array.length != 0) {
                 if(valor == null) {
                     result += this._array[count];
                 } else {
                     if(count != this._array.length-1) {
                         result += this._array[count] + valor;
                     } else {
                         result += this._array[count];
                     }
                 }
             }
        }
        
        return result;
    }
}

/* function forEachCallback(elem, index, array) {
    
    let x = elem;
    let y = index;
    let z = array;

    if(x != null && y != null && z != null) {
        console.log(`${x}, no índice: ${y}, do array: ${z} é muito bom!`);
    }else if(y == null && z == null) {
        console.log(`${x} é muito bom!`);
    }else if(z == null) {
        console.log(`${x}, no índice: ${y} é muito bom!`);
    }
}

function mapCallback(value) {
    return `${value} é muito bom!`;
};

function filterCallback(value) {
    return value >= 10;
};

function findCallback(value) {
    return value > 30;
};

function reduceCallback(acumulador,valorAtual,index,array) {
    let acc = acumulador;
    let cur = valorAtual;
    let idx = index;
    let src = array;

    if(acc != null && cur != null && idx != null && src != null) {
        console.log(`Acumulador: ${acc}, valor Atual: ${cur} , Índice atual: ${idx}, Array: ${src}`);
        return acc + cur;
    }else if(idx == null && src == null) {
        console.log(`Acumulador: ${acc}, valor Atual: ${cur}`);
       return acc + cur;
    }else if(src == null) {
        console.log(`Acumulador: ${acc}, valor Atual: ${cur}, Índice atual: ${idx}`);
        return acc + cur;
    }
};

const newArr = new Array(["maçã", "uva", "pera"]);
newArr.newForEach(forEachCallback);

let retornoNewMap = newArr.newMap(mapCallback);
console.log(retornoNewMap);

const newArrNumber = new Array([20, 8, 11, 40, 50, 9, 10, 100]);
let retornoNewFilter = newArrNumber.newFilter(filterCallback);
console.log(retornoNewFilter);

let retornoNewFind = newArrNumber.newFind(findCallback);
console.log(retornoNewFind);

let retornoNewIndexOf = newArrNumber.newIndexOf(100);
console.log(retornoNewIndexOf);

let retornoNewIncludes = newArrNumber.newIncludes(50);
console.log(retornoNewIncludes);

let retornoNewReduce = newArrNumber.newReduce(reduceCallback);
console.log(retornoNewReduce); */

