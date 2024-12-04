import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { RequestMethod, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 配置全局请求前缀，忽略首页
  app.setGlobalPrefix("api", {
    exclude: [{ path: "/", method: RequestMethod.GET }]
  });

  // 配置参数类型自动转换
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  );

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
