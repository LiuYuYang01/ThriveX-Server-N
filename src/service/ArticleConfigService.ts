import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { ArticleConfig } from '@/data/types';

@Injectable()
export class ArticleConfigService {
  constructor(private prisma: PrismaService) {}

  async add(config: ArticleConfig) {
    await this.prisma.article_config.create({ data: config });
  }

  async del(id: number) {
    await this.prisma.article_config.delete({ where: { id } });
  }

  async edit(config: ArticleConfig) {
    const { id, ...data } = config;
    await this.prisma.article_config.update({
      where: { id },
      data
    });
  }

  async getByArticleId(articleId: number) {
    return await this.prisma.article_config.findFirst({
      where: { article_id: articleId }
    });
  }
} 