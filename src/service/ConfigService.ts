import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Config } from '@/data/types';
import { getPagingData } from '@/utils';

@Injectable()
export class ConfigService {
  constructor(private prisma: PrismaService) {}

  async add(config: Config) {
    await this.prisma.config.create({ data: config });
  }

  async del(name: string) {
    await this.prisma.config.delete({ where: { name } });
  }

  async delBatch(names: string[]) {
    await this.prisma.config.deleteMany({
      where: {
        name: { in: names }
      }
    });
  }

  async edit(config: Config) {
    const { name, ...data } = config;
    await this.prisma.config.update({
      where: { name },
      data
    });
  }

  async get(name: string) {
    return await this.prisma.config.findFirst({ where: { name } });
  }

  async list() {
    return await this.prisma.config.findMany();
  }

  async paging(page: number, size: number) {
    return await getPagingData("config", { page, size });
  }

  // 根据分组获取配置
  async getByGroup(group: string) {
    return await this.prisma.config.findMany({
      where: { group }
    });
  }
} 