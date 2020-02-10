import { Request, Response } from 'express';
import log4js from 'log4js';
import { CrudController } from '../CrudController';

const logger = log4js.getLogger();
logger.level = 'debug';


export class UserController extends CrudController {
  public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
    throw new Error("Method not implemented.")
  }

  public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
    res.json({ message: 'GET /user request received' });
    const user = {
      id: 1,
      name: 'hogehgoe',
      age: 23,
    }
    const users = [
      { id: 1, name: 'yamada taro', age: 23 },
      { id: 2, name: 'wakabayashi ichiro', age: 30 },
    ]
    logger.debug('get user request: ' + JSON.stringify(users))
    // logger.debug('get user request: ' + JSON.stringify(user))
  }

  public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
    throw new Error("Method not implemented.")
  }

  public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
    throw new Error("Method not implemented.")
  }
}
