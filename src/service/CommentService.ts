import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Comment } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async add(comment: Comment) {
    await this.prisma.comment.create({ data: comment });
  }

  async del(id: number) {
    await this.prisma.comment.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.comment.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(comment: Comment) {
    const { id, ...data } = comment;
    await this.prisma.comment.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.comment.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.comment.findMany({
      orderBy: { create_time: 'desc' }
    });
  }

  async paging(page: number, size: number) {
    return await getPagingData("comment", { page, size });
  }

  // 获取文章的评论
  async getArticleComments(articleId: number) {
    return await this.prisma.comment.findMany({
      where: { 
        article_id: articleId,
        audit_status: 1 // 只返回已审核的评论
      },
      orderBy: { create_time: 'desc' }
    });
  }

  // 更新评论审核状态
  async updateAuditStatus(id: number, status: number) {
    await this.prisma.comment.update({
      where: { id },
      data: { audit_status: status }
    });
  }
} 