import ClimaModel from "../Model/ClimaModel";


export class ClimaController {
  static lastSearchedClima = null;

  static async fetchClima() {
    try {
        const url = `https://apiadvisor.climatempo.com.br/api/v1/weather/locale/7615/current?token=256c208e151f17cde47941db090645c0`;
    
        const response = await fetch(url);
        const data = await response.json();

      if (!data.erro) {
        const climaModel = new ClimaModel(data.id, data.name, data.state, data.country);
        climaModel.setData(data.data);
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
export default ClimaController;