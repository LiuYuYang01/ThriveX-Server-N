import { Module } from '@nestjs/common';
import { RecordController } from '@/controller/RecordController';
import { RecordService } from '@/service/RecordService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {} 