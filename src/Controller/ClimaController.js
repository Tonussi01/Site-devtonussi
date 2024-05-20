import ClimaModel from "../Model/ClimaModel";

export class ClimaController {
  static lastSearchedClima = null;

  static async fetchClima(climaData) {
    try {
        const url = `http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${encodeURIComponent(climaData.name)}&state=${encodeURIComponent(climaData.state)}&token=e433b34fa2075ac0a01441b4e30071a4`;
        console.log('URL da requisição:', url);
    
        const response = await fetch(url);
        const data = await response.json();
        console.log('Resposta API:', data);

      if (!data.erro) {
        const climaModel = new ClimaModel(data[0].id, data[0].name, data[0].state, data[0].country);
        this.lastSearchedClima = climaModel;
      } else {
        console.log('Local não encontrado no banco climático');
        this.lastSearchedClima = null;
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      this.lastSearchedClima = null;
    }
  }

  static getLastSearchedClima() {
    return this.lastSearchedClima;
  }
}