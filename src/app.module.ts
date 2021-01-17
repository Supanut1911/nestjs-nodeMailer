import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port:587,
        secure: false,
        auth: {
          user: "testusr1@gmail.com",
          pass: "123456"
        }
      },
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
