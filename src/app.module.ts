import { Module } from '@nestjs/common';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';
// Modules
import { GatewayModule } from './gateway/gateway.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ cache: true }), GatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
