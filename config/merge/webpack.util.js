const path = require('path');
module.exports = {
  resolveApp(dirtory) {
    return path.resolve(__dirname, '../../', dirtory);
  }
};
