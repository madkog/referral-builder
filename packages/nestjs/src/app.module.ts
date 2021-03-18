import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferralsModule } from './referrals/referrals.module';

@Module({
  imports: [ReferralsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
