import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { CreatePassService } from './userPass.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MailerModule.forRoot({
      transport: {
        port: process.env.MAIL_PORT,
        host: process.env.MAIL_HOST,
        secure: true,
        ignoreTLS: true,
        auth: {
          user: process.env.MAIL_ID,
          pass: process.env.MAIL_PASS,
        },
      },
    }),
  ],
  controllers: [MailController],
  providers: [CreatePassService, MailService],
})
export class EmailModule {}