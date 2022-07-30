enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: Profissao //? deixa de se obrigatorio
}

const Joelma: Pessoa = {
    nome:'Joelma',
    idade: 41,
    profissao: Profissao.Professora
}

interface Estudante extends Pessoa{
    materias: string[]
}

const monica: Estudante = {
    nome: 'Monica',
    idade: 25,
    materias: ["programacao"]

}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);
    }
}
listar(monica.materias);