function alphabetPosition(text) {
  const alphabetIndex = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  // let newText = text.split("").map((letter) => {
  //   letter = letter.toLowerCase();
  //   if (/^[a-z\s]+$/.test(letter)) {
  //     return alphabetIndex[letter];
  //   }
  // });

  // newText = newText.filter((item) => item).join(" ");

  let newText = text
    .toLowerCase()
    .replace(/[^a-z]/gi, "")
    .split("")
    .map((letter) => alphabetIndex[letter])
    .join(" ");

  return newText;
}

//-----------------------------------------------------
let alphabetPosition2 = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(" ");
//-----------------------------------------------------

console.log(alphabetPosition("Helder Ramos de Oliveira"));
console.log(alphabetPosition2("Helder Ramos de Oliveira"));
