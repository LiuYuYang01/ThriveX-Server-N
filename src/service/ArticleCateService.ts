import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { ArticleCate } from '@/data/types';

@Injectable()
export class ArticleCateService {
  constructor(private prisma: PrismaService) {}

  async add(articleCate: ArticleCate) {
    await this.prisma.article_cate.create({ data: articleCate });
  }

  async del(id: number) {
    await this.prisma.article_cate.delete({ where: { id } });
  }

  async getByArticleId(articleId: number) {
    // 先获取文章分类关联
    const articleCates = await this.prisma.article_cate.findMany({
      where: { article_id: articleId }
    });
    
    // 再获取分类详情
    const cateIds = articleCates.map(ac => ac.cate_id);
    const cates = await this.prisma.cate.findMany({
      where: {
        id: { in: cateIds }
      }
    });

    // 组合数据
    return articleCates.map(ac => ({
      ...ac,
      cate: cates.find(c => c.id === ac.cate_id)
    }));
  }

  async updateArticleCates(articleId: number, cateIds: number[]) {
    // 先删除原有关联
    await this.prisma.article_cate.deleteMany({
      where: { article_id: articleId }
    });

    // 批量创建新关联
    const data = cateIds.map(cateId => ({
      article_id: articleId,
      cate_id: cateId
    }));

    await this.prisma.article_cate.createMany({ data });
  }
} 