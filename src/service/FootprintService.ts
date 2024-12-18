import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Footprint } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class FootprintService {
  constructor(private prisma: PrismaService) {}

  async add(footprint: Footprint) {
    await this.prisma.footprint.create({ data: footprint });
  }

  async del(id: number) {
    await this.prisma.footprint.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.footprint.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(footprint: Footprint) {
    const { id, ...data } = footprint;
    await this.prisma.footprint.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.footprint.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.footprint.findMany({
      orderBy: { create_time: 'desc' }
    });
  }

  async paging(page: number, size: number) {
    return await getPagingData("footprint", { page, size });
  }
} 