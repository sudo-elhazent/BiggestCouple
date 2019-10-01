
function pasanganTerbesar(num) {
	var number = String(num).split('');
	var angka = [];
	for (var i = 0; i < number.length; i++) {
		angka[i] = number[i] + number[i + 1];
	}
	var digit = angka[0];
	for (var j = 1; j < angka.length; j++){
		if (angka[j] > digit){
			digit = angka[j]
		}
	}
	return digit;
}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
