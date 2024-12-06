import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getPagingData<T>(
  model: keyof PrismaClient,
  paging: Paging,
  filter: any = {}
): Promise<PagingData<T>> {
  const { page, size } = paging;
  const total = await (prisma[model] as any).count();
  const results = await (prisma[model] as any).findMany({
    skip: (page - 1) * size,
    take: size,
    where: filter
  });

  const pages = Math.ceil(total / size);

  return {
    next: page < pages,
    result: results,
    total: total,
    pages: pages,
    size: size,
    prev: page > 1,
    page: page
  };
}