import { Module } from '@nestjs/common';
import { WallCateController } from '@/controller/WallCateController';
import { WallCateService } from '@/service/WallCateService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [WallCateController],
  providers: [WallCateService],
})
export class WallCateModule {} 