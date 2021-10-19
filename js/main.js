/*
var nome= "Elias de Siqueira";
var idade= 28;
var idade2= 10;
var frase= "Inter é o melhor time do mundo";
alert(nome + " tem "+ idade + " anos"); //concatena as variaveis
alert(idade + idade2); //soma as variaveis
console.log(nome); //imprimi nome
console.log(n1*n2); //
console.log(frase.toUpperCase()); //transforma as letras da variavel em maiusculas
alert(frase.replace("Inter","Caxias")); //troca as palavras escolhidas
*/

//var lista = ["maçã","pêra","laranja"]; //cria uma lista
//lista.push("uva"); //adiciona elementos
//lista.pop(); //exclui ultimo elemento
//console.log(lista); //imprime lista
//console.log(lista.length); //mostra tamanho da lista
//console.log(lista.reverse()); //mostra os elementos de tras pra frente
//console.log(lista.toString()); //mostra lista como string
//console.log(lista.join(" - ")); //mostra a lista separada por um traço
//var frutas = [{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"}]; //dicionario,cria uma lista com varias caracteristicas
//alert(frutas[1].nome); //mostra a posição 1 do dicionario
/*var idade = prompt("Qual a sua idade?"); //prompt exibe uma pergunta ao usuario
if(idade>= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}; 

var count = 0;
while(count<5){
    console.log(count);
    count++;
}

var count;
for(count=0;count<=5;count++){
    alert(count);
};

var d= new Date();
alert(d); // mostra a data 
alert(d.getMonth()+1); //mostra o mes
alert(d.getDay); //mostra o dia
alert(d.getMinutes) //mostra os minutos
*/
/*
function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}
alert(setReplace("Vai Japão","Japão","Brasil"));

function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

function botao(){
document.getElementById("agradecimento").innerHTML="<b>obrigado por clicar</b>";   
//alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.youtube.com/"); //abre em uma janela
    window.location.href ="https://www.youtube.com/"; //abre na mesma janela

}
function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse!";
   // alert("trocar texto");
   elemento.innerHTML="obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML="passe o mouse aqui";
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";

}
function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
