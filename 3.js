let vetor = [];
let total = 0;
for (let i = 0; i < 10; i++) {
    vetor[i] = (Math.floor(Math.random() * 100));
    console.log(vetor[i]);
}

for (let i = 0; i < 10; i++) {
    total+=vetor[i];
}

console.log("Soma:" + total);