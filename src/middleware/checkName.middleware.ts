import { HttpStatus } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function checkName(req: Request, res: Response, next: NextFunction) {
  if (req.query.name === "nick") {
    next();
  } else {
    res.status(HttpStatus.BAD_REQUEST).send("Not correct name");
  }
}