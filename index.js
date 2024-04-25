let cont = 1;
let number = document.querySelector("#inValor").nodeValue;

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  number = Number(document.querySelector("#inValor").value);
  let result = document.querySelector(".result");

  while (cont <= 10) {
    let h2 = document.createElement("h2");

    result.append(h2);

    h2.innerHTML = `${cont}*${number}= ${cont * number}`;

    cont++
  }

});
