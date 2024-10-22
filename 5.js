let vetor = [];
vetor[0] = Number(prompt("Digite a nota 1"));
vetor[1] = Number(prompt("Digite a nota 2"));
vetor[2] = Number(prompt("Digite a nota 3"));
vetor[3] = Number(prompt("Digite a nota 4"));
vetor[4] = Number(prompt("Digite a nota 5"));

let soma = 0;
for (let i = 0; i < 5; i++) {
    soma += vetor[i];
}

let media = soma/5;
console.log("Média:" + media);

if(media >= 7)
    console.log("Aprovado");
else
    console.log("Reprovado");
    