const { MunicaoModel } = require('../../models/municao-model');

// Controller para calcular o total de calibres diversificados
async function getTotalCalibresDiversificados(req, res) {
  try {
    // Use o método distinct para obter uma lista única de calibragens
    const calibragens = await MunicaoModel.distinct('calibragem');

    // Calcule o total de calibres diversificados
    const totalCalibres = calibragens.length;

    res.json({ totalCalibres });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao calcular o total de calibres diversificados' });
  }
}

module.exports = { getTotalCalibresDiversificados };
