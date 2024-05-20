import CepModel from "../Model/CepModel";

export class CepController {
  static lastSearchedCep = null;

  static async fetchCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        const cepModel = new CepModel( data.cep,data.logradouro, data.bairro, data.localidade, data.uf);
        this.lastSearchedCep = cepModel;
      } else {
        console.log('CEP não encontrado');
        this.lastSearchedCep = null;
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      this.lastSearchedCep = null;
    }
  }

  static getLastSearchedCep() {
    return this.lastSearchedCep;
  }
}
