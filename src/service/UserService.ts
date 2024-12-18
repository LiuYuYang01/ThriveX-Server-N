import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/service/PrismaService";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {
  }

  list() {
    return this.prisma.user.findMany();
  }
}
