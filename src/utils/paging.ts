import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function toPagingData<T>(
  model: keyof PrismaClient,
  paging: Paging,
  order: string = "id",
  orderDirection: "asc" | "desc" = "asc"
): Promise<PagingData<T>> {
  const { page, size } = paging;
  const total = await (prisma[model] as any).count();
  const results = await (prisma[model] as any).findMany({
    skip: (page - 1) * size,
    take: size,
    orderBy: {
      [order]: orderDirection
    }
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