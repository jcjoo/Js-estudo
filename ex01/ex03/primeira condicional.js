var x = parseFloat(prompt('Digite um número'));
        var y = parseFloat(prompt('Digite outro número'));

        if (x < y) {
            alert(y + ' é o maior número');
        } else if (x > y) {
            alert(x + ' é o maior número');
        } else {
            alert('Os dois números são iguais');
        }