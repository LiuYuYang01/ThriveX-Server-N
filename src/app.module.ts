import { Module } from '@nestjs/common';
import { HomeModule } from './module/HomeModule';
import { ArticleModule } from './module/ArticleModule';
import { CateModule } from './module/CateModule';

@Module({
  imports: [HomeModule, ArticleModule, CateModule],
})
export class AppModule {
}
