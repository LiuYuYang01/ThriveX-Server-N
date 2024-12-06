import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";
import { Prisma } from "@prisma/client";

@Catch()
export class PrismaException implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    console.log(111, exception);

    let message: string | object;

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      // 根据具体的 Prisma 错误码进行处理
      if (exception.code === "P2002") {
        message = `唯一性约束失败：${exception.message}`;
      } else {
        message = exception.message;
      }
    }

    if (exception instanceof Prisma.PrismaClientValidationError) {
      console.log(777, exception.message, 888);
      message = `缺失必要参数：${exception.message}`;
    }

    // 在控制台打印错误信息
    console.error("Prisma Exception:", message);

    response.status(200).json({
      code: 400,
      message,
      data: null
    });
  }
}