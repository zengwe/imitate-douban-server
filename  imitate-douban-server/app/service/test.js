'use strict';
const Service = require('egg').Service;
class test extends Service {
  * index() {
    return new Promise(resolve => resolve(true));
  }
}
module.exports = test;
