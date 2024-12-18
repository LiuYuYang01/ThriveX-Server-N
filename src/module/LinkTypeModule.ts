import { Module } from '@nestjs/common';
import { LinkTypeController } from '@/controller/LinkTypeController';
import { LinkTypeService } from '@/service/LinkTypeService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [LinkTypeController],
  providers: [LinkTypeService],
})
export class LinkTypeModule {} 