import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckMiddleware } from './check-middleware.middleware';
import { checkName } from './middleware/checkName.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
// => functional middleware
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(checkName).forRoutes("app/name");
  }
}

// => normal middleware
// export class AppModule implements NestModule{
//   configure(consumer: MiddlewareConsumer){
//     // consumer.apply(CheckMiddleware).forRoutes(AppController);
//     consumer.apply(CheckMiddleware).forRoutes("app");
//   }
// }
