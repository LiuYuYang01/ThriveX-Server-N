import { Module } from '@nestjs/common';
import { ArticleController } from '../controller/ArticleController';
import { ArticleService } from '../service/ArticleService';

@Module({
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {
}