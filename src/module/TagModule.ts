import { Module } from '@nestjs/common';
import { TagController } from '@/controller/TagController';
import { TagService } from '@/service/TagService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {} 