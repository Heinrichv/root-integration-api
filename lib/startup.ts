import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as swagger from 'swagger-express';
import * as express from 'express';
import { Application } from 'express';

class Startup {

  constructor() {
    this.app = express();
    this.config();
  }

  public app: Application;

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new Startup().app;