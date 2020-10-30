
var carros=[]
function adicionar(){
    var  model=document.getElementById('txt1').value
    var  ano=document.getElementById('txt2').value
    var  preco=document.getElementById('txt3') .value
    
   
   
  
  
    

  var carro=new Object()

  carro.modelo=model
  carro.anos=ano
  carro.valor=preco

  carros.push(carro)
  

  var  resultado=document.getElementById('res')
  resultado.innerText=` Modelo : ${model} ano: ${ano} valor :${preco}`


}











