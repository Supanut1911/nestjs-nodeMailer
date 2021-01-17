import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailDto } from './mailDto';
import * as path from '@nestjs/common'


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
        cc:[
          "testuser2@gmail.com"
        ],
        subject: subject,
        text: text,
        // html: '<h1>Greeting test yaaaa</h1>',
        attachments: [
          {
            filename: 'nm.png',
            path: '/Users/x/Desktop/nest/nestjs-send-email/src/nm.png'
          }
        ]
      })
      return {
        message: "send success"
      }
    } catch (error) {
      console.log(error)
    }
  }
}
