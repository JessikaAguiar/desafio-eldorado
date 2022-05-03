const Repositories = require('../repositories')

const DeviceController = require('./DeviceController')
const CategoryController = require('./CategoryController')
const LoginController = require('./LoginController')

module.exports = {
    DeviceController: new DeviceController(Repositories.DeviceRepository),
    CategoryController: new CategoryController(Repositories.CategoryRepository),
    LoginController: new LoginController(Repositories.UserRepository),
}
