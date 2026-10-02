import readLine from "readline-sync";
import { LampadaInteligente } from "./src/models/LampadaInteligente.js";
import { Termostato } from "./src/models/Termostato.js";

console.log("=== CADASTRO DE DISPOSITIVOS ===");

// Instanciando a lâmpada
const lampada = new LampadaInteligente({
    idRede: "REDE-001",
    nomeLocal: "Sala",
    isLigado: true,
    corHexadecimal: "#FFFFFF",
    nivelBrilho: 80
});

console.log(`\nLâmpada cadastrada: ${lampada.getNomeLocal}`);
console.log(`ID da rede: ${lampada.getIdRede}`);

// Alterando dados pelo teclado
lampada.setBrilho = Number(
    readLine.question("\nDigite o novo nível de brilho: ")
);

// Alternando energia
lampada.alterarEnergia;

// Exibindo os dados
console.log("\n================================================");
console.log("         DADOS DA LÂMPADA INTELIGENTE");
console.log("================================================");
console.log(`ID da rede:       ${lampada.getIdRede}`);
console.log(`Local:            ${lampada.getNomeLocal}`);
console.log(`Ligado:           ${lampada.getIsLigado}`);
console.log(`Cor:              ${lampada.getCorHexadecimal}`);
console.log(`Nível de brilho:  ${lampada.getNivelBrilho}`);
console.log("================================================\n");


// Instanciando o termostato
const termostato = new Termostato({
    idRede: "REDE-002",
    nomeLocal: "Quarto",
    isLigado: true,
    temperaturaAtual: 22,
    temperaturaAlvo: 24
});

console.log(`Termostato cadastrado: ${termostato.getNomeLocal}`);
console.log(`ID da rede: ${termostato.getIdRede}`);

// Alterando temperatura pelo teclado
termostato.setTemperaturaAlvo = Number(
    readLine.question("\nDigite a nova temperatura alvo: ")
);

// Alternando energia
termostato.alterarEnergia;

// Exibindo os dados
console.log("\n================================================");
console.log("             DADOS DO TERMOSTATO");
console.log("================================================");
console.log(`ID da rede:          ${termostato.getIdRede}`);
console.log(`Local:               ${termostato.getNomeLocal}`);
console.log(`Ligado:              ${termostato.getIsLigado}`);
console.log(`Temperatura atual:   ${termostato.getTemperaturaAtual}°C`);
console.log(`Temperatura alvo:    ${termostato.getTemperaturaAlvo}°C`);
console.log("================================================\n");