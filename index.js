/*/ OPCIONES POSIBLES //

1._ La lista contiene alguna oveja:
    - 'There are {numero} sheep in total'

2._ La lista no tiene ovejas, pero SÍ lobos:
    - 'UPS!!! Wolfs eaten sheeps'

3._ La lista no contiene ovejas NI lobos:
    - 'The list is empty'

*/

function countSheeps(list) {
    let sheeps = 0;
    let wolfs = 0;
    for (let index = 0; index < list.length; index++) {
        if (list[index] === true) {
            sheeps++;
        }
        if (list[index] === false) {
            wolfs++;
        }
    }
    if (sheeps > 0) {
        remainingSheeps(sheeps);
    }
    if (sheeps === 0 && wolfs > 0) {
        remainingWolfs();
    }
    if (sheeps === 0 && wolfs === 0) {
        remainingNull();
    }
}

function remainingSheeps(sheeps) {
    console.log("There are" + sheeps + "sheeps in total");
}

function remainingWolfs() {
    console.log("UPS!!! Wolfs eaten sheeps");
}

function remainingNull() {
    console.log("There are no sheeps and no wolfs!");
}
