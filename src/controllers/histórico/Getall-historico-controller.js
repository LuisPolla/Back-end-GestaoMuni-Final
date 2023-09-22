const { HistoricoModel } = require('../../models/historico-model');

class GetAllHistoricoController {
  async getAll(req, res) {
    try {
      const { order } = req.query;
      let historicos;

      if (order === 'asc') {
        historicos = await HistoricoModel.findAll({
          order: [['data', 'ASC']], // Ordena por data em ordem ascendente (mais antigos)
        });
      } else if (order === 'desc') {
        historicos = await HistoricoModel.findAll({
          order: [['data', 'DESC']], // Ordena por data em ordem descendente (mais recentes)
        });
      } else {
        historicos = await HistoricoModel.findAll();
      }

      return res.status(200).json(historicos);
    } catch (error) {
      console.error('Erro ao buscar históricos:', error);
      return res.status(500).json({ error: 'Erro ao buscar históricos' });
    }
  }
}

module.exports = new GetAllHistoricoController();
