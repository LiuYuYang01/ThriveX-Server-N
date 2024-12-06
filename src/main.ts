import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { RequestMethod, ValidationPipe } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { GlobalExceptionsFilter } from "./exception/GlobalExceptionsFilter";
import { PrismaException } from "./exception/PrismaException";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const httpAdapterHost = app.get(HttpAdapterHost);

  // 配置全局请求前缀，忽略首页
  app.setGlobalPrefix("api", {
    exclude: [{ path: "/", method: RequestMethod.GET }]
  });

  // 全局参数数据
  app.useGlobalPipes(
    new ValidationPipe({
      // 配置参数类型自动转换
      transform: true
      // 只接收DTO中已有的属性
      // transformOptions: {
      //   excludeExtraneousValues: true
      // }
    })
  );

  // 全局异常处理
  // app.useGlobalFilters(new GlobalExceptionsFilter(httpAdapterHost));
  app.useGlobalFilters(new PrismaException());

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
