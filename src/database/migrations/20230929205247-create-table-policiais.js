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

module.exports = { PolicialModel };
