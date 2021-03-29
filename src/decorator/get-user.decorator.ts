import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export const User = createParamDecorator((data: string[], req: ExecutionContext) => {
  let user = req.switchToHttp().getRequest().body;
  if (data) {
    user = data.reduce((newUser, prop) => {
      return {
        ...newUser,
        [prop]: user[prop]
      }
    }, {});
  }

  return user;
})