import { ContaBancariaProps } from "../interfaces/ContaBancariaProps.js";

export class ContaBancaria<T extends ContaBancariaProps = ContaBancariaProps> {

    constructor(protected props: T) {}

    public get getNumeroConta(): string {
        return this.props.numeroConta;
    }

    public get getTitular(): string {
        return this.props.titular;
    }

    public get getSaldo(): number {
        return this.props.saldo;
    }

    public set setNumeroConta(numeroConta: string) {
        if (numeroConta.trim().length === 0) {
            console.log("\nERRO: O número da conta não pode ser vazio!");
            return;
        }

        this.props.numeroConta = numeroConta;
    }

    public set setTitular(titular: string) {
        if (titular.trim().length === 0) {
            console.log("\nERRO: O titular não pode ser vazio!");
            return;
        }

        this.props.titular = titular;
    }

    public set setSaldo(saldo: number) {
        if (saldo < 0) {
            console.log("\nERRO: O saldo não pode ser negativo!");
            return;
        }

        this.props.saldo = saldo;
    }
}