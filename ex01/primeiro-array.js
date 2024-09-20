var num = new Array(5); //O array em js normalmente é dinâmico e é declarado assim: var num = []
        var i = 0;
        var soma = 0
        while(i<num.length){
            num[i] = parseFloat(prompt('Digite um número')); //parseFloat transforma a String em número
            soma = soma + num[i];
            i++;
        }
        alert(soma)