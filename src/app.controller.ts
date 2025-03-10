import { Controller, Get, Req, Post, Redirect, Query, Param, HostParam, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { query, Request } from 'express';
import { version } from 'os';

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('https://docs.nestjs.com', 302)
  getHello(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}

@Controller('wildcard') 
export class WildCardController {
  @Get('abcd/*')
  findAll() {
    return 'This route uses a wildcard';
  }
}

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query('age') age:number, @Query('breed') breed: string): string{
    return `This action return all cats filtered by age ${age} and breed ${breed}`;
  }

  @Get(':id')
  findOne(@Param() params: any): string{
    console.log(params.id)
    return `This action return a ${params.id} cat`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}

@Controller({host: 'admin.example.com'})
export class AdminController {
  @Get()
  index(): string {
    return 'Admin page';
  }
}

@Controller({host: ':account.example.com'})
export class AccountController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}