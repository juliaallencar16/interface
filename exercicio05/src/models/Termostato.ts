import { Dispositivo } from "./Dispositivo.js";
import { TermostatoProps } from "../interfaces/DispositivoProps.js";

export class Termostato extends Dispositivo<TermostatoProps> {

    public get getTemperaturaAtual(): number {
        return this.props.temperaturaAtual;
    }

    public get getTemperaturaAlvo(): number {
        return this.props.temperaturaAlvo;
    }

    public set setTemperaturaAlvo(temp: number) {
        this.props.temperaturaAlvo = temp;
    }
}