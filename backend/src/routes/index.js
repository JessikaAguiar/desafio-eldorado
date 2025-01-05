const DeviceRoutes = require('./DeviceRoutes');
const CategoryRoutes = require('./CategoryRoutes');

module.exports = [
  { name: '/devices', router: DeviceRoutes },
  { name: '/categories', router: CategoryRoutes },
];
