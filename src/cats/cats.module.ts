import { Module, Global } from "@nestjs/common";
import { CatsController } from "./cats.controllers";
import { CatsService } from "./cats.services";

@Global()
@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})
export class CatsModule {
    constructor(private catsService: CatsService) {}
}