import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Link } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class LinkService {
  constructor(private prisma: PrismaService) {}

  async add(link: Link) {
    await this.prisma.link.create({ data: link });
  }

  async del(id: number) {
    await this.prisma.link.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.link.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(link: Link) {
    const { id, ...data } = link;
    await this.prisma.link.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.link.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.link.findMany({
      orderBy: { order: 'asc' }
    });
  }

  async paging(page: number, size: number) {
    return await getPagingData("link", { page, size });
  }
} 