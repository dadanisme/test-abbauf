// 1..100
const numbers = [...Array(100).keys()].map((i) => i + 1);

function problem2(number) {
  if (number % 3 === 1) {
    return false;
  } else if (number % 5 === 0 && number % 2 === 0) {
    return true;
  }
}

console.log(numbers.filter(problem2));

/*
  Masalah:
  - Tidak disebutkan apa yang harus dilakukan jika angka tersebut memenuhi kedua kriteria
*/
