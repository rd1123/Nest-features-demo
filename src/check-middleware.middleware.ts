import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Request, Response } from 'express';

@Injectable()
export class CheckMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if(req.query.name === "nick"){
      next();
    } else {
      res.status(HttpStatus.BAD_REQUEST).send("Not correct query name");
    }
  }
}
