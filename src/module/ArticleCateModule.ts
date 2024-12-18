import { Module } from '@nestjs/common';
import { ArticleCateController } from '@/controller/ArticleCateController';
import { ArticleCateService } from '@/service/ArticleCateService';
import { PrismaModule } from './PrismaModule';

@Module({
  imports: [PrismaModule],
  controllers: [ArticleCateController],
  providers: [ArticleCateService],
})
export class ArticleCateModule {} 