import { Module } from '@nestjs/common';
import { SwiperController } from '@/controller/SwiperController';
import { SwiperService } from '@/service/SwiperService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [SwiperController],
  providers: [SwiperService],
})
export class SwiperModule {} 