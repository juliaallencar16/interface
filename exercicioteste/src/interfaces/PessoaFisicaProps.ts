export interface PessoaFisicaProps {
cpf: string;
nome:string;
telefone:string;
email:string
dataNascimento:string;

}
export interface ClienteProps extends PessoaFisicaProps{
    clienteDesde: string;

}

export interface FuncionarioProps extends PessoaFisicaProps{
    registro: string;
    carteiraTrabalho: string;
    pis:string;
}