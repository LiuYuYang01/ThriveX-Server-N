import { Module } from '@nestjs/common';
import { HomeController } from '../controller/HomeController';
import { ArticleModule } from './ArticleModule';

@Module({
  imports: [ArticleModule],
  controllers: [HomeController],
  providers: [],
})
export class HomeModule {
}