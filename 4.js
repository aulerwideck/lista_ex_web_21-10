function verificaPrimo(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= (num/2)+1; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let vetor = [];
for (let i = 0; i < 10; i++) {
    vetor[i] = (Math.floor(Math.random() * 100));
    console.log(vetor[i]);
}

console.log("Números Primos:");
for (let i = 0; i < 10; i++) {
    if (verificaPrimo(vetor[i])) {
        console.log(vetor[i]);
    }
}