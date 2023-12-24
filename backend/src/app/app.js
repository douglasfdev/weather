import express, { Router } from 'express';
import cors from 'cors';
import { router } from './routes/index.js';

class App {
  app
  router

  constructor() {
    this.app = express();
    this.router = new Router();
    this.app.use(cors())
    this.routes();
  }

  routes() {
    this.app.use(express.json());
    this.app.use(this.router.use(router));
  }

}

export default new App().app