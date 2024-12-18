import { Module } from '@nestjs/common';
import { LinkController } from '@/controller/LinkController';
import { LinkService } from '@/service/LinkService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule {} 