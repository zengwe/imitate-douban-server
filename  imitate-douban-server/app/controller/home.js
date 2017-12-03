'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  * index() {
    const serviceRes = yield this.ctx.service.test.index();
    const result = yield this.app.model.Movie.findAll();
    console.log(result);
    this.ctx.body = 'hi, egg' + serviceRes;
  }
}

module.exports = HomeController;
