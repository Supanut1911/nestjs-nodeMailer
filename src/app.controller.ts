import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailDto } from './mailDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Post()
  postMail(
    @Body() mailDto: MailDto
  ) {
    return this.appService.postMail(mailDto)
  }
}

