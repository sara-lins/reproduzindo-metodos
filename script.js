class Array {
    constructor([...array]) {
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

        let result = [];
    
        for(let count = 0; count < this._array.length; count++) {
            result.push(callback(this._array[count]));
        }
    
        return result;
    }

    newFilter(callback) {

        let result = [];
    
        for(let count = 0; count < this._array.length; count++) {
            if(callback(this._array[count]) == true) {
                result.push(this._array[count]);
            }
        }
    
        return result;
    }

    newFind(callback) {

        let result = "";
    
        for(let count = 0; count < this._array.length; count++) {
            if(callback(this._array[count]) == true) {
                result = this._array[count];
                return result;
            }
        }
    }

    newIndexOf(value) {
    
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


    newIncludes(value) {

        let result = false;
    
        for(let count = 0; count < this._array.length; count++) {
            if(this._array[count] == value) {
                result = true;
            }
        }
    
        return result;
    }

    newReduce(callback) {

        let result = 0;
    
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
}

function forEachCallback(elem, index, array) {
    
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
console.log(retornoNewReduce);

