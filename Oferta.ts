class Oferta {

    constructor(
        private codigo_oferta: number,
        private curso: string,
        private professor: object,
        private aluno: [],
    ) { }

    excluir() {
        console.log(`Oferta excluido: ${this.codigo_oferta}`);
    }
}

export default Oferta;