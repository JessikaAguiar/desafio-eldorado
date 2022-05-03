const { Sequelize } = require('sequelize')
const database = require('../index')
const CategoryModel = require('./CategoryModel')

const DeviceModel = database.define('devices', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING(16),
        allowNull: false
    },
    part_number: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamps: false, tableName: 'devices' })


DeviceModel.belongsTo(CategoryModel, {
    foreignKey: 'category_id'
})

CategoryModel.hasMany(DeviceModel, {
    foreignKey: 'category_id'
})

module.exports = DeviceModel
