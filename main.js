//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


//funções

let randomPhraser

randomPhraser = Math.round(Math.random() * 7);

switch (randomPhraser ) {
  case 1:
    document.querySelector(".card2 p").innerText =
    "A vida trará coisas boas se tiver paciência.";
  break;

  case 2:
    document.querySelector(".phrase p").innerText =
    "Defeitos e virtudes são apenas dois lados da mesma moeda.";
  break;

  case 3:
    document.querySelector(".phrase p").innerText =
    "A maior de todas as torres começa no solo.";
  break;

  case 4:
    document.querySelector(".phrase p").innerText =
    "Não há que ser forte. Há que ser flexível";
  break;

  case 5:
    document.querySelector(".phrase p").innerText =
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração";
  break;

  case 7:
    document.querySelector(".phrase p").innerText =
    "A juventude não é uma época da vida, é um estado de espírito";
  break;
  }


btnTry.addEventListener('click', function(toggleScreen) {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
})

btnReset.addEventListener('click', function(toggleScreen) {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")

  window.location.reload(true)

})