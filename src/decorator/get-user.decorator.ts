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
    }, {}); // 此地方的{}是預設值，因為return是一個object所以必須給他一個
  }

  return user;
})