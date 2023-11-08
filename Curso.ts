class Curso {

    constructor(
        private codigo_curso: number,
        private nome: string,
        private carga_horaria: number,
    ) { }

    excluir() {
        console.log(`Curso excluido: ${this.codigo_curso}`);
    }
}

export default Curso;