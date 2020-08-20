function palindrome(params) {
    let ubahStr = params.toString();
    let kecilkan = ubahStr.toLowerCase();
    let panjang = kecilkan.length;
    if (params == '') {
        console.log('Tidak Boleh Kosong');
        return false;
    }
    let str = '';
    for (let i = panjang - 1; i >= 0; i--) {
        str += kecilkan[i];
    }
    if (kecilkan !== str) {
        console.log('Bukan Palindrom');
    } else {
        console.log('Palindrom');
    }
}
palindrome('Malam');