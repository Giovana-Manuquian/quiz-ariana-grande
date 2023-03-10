let img = window.document.getElementById("imagem");
let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0; // pontos para o placar
let placar = 0; // placar

// PERGUNTA
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// ALTERNATIVAS
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");
// ol li com as alternativas
let alternativas = document.querySelector("#alternativas");

const q0 = {
  numQuestao: 0,
  pergunta: "Pergunta",
  alternativaA: "Alternativa A",
  alternativaB: "Alternativa B",
  alternativaC: "Alternativa C",
  alternativaD: "Alternativa D",
  correta: "0",
};

const q1 = {
  numQuestao: 1,
  pergunta: "Qual foi o último ano que Ariana Grande veio ao Brasil?",
  alternativaA: "2015",
  alternativaB: "2016",
  alternativaC: "2017",
  alternativaD: "2018",
  correta: "2017",
};

const q2 = {
  numQuestao: 2,
  pergunta: "Quantos singles Ariana Grande possui?",
  alternativaA: "37",
  alternativaB: "36",
  alternativaC: "35",
  alternativaD: "34",
  correta: "37",
};

const q3 = {
  numQuestao: 3,
  pergunta:
    "Complete a frase música 'Too Close': 'But I just can't let it ____'.",
  alternativaA: "go",
  alternativaB: "down",
  alternativaC: "disappoint",
  alternativaD: "show",
  correta: "show",
};

const q4 = {
  numQuestao: 4,
  pergunta:
    "Complete a frase da música 'Best Mistake': 'I wish that you were _____'.",
  alternativaA: "sad",
  alternativaB: "dead",
  alternativaC: "happy",
  alternativaD: "here",
  correta: "happy",
};

const q5 = {
  numQuestao: 5,
  pergunta: "Quantos videoclipes Ariana Grande tem?",
  alternativaA: "28",
  alternativaB: "29",
  alternativaC: "30",
  alternativaD: "31",
  correta: "29",
};

const q6 = {
  numQuestao: 6,
  pergunta: "Quantas collabs Ariana Grande tem?",
  alternativaA: "53",
  alternativaB: "55",
  alternativaC: "61",
  alternativaD: "65",
  correta: "53",
};

const q7 = {
  numQuestao: 7,
  pergunta: "Quantos albúns de estúdios Ariana Grande possui",
  alternativaA: "5",
  alternativaB: "6",
  alternativaC: "7",
  alternativaD: "8",
  correta: "6",
};

const q8 = {
  numQuestao: 8,
  pergunta: "Complete a frase da música 'Moonlight': 'He makes me ____'",
  alternativaA: "cry",
  alternativaB: "happy",
  alternativaC: "love",
  alternativaD: "dance",
  correta: "dance",
};

const q9 = {
  numQuestao: 9,
  pergunta: "Quantos prêmios Ariana Grande possui?",
  alternativaA: "475",
  alternativaB: "482",
  alternativaC: "495",
  alternativaD: "502",
  correta: "495",
};

const q10 = {
  numQuestao: 10,
  pergunta:
    "Complete a frase da música 'everytime': 'Because I'm really not ____'.",
  alternativaA: "care",
  alternativaB: "think",
  alternativaC: "there",
  alternativaD: "here",
  correta: "here",
};

const q11 = {
  numQuestao: 11,
  pergunta: "Quantas participações de filmes/séries Ariana Grande fez?",
  alternativaA: "13",
  alternativaB: "11",
  alternativaC: "15",
  alternativaD: "10",
  correta: "13",
};

const q12 = {
  numQuestao: 12,
  pergunta:
    "Complete a frase da música 'ghostin': 'You been so _____, you been so good'.",
  alternativaA: "helpful",
  alternativaB: "understanding",
  alternativaC: "comprehensive",
  alternativaD: "useful",
  correta: "understanding",
};

const q13 = {
  numQuestao: 13,
  pergunta: "Complete a frase da música 'nasty': 'Open my mind for ____'.",
  alternativaA: "nobody",
  alternativaB: "them",
  alternativaC: "you",
  alternativaD: "him",
  correta: "you",
};

