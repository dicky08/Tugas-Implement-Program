function palindrome(params) {
    if (params == '') {
        console.log('Tidak Boleh Kosong');
        return false;
    }
    let ubahStr = params.toString().toLowerCase();
    let panjang = ubahStr.length;
    let str = '';
    for (let i = panjang - 1; i >= 0; i--) {
        str += ubahStr[i];
    }
    if (ubahStr !== str) {
        console.log('Bukan Palindrom');
    } else {
        console.log('Palindrom');
    }
}
palindrome('alam');