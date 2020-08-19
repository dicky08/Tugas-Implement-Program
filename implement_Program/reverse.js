let kalimat = 'saya sedang belajar javascript';
if (kalimat == '') {
    console.log('Tidak boleh kosong');
    return false;
}
if (typeof kalimat == 'number') {
    console.log('Harus bertipe String');
    return false;
}
let pecah = kalimat.split(" ");
let panjang = pecah.length;
if (panjang < 2) {
    console.log('harus lebih dari 1 kata');
    return false;
} else {
    let newString = "";
    for (let i = panjang - 1; i >= 0; i--) {
        newString = `${newString} ${pecah[i]}`;
    }
}

console.log(newString);