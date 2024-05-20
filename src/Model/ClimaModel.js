export default class ClimaModel {
    constructor(id, name, state, country) {
        this.id = id;
        this.name = name;
        this.state = state;
        this.country = country;
        this.data = {}; // Inicializa o objeto data como vazio
    }

    // Método para definir os dados do clima
    setData(data) {
        this.data = data;
    }
}