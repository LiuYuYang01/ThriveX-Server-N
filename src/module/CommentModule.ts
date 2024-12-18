import { Module } from '@nestjs/common';
import { CommentController } from '@/controller/CommentController';
import { CommentService } from '@/service/CommentService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {} 