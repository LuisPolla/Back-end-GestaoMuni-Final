const { Model, DataTypes } = require('sequelize');

class MunicaoModel extends Model {
	static init(database) {
		super.init({
			modelo: DataTypes.TEXT,
			calibragem: DataTypes.FLOAT,
			dataFabriacao: DataTypes.DATE,
			estadoConservacao: DataTypes.TEXT,
			quatidadeEmEstoque: DataTypes.INTEGER,
			tipoPonta: DataTypes.TEXT,
			material: DataTypes.TEXT,
			peso: DataTypes.FLOAT,
			empresaFabricante: DataTypes.TEXT
		}, {
			modelName: 'Municao',
			tableName: 'municao',
			timestamps: false,
			sequelize: database
		});
	}

	static associate(models) {
		this.belongsToMany(models.User, { foreignKey: 'municaoId', through: models.Historico });
	}

	static async countMunicoes() {
		try {
		  const count = await this.count();
		  return count;
		} catch (error) {
		  throw new Error(`Erro ao contar munições: ${error.message}`);
		}
	  }
}

module.exports = { MunicaoModel };
