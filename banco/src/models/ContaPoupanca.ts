import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interfaces/ContaBancariaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps> {

    public get getTaxaRendimentoMensal(): number {
        return this.props.taxaRendimentoMensal;
    }

    public set setTaxaRendimentoMensal(valor: number) {
        if (valor < 0) {
            console.log("\nERRO: A taxa de rendimento não pode ser negativa!");
            return;
        }

        this.props.taxaRendimentoMensal = valor;
    }
}