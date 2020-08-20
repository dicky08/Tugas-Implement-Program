function divide(angka) {
  if (typeof angka !== "number") {
    console.log("Masukan Number");
  } else {
    let arr = angka.toString();
    let spl = arr.split("0");
    let kosong = '';
    spl.map((m) => {
      let sorting = m.split("").sort();
      let ubahAngka = sorting.join("");
      kosong += ubahAngka;
    });
    console.log(parseInt(kosong));
  }
}
divide(13245098765123234204321);