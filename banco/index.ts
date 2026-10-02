import readLine from "readline-sync";
import { ContaCorrente } from "./src/models/ContaCorrente.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";

console.log("=== CADASTRO DE CONTAS ===");

// Instanciando a conta corrente
const contaCorrente = new ContaCorrente({
    numeroConta: "12345-6",
    titular: "Carlos Silva",
    saldo: 1500,
    limiteChequeEspecial: 1000
});

console.log(`\nConta corrente cadastrada: ${contaCorrente.getNumeroConta}`);
console.log(`Titular: ${contaCorrente.getTitular}`);

// Alterando dados pelo teclado
contaCorrente.setNumeroConta = readLine.question(
    "\nDigite o novo número da conta: "
);

contaCorrente.setTitular = readLine.question(
    "Digite o novo titular: "
);

contaCorrente.setSaldo = Number(
    readLine.question("Digite o novo saldo: ")
);

contaCorrente.setLimiteChequeEspecial = Number(
    readLine.question("Digite o limite do cheque especial: ")
);

// Exibindo os dados
console.log("\n================================================");
console.log("           DADOS DA CONTA CORRENTE");
console.log("================================================");
console.log(`Número da conta:          ${contaCorrente.getNumeroConta}`);
console.log(`Titular:                  ${contaCorrente.getTitular}`);
console.log(`Saldo:                    R$ ${contaCorrente.getSaldo}`);
console.log(`Limite cheque especial:   R$ ${contaCorrente.getLimiteChequeEspecial}`);
console.log("================================================\n");


// Instanciando a conta poupança
const contaPoupanca = new ContaPoupanca({
    numeroConta: "98765-4",
    titular: "Ana Souza",
    saldo: 2500,
    taxaRendimentoMensal: 0.5
});

console.log(`Conta poupança cadastrada: ${contaPoupanca.getNumeroConta}`);
console.log(`Titular: ${contaPoupanca.getTitular}`);

// Alterando dados pelo teclado
contaPoupanca.setNumeroConta = readLine.question(
    "\nDigite o novo número da conta: "
);

contaPoupanca.setTitular = readLine.question(
    "Digite o novo titular: "
);

contaPoupanca.setSaldo = Number(
    readLine.question("Digite o novo saldo: ")
);

contaPoupanca.setTaxaRendimentoMensal = Number(
    readLine.question("Digite a taxa de rendimento mensal: ")
);

// Exibindo os dados
console.log("\n================================================");
console.log("            DADOS DA CONTA POUPANÇA");
console.log("================================================");
console.log(`Número da conta:       ${contaPoupanca.getNumeroConta}`);
console.log(`Titular:               ${contaPoupanca.getTitular}`);
console.log(`Saldo:                 R$ ${contaPoupanca.getSaldo}`);
console.log(`Taxa de rendimento:    ${contaPoupanca.getTaxaRendimentoMensal}%`);
console.log("================================================\n");