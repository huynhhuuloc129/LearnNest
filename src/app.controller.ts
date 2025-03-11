import { Controller, Get, Post, Redirect, Query, Param, HostParam, Body } from '@nestjs/common';
import { AppService } from './app.service';




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