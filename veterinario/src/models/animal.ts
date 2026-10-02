import { AnimalProps } from "../interfaces/animalProps.js";

export class Animal<T extends AnimalProps = AnimalProps> {

    constructor(protected props: T) {}

    public get getNomePaciente(): string {
        return this.props.nomePaciente;
    }

    public get getNomeTutor(): string {
        return this.props.nomeTutor;
    }

    public get getPesoKG(): number {
        return this.props.pesoKG;
    }

    public set setPeso(peso: number) {
        if (peso <= 0) {
            console.log("\nERRO: O peso deve ser maior que zero!");
            return;
        }

        this.props.pesoKG = peso;
    }
}