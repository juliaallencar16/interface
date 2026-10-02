import { DispositivoProps } from "../interfaces/DispositivoProps.js";

export class Dispositivo<T extends DispositivoProps = DispositivoProps> {

    constructor(protected props: T) {}

    public get getIdRede(): string {
        return this.props.idRede;
    }

    public get getNomeLocal(): string {
        return this.props.nomeLocal;
    }

    public get getIsLigado(): boolean {
        return this.props.isLigado;
    }

    public alterarEnergia(): void {
        this.props.isLigado = !this.props.isLigado;
    }
}