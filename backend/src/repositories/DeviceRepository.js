const DeviceModel = require('../database/models/DeviceModel')
const CategoryModel = require('../database/models/CategoryModel')

class DeviceRepository {
    async add(device) {
        try {
            return await DeviceModel.create(device)
        } catch (error) {
            console.log(error.message)
        }
    }

    async selectAll() {
        try {
            return await DeviceModel.findAll({ include: [ { model: CategoryModel } ] })
        } catch (error) {
            console.log(error.message)
        }
    }

    async selectByFilter(filter) {
        try {
            return await DeviceModel.findAll({
                where: filter
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    async update(device) {
        try {
            return await DeviceModel.update(device, {
                where: {
                    id: device.id
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    async remove(id) {
        try {
            return await DeviceModel.destroy({
                where: {
                    id
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = DeviceRepository
