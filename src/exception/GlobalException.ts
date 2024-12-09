import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";

@Catch()
export class GlobalException implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {
  }

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    let code: number;
    let message: string;

    if (exception instanceof HttpException) {
      code = exception.getStatus();
      message = exception.message;
    }

    // 在控制台打印错误信息
    console.error("Global Exception:", message);

    const response = {
      code: code || 500,
      message: message || "服务器内部错误"
    };

    httpAdapter.reply(ctx.getResponse(), response, 200);
  }
}