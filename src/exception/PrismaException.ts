import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Catch(
  Prisma.PrismaClientKnownRequestError,
  Prisma.PrismaClientValidationError
)
export class PrismaException implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let message: string | object;

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      // 根据具体的 Prisma 错误码进行处理
      if (exception.code === "P2002") {
        message = `唯一性约束失败：${exception.message}`;
      } else if (exception.code === "P2025") {
        message = `不存在的数据：${exception.message}`;
      } else {
        console.log("状态码：", exception.code);
        message = exception.message;
      }
    }

    if (exception instanceof Prisma.PrismaClientValidationError) {
      message = `参数有误：${exception.message}`;
    }

    // 在控制台打印错误信息
    console.error("Prisma Exception：", message);

    response.status(200).json({
      code: 400,
      message: message || "未知错误",
      data: null
    });
  }
}