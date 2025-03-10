import { Module } from '@nestjs/common';
import { AppController, CatsController, WildCardController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, WildCardController],
  providers: [AppService],
})
export class AppModule {}
