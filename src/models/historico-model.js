const { Model, DataTypes } = require('sequelize');

class HistoricoModel extends Model {
	static init(database) {
		super.init({
			userId: DataTypes.INTEGER,
			policialId: { 
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: 'policiais', key: 'id' }, 
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			municaoId: DataTypes.INTEGER,
			quantidadeEntregue: DataTypes.INTEGER,
			dataCriacao: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW
			}
		}, {
			modelName: 'Historico',
			tableName: 'historico',
			timestamps: false,
			sequelize: database
		});
	}
	
}

module.exports = { HistoricoModel };
