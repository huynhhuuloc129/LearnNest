import { Module } from '@nestjs/common';
import { AppController, WildCardController } from './app.controller';
import { CatsController } from './cats/cat.controllers';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, WildCardController],
  providers: [AppService],
})
export class AppModule {}
