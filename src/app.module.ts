import { Module } from "@nestjs/common";
import { PrismaModule } from "./module/PrismaModule";
import { HomeModule } from "./module/HomeModule";
import { ArticleModule } from "./module/ArticleModule";
import { CateModule } from "./module/CateModule";

@Module({
  imports: [PrismaModule, HomeModule, ArticleModule, CateModule]
})
export class AppModule {
}
