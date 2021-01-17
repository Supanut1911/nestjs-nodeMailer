import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailDto } from './mailDto';

@Injectable()
export class AppService {

  constructor(
    private readonly mailerService: MailerService
  ){}
  
  async postMail(
    mailDto: MailDto
  ) {
    let {to, from, subject, text} = mailDto
    
    try {
      await this.mailerService.sendMail({
        to: to,
        from: from,
        subject: subject,
        text: text,
        // html: '<h1>Greeting test yaaaa</h1>',
      })
      return {
        message: "send success"
      }
    } catch (error) {
      console.log(error)
    }
  }
}
