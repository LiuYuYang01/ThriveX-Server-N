import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Record } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class RecordService {
  constructor(private prisma: PrismaService) {}

  async add(record: Record) {
    await this.prisma.record.create({ data: record });
  }

  async del(id: number) {
    await this.prisma.record.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.record.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(record: Record) {
    const { id, ...data } = record;
    await this.prisma.record.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.record.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.record.findMany({
      orderBy: { create_time: 'desc' }
    });
  }

  async paging(page: number, size: number) {
    return await getPagingData("record", { page, size });
  }
} 