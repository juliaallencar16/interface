export interface AnimalProps {
    nomePaciente: string;
    nomeTutor: string;
    pesoKG: number;
}
export interface CachorroProps extends AnimalProps {
    porte: string;
    precisaTosa: boolean;
}
export interface GatoProps extends AnimalProps {
    fiveFelvTestado: boolean;
    isIndoors: boolean;
}