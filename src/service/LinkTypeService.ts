import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { LinkType } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class LinkTypeService {
  constructor(private prisma: PrismaService) {}

  async add(linkType: LinkType) {
    await this.prisma.link_type.create({ data: linkType });
  }

  async del(id: number) {
    await this.prisma.link_type.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.link_type.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(linkType: LinkType) {
    const { id, ...data } = linkType;
    await this.prisma.link_type.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.link_type.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.link_type.findMany({
      orderBy: { order: 'asc' }
    });
  }

  async paging(page: number, size: number) {
    return await getPagingData("link_type", { page, size });
  }
} 