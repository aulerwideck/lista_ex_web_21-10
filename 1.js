let vetor = [];
for (let i = 0; i < 10; i++) {
    vetor[i] = (Math.floor(Math.random() * 100));
    console.log(vetor[i]);
}

console.log("Números Pares:");
for (let i = 0; i < 10; i++) {
    if (vetor[i] % 2 === 0) {
        console.log(vetor[i]);
    }
}