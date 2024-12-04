import { Module } from '@nestjs/common';
import { ArticleController } from '@/controller/ArticleController';
import { ArticleService } from '@/service/ArticleService';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {
}