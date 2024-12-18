import { Module } from '@nestjs/common';
import { FootprintController } from '@/controller/FootprintController';
import { FootprintService } from '@/service/FootprintService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [FootprintController],
  providers: [FootprintService],
})
export class FootprintModule {} 