const Repository = require('./Repository')

const UserRepository = require('./UserRepository')
const DeviceRepository = require('./DeviceRepository')
const CategoryRepository = require('./CategoryRepository')

module.exports = {
    UserRepository: new Repository(new UserRepository()),
    DeviceRepository: new Repository(new DeviceRepository()),
    CategoryRepository: new Repository(new CategoryRepository())
}
