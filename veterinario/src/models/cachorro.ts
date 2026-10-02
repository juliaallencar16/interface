import { Animal } from "./animal.js";
import { CachorroProps } from "../interfaces/animalProps.js";

export class Cachorro extends Animal<CachorroProps> {

    public get getPorte(): string {
        return this.props.porte;
    }

    public get getPrecisaTosa(): boolean {
        return this.props.precisaTosa;
    }
}