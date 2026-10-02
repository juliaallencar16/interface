import readLine from "readline-sync";
import { Cachorro } from "./src/models/cachorro.js";
import { Gato } from "./src/models/gato.js";

console.log("=== CADASTRO DE ANIMAIS ===");

// Instanciando o cachorro
const cachorro = new Cachorro({
    nomePaciente: "Thor",
    nomeTutor: "Carlos Silva",
    pesoKG: 12,
    porte: "Médio",
    precisaTosa: true
});

console.log(`\nCachorro cadastrado: ${cachorro.getNomePaciente}`);
console.log(`Tutor: ${cachorro.getNomeTutor}`);

// Alterando o peso pelo teclado
cachorro.setPeso = Number(
    readLine.question("\nDigite o novo peso do cachorro: ")
);

// Exibindo os dados
console.log("\n================================================");
console.log("              DADOS DO CACHORRO");
console.log("================================================");
console.log(`Nome:             ${cachorro.getNomePaciente}`);
console.log(`Tutor:            ${cachorro.getNomeTutor}`);
console.log(`Peso:             ${cachorro.getPesoKG} kg`);
console.log(`Porte:            ${cachorro.getPorte}`);
console.log(`Precisa de tosa:  ${cachorro.getPrecisaTosa}`);
console.log("================================================\n");


// Instanciando o gato
const gato = new Gato({
    nomePaciente: "Mingau",
    nomeTutor: "Ana Souza",
    pesoKG: 5,
    fiveFelvTestado: true,
    isIndoors: true
});

console.log(`Gato cadastrado: ${gato.getNomePaciente}`);
console.log(`Tutor: ${gato.getNomeTutor}`);

// Alterando o peso pelo teclado
gato.setPeso = Number(
    readLine.question("\nDigite o novo peso do gato: ")
);

// Exibindo os dados
console.log("\n================================================");
console.log("                DADOS DO GATO");
console.log("================================================");
console.log(`Nome:             ${gato.getNomePaciente}`);
console.log(`Tutor:            ${gato.getNomeTutor}`);
console.log(`Peso:             ${gato.getPesoKG} kg`);
console.log(`Felv testado:     ${gato.getFiveFelvTestado}`);
console.log(`É indoor:         ${gato.getIsIndoors}`);
console.log("================================================\n");