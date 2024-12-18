import { Module } from "@nestjs/common";
import { PrismaModule } from "./module/PrismaModule";
import { HomeModule } from "./module/HomeModule";
import { ArticleModule } from "./module/ArticleModule";
import { CateModule } from "./module/CateModule";
import { UserModule } from "./module/UserModule";
import { SwiperModule } from './module/SwiperModule';
import { LinkModule } from "./module/LinkModule";
import { TagModule } from "./module/TagModule";
import { CommentModule } from "./module/CommentModule";
import { WallModule } from './module/WallModule';
import { WallCateModule } from './module/WallCateModule';
import { FootprintModule } from './module/FootprintModule';
import { RecordModule } from './module/RecordModule';
import { ConfigModule } from './module/ConfigModule';
import { RoleModule } from './module/RoleModule';
import { RouteModule } from './module/RouteModule';
import { ArticleCateModule } from './module/ArticleCateModule';
import { ArticleConfigModule } from './module/ArticleConfigModule';
import { LinkTypeModule } from './module/LinkTypeModule';

@Module({
  imports: [
    PrismaModule,
    HomeModule,
    ArticleModule,
    CateModule,
    UserModule,
    SwiperModule,
    LinkModule,
    TagModule,
    CommentModule,
    WallModule,
    WallCateModule,
    FootprintModule,
    RecordModule,
    ConfigModule,
    RoleModule,
    RouteModule,
    ArticleCateModule,
    ArticleConfigModule,
    LinkTypeModule,
  ]
})
export class AppModule {
}
