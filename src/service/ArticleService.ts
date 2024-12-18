import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Article } from '@/data/types';

@Injectable()
export class ArticleService {
    constructor(private prisma: PrismaService) { }

    async add(article: Article) {
        return await this.prisma.article.create({
            data: {
                title: article.title,
                description: article.description,
                content: article.content,
                cover: article.cover,
                tag_ids: article.tag_ids,
                is_draft: article.is_draft || 0,
                is_del: 0,
                create_time: new Date().toISOString(),
                view: 0,
                comment: 0
            }
        });
    }

    async del(id: number) {
        // 软删除
        await this.prisma.article.update({
            where: { id },
            data: { is_del: 1 }
        });
    }

    async delBatch(ids: number[]) {
        // 批量软删除
        await this.prisma.article.updateMany({
            where: {
                id: { in: ids }
            },
            data: { is_del: 1 }
        });
    }

    async edit(article: Article) {
        const { id, ...data } = article;
        await this.prisma.article.update({
            where: { id },
            data
        });
    }

    async get(id: number) {
        return await this.prisma.article.findFirst({
            where: {
                id,
                is_del: 0
            }
        });
    }

    async list() {
        return await this.prisma.article.findMany({
            where: {
                is_del: 0,
                is_draft: 0
            },

            orderBy: { create_time: 'desc' }
        });
    }

    async paging(page: number, size: number) {
        const where = {
            is_del: 0,
            is_draft: 0,
        };

        const [list, total] = await Promise.all([
            this.prisma.article.findMany({
                where,
                skip: (page - 1) * size,
                take: size,
                orderBy: { create_time: 'desc' }
            }),

            this.prisma.article.count({ where })
        ]);

        return {
            list,
            page,
            size,
            total
        };
    }
}
