const { MunicaoModel } = require('../../models/municao-model');

const getTotalCalibresDiversificados = async (req, res) => {
    try {
        // Lógica para calcular o total de calibres diversificados
        const distinctCalibres = await MunicaoModel.aggregate('calibragem', 'DISTINCT', { plain: false });

        const totalCalibres = distinctCalibres.length; // O número de resultados distintos

        res.json({ totalCalibres });
    } catch (error) {
        console.error('Erro ao calcular o total de calibres diversificados:', error);
        res.status(500).json({ error: 'Erro interno do servidor ao calcular os calibres diversificados' });
    }
};

module.exports = { getTotalCalibresDiversificados };