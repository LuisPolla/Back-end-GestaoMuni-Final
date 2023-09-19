const { UserModel } = require('../../models/user-model'); 

async function getTotalUsers(req, res) {
  try {
    const count = await UserModel.count(); // Use o método 'count' para contar os usuários

    // Envie a resposta como um objeto JSON
    res.json({ totalUsers: count });
  } catch (error) {
    console.error('Erro ao obter a contagem de usuários:', error);
    res.status(500).json({ error: 'Erro ao obter a contagem de usuários' });
  }
}

module.exports = {
  getTotalUsers,
};
