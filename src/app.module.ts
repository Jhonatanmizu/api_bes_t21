import { Module } from '@nestjs/common';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';
// Modules
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [GatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
