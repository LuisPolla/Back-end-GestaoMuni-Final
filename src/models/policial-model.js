const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database');

class PolicialModel extends Model {}

PolicialModel.init(
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idade: {
            type: DataTypes.INTEGER,
        },
        cargo: {
            type: DataTypes.STRING,
        },
        patente: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Policial', 
        tableName: 'policiais', 
    }
);

PolicialModel.associate = (models) => {
    PolicialModel.belongsToMany(models.HistoricoModel, {
        through: 'Historico', // O nome da tabela intermediária
        foreignKey: 'policialId', // A coluna que faz a ligação com o PolicialModel
        as: 'historicos', // Um alias para o relacionamento
    });
};

module.exports = { PolicialModel };
