'use strict';

const app = require('./server');
const PORT = 8080;

console.log('db synced');
app.listen(PORT, () =>
  console.log(`studiously serving silly sounds on port ${PORT}`));
