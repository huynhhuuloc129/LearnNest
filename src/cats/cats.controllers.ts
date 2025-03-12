import { Controller, Post, Body, Get, HttpException, HttpStatus, ParseIntPipe, Param, UsePipes } from "@nestjs/common";
import { CatsService } from "./cats.services";
import { CreateCatDto } from "./dto/create-cat.dto";
import { Cat } from "./interfaces/cat.interface";
import { createCatSchema } from "./zodSchema";
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll() {
        try {
            await this.catsService.findAll();
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "This is a custom message",
            },
            HttpStatus.FORBIDDEN, {
                cause: error
            });
        }
    }

    @Get(":id")
    async findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number) {
        return this.catsService.findOne(id);
    }
}