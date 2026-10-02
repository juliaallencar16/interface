import { Animal } from "./animal.js";
import { GatoProps } from "../interfaces/animalProps.js";

export class Gato extends Animal<GatoProps> {

    public get getFiveFelvTestado(): boolean {
        return this.props.fiveFelvTestado;
    }

    public get getIsIndoors(): boolean {
        return this.props.isIndoors;
    }
}