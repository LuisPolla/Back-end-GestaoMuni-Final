const { Sequelize } = require('sequelize');
const configDatabase = require('./config/config');

const database = new Sequelize(configDatabase);

const { UserModel } = require('../models/user-model');
const { MunicaoModel } = require('../models/municao-model');
const { HistoricoModel } = require('../models/historico-model');
const { PolicialModel } = require('../models/policial-model');

Policial.hasMany(Historico);
Historico.belongsTo(Policial);

Municao.hasMany(Historico);
Historico.belongsTo(Municao);

UserModel.init(database);
MunicaoModel.init(database);
HistoricoModel.init(database);
PolicialModel.init(database);

UserModel.associate(database.models);
MunicaoModel.associate(database.models);
PolicialModel.associate(database.models);
HistoricoModel.associate(database.models);

module.exports = database;
