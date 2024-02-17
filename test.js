//  Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python']


let listaNumeros = [3,6,8,1,23,4,34,50]

function promedioNumeros() {
    let total = 0
    for(i=1; i< listaNumeros.length; i ++){
        total+=listaNumeros[i]
    }

    return total / listaNumeros.length
    
}


function showNumbers(list){
    let mayor = list[0]
    let menor = list[0]
    
    for(i=0; i<list.length;i++){
        if (list[i]>mayor){
            mayor = list[i]
        }
        if(list[i]< menor){
            menor = list[i]
        }
    }
    console.log("Mayor:", mayor)
    console.log("Menor:", menor)
}

function listaYparam(lista, elemento){
    for(i=0;i <lista.length;i++){
        if(lista[i]=== elemento){
            return i
        }
    }
    return -1
}

console.log(listaYparam(listaNumeros,122))




