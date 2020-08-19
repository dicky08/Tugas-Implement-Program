function divide(angka) {
  console.log(angka);
  if (typeof angka !== "number") {
    console.log("Masukan Number");
  } else {
    let arr = angka.toString();
    let spl = arr.split("0");
    let kosong = [];
    spl.map((m) => {
      let sorting = m.split("").sort();
      let ubahAngka = Number(sorting.join(""));
      kosong += ubahAngka;
    });
    console.log(kosong);
  }
}
divide(1324509876504321);
