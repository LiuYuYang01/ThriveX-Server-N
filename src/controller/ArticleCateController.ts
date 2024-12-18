import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArticleCateService } from '@/service/ArticleCateService';
import { Result } from '@/utils';
import { ArticleCate } from '@/data/types';

@Controller('article-cate')
export class ArticleCateController {
  constructor(private articleCateService: ArticleCateService) {}

  @Post()
  async add(@Body() articleCate: ArticleCate) {
    await this.articleCateService.add(articleCate);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.articleCateService.del(id);
    return Result.success();
  }

  @Get('article/:id')
  async getByArticleId(@Param('id') articleId: number) {
    const data = await this.articleCateService.getByArticleId(articleId);
    return Result.success(data);
  }

  @Post('article/:id')
  async updateArticleCates(
    @Param('id') articleId: number,
    @Body() cateIds: number[]
  ) {
    await this.articleCateService.updateArticleCates(articleId, cateIds);
    return Result.success();
  }
} 