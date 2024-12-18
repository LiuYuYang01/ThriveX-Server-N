import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Role } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async add(role: Role) {
    await this.prisma.role.create({ data: role });
  }

  async del(id: number) {
    await this.prisma.role.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.role.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(role: Role) {
    const { id, ...data } = role;
    await this.prisma.role.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.role.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.role.findMany();
  }

  async paging(page: number, size: number) {
    return await getPagingData("role", { page, size });
  }

  // 根据标识获取角色
  async getByMark(mark: string) {
    return await this.prisma.role.findFirst({
      where: { mark }
    });
  }
} 