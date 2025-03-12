import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { logger, LoggerMiddleware } from "src/logger.middleware";
import { CatsController } from './cats/cats.controllers';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger)
    .exclude({path: "cats", method: RequestMethod.GET}, {path: "cats", method: RequestMethod.POST}, 'cats/{*splat}')
    .forRoutes(CatsController);
  }
}
