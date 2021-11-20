
var fs = require("fs");
var url = "funcionarios.json";
var setor = "Administrativo"



maiorSalarioEmpresa();
menorSalarioEmpresa();
mediaSalarioEmpresa();
maiorSalarioSetor(a);
menorSalarioSetor(a);
mediaSalarioSetor(a);


function maiorSalarioEmpresa(){
    fs.readFile(url, "utf8", function(err, data){
        if (err){
            console.log(err);
        }else{
            var obj = JSON.parse(data);
        }
        var maiorSalario = obj.funcionarios[0].salario;
        for( i = 1; i < obj.funcionarios.length; i++ ){
            if( obj.funcionarios[i].salario > maiorSalario){
                maiorSalario = obj.funcionarios[i].salario;
                nome = obj.funcionarios[i].nome
            }
        }
        console.log("O maior salário da empresa é de" +  nome);
        console.log(maiorSalario);
    });
}


function menorSalarioEmpresa(){
    fs.readFile(url, "utf8", function(err, data){
        if (err){
            console.log(err);
        }else{
            var obj = JSON.parse(data);
        }
        var menorSalario = obj.funcionarios[0].salario;
        for(i = 1; i < obj.funcionarios.length; i++){
            if(obj.funcionarios[i].salario < menorSalario){
                menorSalario = obj.funcionarios[i].salario;
                nome = obj.funcionarios[i].nome;
            }
        }
        console.log("O menor salário da empresa é de" +  nome)
        console.log(menorSalario)
    })
}




function mediaSalarioEmpresa(){
    fs.readFile(url, "utf8", function(err, data){
    if(err){
        console.log(err);
    }else {
        var obj = JSON.parse(data);
    }
    var soma = 0
    for(i = 0; i < obj.funcionarios.length; i++){
    soma += obj.funcionarios[i].salario;
    }
    var mediaSalario = soma / (obj.funcionarios.length);
    console.log("A média dalarial da empresa é de " + mediaSalario);
    })
}



function maiorSalarioSetor(){
    fs.readFile(url, "utf8", function(err, data) {
        if(err){
            console.log(err)
        }else{
            var obj = JSON.parse(data);
        }
        var maiorSalarioSetor = 0
        for(i = 0; i < obj.funcionarios.length; i++){
            if((obj.funcionarios[i].setor === setor) && 
            (obj.funcionarios[i].salario > maiorSalarioSetor)){
                maiorSalarioSetor = obj.funcionarios[i].salario;
                nome = obj.funcionarios[i].nome
            }
        }
        console.log("O maior salário do setor " + setor + "é de" + nome)
        console.log(maiorSalarioSetor)
    })
}


function menorSalarioSetor(){
    fs.readFile(url, "utf8", function(err, data){
        if(err){
            console.log(err)
        }else {
            var obj = JSON.parse(data)
        }
        var menorSalarioSetor = 50000
        for(i = 0; i < obj.funcionarios.length; i++){
            if((obj.funcionarios[i].setor === setor) && 
            (obj.funcionarios[i].salario < menorSalarioSetor)){
                menorSalarioSetor = obj.funcionarios[i].salario;
                nome = obj.funcionarios[i].nome
            }
        }
        console.log("O menor salário do setor " + setor + " é o de" + nome)
    })
}


function mediaSalarioSetor(){
    fs.readFile(url, "utf8", function(err, data){
        if(err){
            console.log(err)
        }else{
            var obj = JSON.parse(data);
        }
        var somaSetor = 0 
        var tamanhoSetor = 0
        for(i = 0; i < obj.funcionarios.length; i++){
            if(obj.funcionarios[i].setor === setor){
                somaSetor += obj.funcionarios[i].salario;
                tamanhoSetor++
            }
        }
        var mediaSalarioSetor = somaSetor / (tamanhoSetor);
        console.log("A média salarial do setor " + setor + "é de " + mediaSalarioSetor)
    })
}

