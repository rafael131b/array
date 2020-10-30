var carros=[]

var carro=new Object()


carro.modelo='Ford Mustang'
carro.ano=1969
carro.preco=200000.00

carros.push(carro)




var meuCarro=new Object()
meuCarro.modelo='Ford Fusion'
meuCarro.ano=2019
meuCarro.preco=130000.00

carros.push(meuCarro)


var automovel=new Object()

automovel.modelo='Ford Edge'
automovel.ano=2020
automovel.preco=160000.00

carros.push(automovel)




function mostrar(){

     for(i=0;i<carros.length;i++){
         console.log(carros[i].modelo)
         console.log(carros[i].ano)
         console.log(carros[i].preco)
     }
}
function primeiro(){
    console.log(carros[0])
   


}

function ultimo(){

    console.log(carros[carros.length-1])
}

function adicionar(){

    var add= new Object()
    add.modelo='Audi A4'
    add.ano=2020
    add.preco=220000.00
     carros.push(add)
}

function somar(){
var total=0

    for (i=0;i<carros.length;i++){

        total+=carros[i].preco
    }
console.log('total: '+total)
}
console.log(carros)
