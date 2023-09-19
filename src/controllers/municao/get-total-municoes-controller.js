const { MunicaoModel } = require('../../models/municao-model');

exports.getTotalMunicoes = async (req, res) => {
  try {
    const totalMunicoes = await MunicaoModel.countMunicoes();
    res.json({ totalMunicoes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};