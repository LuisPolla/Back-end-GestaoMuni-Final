// Importe o modelo de munição aqui
const { MunicaoModel } = require('../../models/municao-model');

// Função para buscar todas as munições
async function getAllMunicoes(req, res) {
  try {
    const { sortOrder } = req.query;
    let municoes;

    // Verifique a ordem desejada (ascendente ou descendente)
    const order = sortOrder === 'desc' ? -1 : 1;

    // Consulte o banco de dados e ordene as munições
    if (sortOrder) {
      municoes = await MunicaoModel.find().sort({ modelo: order });
    } else {
      municoes = await MunicaoModel.findAll();
    }

    res.json(municoes);
  } catch (error) {
    console.error('Erro ao buscar munições:', error);
    res.status(500).json({ error: 'Erro ao buscar munições' });
  }
}

module.exports = {
  getAllMunicoes,
};
