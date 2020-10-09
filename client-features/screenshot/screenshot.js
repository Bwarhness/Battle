var exports = module.exports;
const screenshot = require('screenshot-desktop')
exports.setIOListeners = socket => {
  socket.on("screenshot", val => {
    screenshot({ filename: 'demo.png' })
  });
};
