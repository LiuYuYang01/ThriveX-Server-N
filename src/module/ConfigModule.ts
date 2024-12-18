import { Module } from '@nestjs/common';
import { ConfigController } from '@/controller/ConfigController';
import { ConfigService } from '@/service/ConfigService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [ConfigController],
  providers: [ConfigService],
})
export class ConfigModule {} 