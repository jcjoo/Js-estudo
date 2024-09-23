function exibirAlerta(){
var nome = document.getElementById("nome").value;
var idade = document.getElementById("idade").value;
if(nome === "" || idade === ""){
    alert('Por favor, preencha todos os campos do formulário')
}else{
    alert('Nome: ' + nome + '\nIdade: ' + idade)
}
}