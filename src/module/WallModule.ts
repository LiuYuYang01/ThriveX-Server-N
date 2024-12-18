import { Module } from '@nestjs/common';
import { WallController } from '@/controller/WallController';
import { WallService } from '@/service/WallService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [WallController],
  providers: [WallService],
})
export class WallModule {} 