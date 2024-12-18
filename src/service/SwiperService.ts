import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';
import { Swiper } from '@/data/swiper';
import { getPagingData } from '@/utils';

@Injectable()
export class SwiperService {
  constructor(private prisma: PrismaService) {}

  async add(swiper: Swiper) {
    await this.prisma.swiper.create({ data: swiper });
  }

  async del(id: number) {
    await this.prisma.swiper.delete({ where: { id } });
  }

  async delBatch(ids: number[]) {
    await this.prisma.swiper.deleteMany({
      where: {
        id: { in: ids }
      }
    });
  }

  async edit(swiper: Swiper) {
    const { id, ...data } = swiper;
    await this.prisma.swiper.update({
      where: { id },
      data
    });
  }

  async get(id: number) {
    return await this.prisma.swiper.findFirst({ where: { id } });
  }

  async list() {
    return await this.prisma.swiper.findMany({
      orderBy: { id: 'desc' }
    });
  }

  async paging(page: number, size: number) {
    return await getPagingData("swiper", { page, size });
  }
} 