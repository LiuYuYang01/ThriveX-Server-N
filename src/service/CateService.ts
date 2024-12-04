import { Injectable } from '@nestjs/common';
import { PrismaService } from './PrismaService';

@Injectable()
export class CateService {
  constructor(private prisma: PrismaService,) {
  }

  list() {
    return this.prisma.cate.findMany()
  }
}