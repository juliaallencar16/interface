import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../interfaces/ContaBancariaProps.js";

export class ContaCorrente extends ContaBancaria<ContaCorrenteProps> {

    public get getLimiteChequeEspecial(): number {
        return this.props.limiteChequeEspecial;
    }

    public set setLimiteChequeEspecial(valor: number) {
        if (valor < 0) {
            console.log("\nERRO: O limite do cheque especial não pode ser negativo!");
            return;
        }

        this.props.limiteChequeEspecial = valor;
    }
}