const { MunicaoModel, sequelize } = require('../../models'); // Certifique-se de importar corretamente o modelo MunicaoModel e sequelize
const { Op } = require('sequelize'); // Importe Op do Sequelize para usar o operador 'like'

class SearchMunicaoController {
  async searchByModel(req, res) {
    try {
      const { modelo } = req.query; // Obtém o parâmetro de consulta 'modelo' da URL

      const municoes = await MunicaoModel.findAll({
        where: {
          modelo: {
            [Op.like]: `%${modelo}%`, // Use Op.like para buscar munições com o modelo que contenha a sequência fornecida
          },
        },
      });

      return res.status(200).json(municoes);
    } catch (error) {
      console.error('Erro ao buscar munições por modelo:', error);
      return res.status(500).json({ error: 'Erro ao buscar munições por modelo' });
    }
  }
}

module.exports = new SearchMunicaoController();
