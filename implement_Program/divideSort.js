function divide(angka) {
    if (typeof angka !== 'number') {
        console.log('Masukan Number');
    } else {
        let arr = angka.toString()
        let spl = arr.split("0");
        // Gunakan Destructuring
        let [arr1, arr2, arr3] = spl;
        // Split Lalu Sorting Angka
        let sor1 = arr1.split('').sort();
        let sor2 = arr2.split('').sort();
        let sor3 = arr3.split('').sort();
        // Gabung dengan Spread Operator
        let gabung = [...sor1, ...sor2, ...sor3];
        console.log(Number(gabung.join('')));
    }

}
divide(1232304340342);