import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Tag } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async add(tag: Tag) {
    await this.prisma.tag.create({ data: tag });
  }

  async del(id: number) {
    await this.prisma.tag.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.tag.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(tag: Tag) {
    const { id, ...data } = tag;
    await this.prisma.tag.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.tag.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.tag.findMany();
  }

  async paging(page: number, size: number) {
    return await getPagingData("tag", { page, size });
  }
} 