
function pasanganTerbesar(num) {
	var nomer = String(num).split('');
	var nomors = [];
	for (var i = 0; i < nomer.length; i++) {
		nomors[i] = nomer[i] + nomer[i + 1];
	}
	var digit = nomors[0];
	for (var j = 1; j < nomors.length; j++){
		if (nomors[j] > digit){
			digit = nomors[j]
		}
	}
	return digit;
}
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
