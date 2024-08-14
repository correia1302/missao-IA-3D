const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você apoia o racismo?",
        alternativas: [
            {
                texto: "sim eu apoio o movimento racista ",
                afirmacao: [
                    "você realmente já ouviu  falar o que é o racismo?  A sua história e quantas milhares de pessoa foram prejudicadas e mortas? ",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "não, sou contra o movimento racista ",
                afirmacao: [
                    "que legal! concordamos que o racismo não é uma coisa boa ",
                    "afirmacao 2"
                    ]
            }           
            
        ]
    },
    {
        enunciado: "principal dano criado pelo rascimo",
        alternativas: [
            {
                texto:"fortalece a altoestima das vitimas",
                afirmacao: [
                    "enfraquece a altoestisma, perpetuando sentimentos de inferioridade",
                    "afirmacao 2"
                    ]
            },
            {
                texto: "Contribui para exclusãõ social e marginalização de grupos minoridarios",
                afirmacao: [
                    "reforça a desigualdade e esteriótipos discriminatórios",
                    "afirmacao 2"
                    ]
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto:"Alternativa 1 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            },
            {
                texto:"Alternativa 2 da pergunta 3",
                afirmacao: [
                    "afirmacao 1",
                    "afirmacao 2"
                    ]
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
