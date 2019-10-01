function pasanganTerbesar(num) {
    var angkaTerbesar = [];
    var stringKe = num.toString();

    for (var i = 0; i < stringKe.length - 1; i++) {
    var pair = stringKe[i] + stringKe[i + 1];
    var pairNumber = Number(pair);

    angkaTerbesar.push(pairNumber)

    }

    angkaTerbesar.sort();
    var max = angkaTerbesar[angkaTerbesar.length - 1];
    return max;
    
}

console.log(pasanganTerbesar(641573));
console.log(pasanganTerbesar(12783456)); 
console.log(pasanganTerbesar(910233)); 
console.log(pasanganTerbesar(71856421)); 
console.log(pasanganTerbesar(79918293)); 