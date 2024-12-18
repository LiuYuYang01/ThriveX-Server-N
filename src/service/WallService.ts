import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Wall } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class WallService {
  constructor(private prisma: PrismaService) {}

  async add(wall: Wall) {
    await this.prisma.wall.create({ data: wall });
  }

  async del(id: number) {
    await this.prisma.wall.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.wall.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(wall: Wall) {
    const { id, ...data } = wall;
    await this.prisma.wall.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.wall.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.wall.findMany({
      orderBy: { create_time: 'desc' }
    });
  }

  async paging(page: number, size: number) {
    return await getPagingData("wall", { page, size });
  }

  // 根据分类获取留言
  async getByCate(cateId: number) {
    return await this.prisma.wall.findMany({
      where: { 
        cate_id: cateId,
        audit_status: 1 // 只返回已审核的留言
      },
      orderBy: { create_time: 'desc' }
    });
  }

  // 更新审核状态
  async updateAuditStatus(id: number, status: number) {
    await this.prisma.wall.update({
      where: { id },
      data: { audit_status: status }
    });
  }
} 