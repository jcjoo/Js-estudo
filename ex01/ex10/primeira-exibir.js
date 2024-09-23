function exibirNome(){
var nome = document.getElementById("nome").value;
var idade = document.getElementById("idade").value;
if(nome === "" || idade === ""){
    alert('Por favor, preencha todos os campos do formulário')
}else{
    var resultado = 'Nome: ' + nome + '<br>Idade: ' + idade;
    document.getElementById('resultado').innerHTML = resultado;
}
}