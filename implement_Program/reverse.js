let kalimat = 'diki sayang rere';
if (kalimat == '') {
    console.log('Tidak boleh kosong');
    return false;
} else if (typeof kalimat == 'number') {
    console.log('Harus bertipe String');
    return false;
} else {
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
        console.log(newString);
    }
}