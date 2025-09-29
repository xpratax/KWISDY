const LOCAIS = ["boca","rosto","mão","pés","seios","coxa","abdômen","🍑","florzinha 🌸"];

const REACTIONS = {
  "beijar": {
    "boca": {text:"Ela corresponde com intensidade apaixonada.", pts:3},
    "rosto": {text:"Ela sorri e se aproxima mais.", pts:2},
    "mão": {text:"Ela ri baixinho, achando fofo.", pts:1},
    "pés": {text:"Ela se surpreende, mas aceita.", pts:1},
    "seios": {text:"Ela suspira fundo e se entrega mais.", pts:4},
    "coxa": {text:"Ela cora, mas não recua.", pts:2},
    "abdômen": {text:"Ela solta um riso tímido e arrepia.", pts:2},
    "🍑": {text:"Ela se arrepia e se aproxima mais de você.", pts:4},
    "florzinha 🌸": {text:"Ela fecha os olhos, tomada pela sensação.", pts:5}
  },
  "acariciar": {
    "boca": {text:"Ela ri e segura sua mão.", pts:1},
    "rosto": {text:"Ela fecha os olhos, sorrindo serena.", pts:2},
    "mão": {text:"Ela aperta de volta, mostrando carinho.", pts:1},
    "pés": {text:"Ela relaxa, aceitando o toque.", pts:1},
    "seios": {text:"Ela suspira com intensidade crescente.", pts:4},
    "coxa": {text:"Ela abre espaço para mais.", pts:3},
    "abdômen": {text:"Ela se contorce levemente, arrepiada.", pts:2},
    "🍑": {text:"Ela geme baixinho, rendida.", pts:5},
    "florzinha 🌸": {text:"Ela se entrega totalmente ao gesto.", pts:6}
  }
  // Você pode adicionar infinitas ações aqui: "lamber", "morder", "abraçar"...
};

let score = 0;

function executarAcao() {
  const acao = document.getElementById("acao").value.toLowerCase().trim();
  const local = document.getElementById("local").value;
  const resultBox = document.getElementById("resultado");
  const pontosBox = document.getElementById("pontuacao");

  if (!acao) {
    resultBox.textContent = "Digite uma ação primeiro!";
    return;
  }

  let reaction;
  if (REACTIONS[acao] && REACTIONS[acao][local]) {
    reaction = REACTIONS[acao][local];
  } else {
    reaction = {text:`Ela reage de forma inesperada ao tentar ${acao} em ${local}.`, pts:1};
  }

  score += reaction.pts;
  resultBox.textContent = reaction.text;
  pontosBox.textContent = `Pontuação: ${score}`;
}o