const q14 = {
  numQuestao: 14,
  pergunta:
    "Complete a frase da música 'bad idea': 'Wishin' you would come and ____'.",
  alternativaA: "save me",
  alternativaB: "kiss me",
  alternativaC: "hug me",
  alternativaD: "love me",
  correta: "save me",
};

const q15 = {
  numQuestao: 15,
  pergunta:
    "Complete a frase da música 'Love Language': 'Baby talk your ___ all night'.",
  alternativaA: "secrets",
  alternativaB: "problems",
  alternativaC: "things",
  alternativaD: "shit",
  correta: "shit",
};

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [
  q0,
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13,
  q14,
  q15,
];

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;

let totalDeQuestoes = questoes.length - 1;
console.log("Total de questões " + totalDeQuestoes);
total.textContent = totalDeQuestoes;

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;
d.textContent = q1.alternativaD;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");
d.setAttribute("value", "1D");

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao;
  numQuestao.textContent = questoes[nQuestao].numQuestao;
  pergunta.textContent = questoes[nQuestao].pergunta;
  a.textContent = questoes[nQuestao].alternativaA;
  b.textContent = questoes[nQuestao].alternativaB;
  c.textContent = questoes[nQuestao].alternativaC;
  d.textContent = questoes[nQuestao].alternativaD;
  a.setAttribute("value", nQuestao + "A");
  b.setAttribute("value", nQuestao + "B");
  c.setAttribute("value", nQuestao + "C");
  d.setAttribute("value", nQuestao + "D");
}

function bloquearAlternativas() {
  a.classList.add("bloqueado");
  b.classList.add("bloqueado");
  c.classList.add("bloqueado");
  d.classList.add("bloqueado");
}

function desbloquearAlternativas() {
  a.classList.remove("bloqueado");
  b.classList.remove("bloqueado");
  c.classList.remove("bloqueado");
  d.classList.remove("bloqueado");
}

function verificarSeAcertou(nQuestao, resposta) {
  let numeroDaQuestao = nQuestao.value;
  console.log("Questão " + numeroDaQuestao);

  let respostaEscolhida = resposta.textContent;
  //console.log("RespU " + respostaEscolhida)

  let certa = questoes[numeroDaQuestao].correta;
  //console.log("RespC " + certa)

  if (respostaEscolhida == certa) {
    //console.log("Acertou")
    //respostaEsta.textContent = "Correta 😊"
    pontos += 10; // pontos = pontos + 10
  } else {
    //console.log("Errou!")
    //respostaEsta.textContent = "Errada 😢"
  }

  // atualizar placar
  placar = pontos;
  instrucoes.textContent = "Pontos " + placar;

  // bloquear a escolha de opcoes
  bloquearAlternativas();

  setTimeout(function () {
    //respostaEsta.textContent = '...'
    proxima = numeroDaQuestao + 1;

    if (proxima > totalDeQuestoes) {
      console.log("Fim do Jogo!");
      fimDoJogo();
    } else {
      proximaQuestao(proxima);
    }
  }, 250);
  desbloquearAlternativas();
}

function fimDoJogo() {
  instrucoes.textContent = "Fim de Jogo!";
  numQuestao.textContent = "";

  let pont = "";
  pontos == 0 ? (pont = "ponto") : (pont = "pontos");

  pergunta.textContent = "Você conseguiu " + pontos + " " + pont;

  aviso.textContent = "Você conseguiu " + pontos + " " + pont;

  // img.src = 'fotomarvel.jpg'

  // a.textContent = ""
  // b.textContent = ""
  // c.textContent = ""
  // d.textContent = ""

  // a.setAttribute('value', '0')
  // b.setAttribute('value', '0')
  // c.setAttribute('value', '0')
  // d.setAttribute('value', '0')

  // OCULTAR O ARTICLE DA QUESTAO
  articleQuestoes.style.display = "none";

  setTimeout(function () {
    pontos = 0; // zerar placar
    location.reload();
  }, 2000);
}
