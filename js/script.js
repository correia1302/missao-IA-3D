import {aleatorio, nome} from './aleatorio.js';
import {aleatorio} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn);
const telaInicial = document.querySelector(".tela-inicial);

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciajogo);

function iniciajogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostraPergunta();
}

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
    if(opcaoselecionada.proxima !== undefined) {
        atual = opcaoSelecionada.promixa;
    }else {
        mostraResultado();
        return;
    }
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
    caixaResultado.classlist.add("mostrar");
    botaoJogarNovamente.addEventListener("click", JogarNovamente);
}

function JogarNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPerguntas();
}

function subtituiNome() {
    for (const pergunta of pergutas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

substituiNome();
