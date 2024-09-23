var x;

function getRandom() {
    var min = 1;
    var max = 10;
    x = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("myButton").style.display = "none";
    document.getElementById("aparecer").style.display = "block";
    document.getElementById("resultado").innerHTML = ""; 
}
function getNumber(){
    var num = parseInt(document.getElementById("number").value);
    if (isNaN(num)) {
        alert("Por favor, insira um número válido.");}
    else if (num > x){
        alert('O número é menor')
    }
    else if (x>num){
        alert('O número é maior')
    }else{
        alert('Parabéns, você acertou o número!')
    }
}
