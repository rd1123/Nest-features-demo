import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>("roles", context.getHandler()); // get controller's decorator input
    Logger.log(`roles => ${roles}`);

    if (!roles.includes("admin")) { // 如果get到的metadata設定的值不為admin，返回無權限
      return false;
    }

    return true;
  }
}
