import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { WallCate } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class WallCateService {
  constructor(private prisma: PrismaService) {}

  async add(wallCate: WallCate) {
    await this.prisma.wall_cate.create({ data: wallCate });
  }

  async del(id: number) {
    await this.prisma.wall_cate.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.wall_cate.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(wallCate: WallCate) {
    const { id, ...data } = wallCate;
    await this.prisma.wall_cate.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.wall_cate.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.wall_cate.findMany({
      orderBy: { order: 'asc' }
    });
  }

  async paging(page: number, size: number) {
    return await getPagingData("wall_cate", { page, size });
  }
} 