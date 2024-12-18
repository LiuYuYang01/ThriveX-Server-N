import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CommentService } from '@/service/CommentService';
import { Result } from '@/utils';
import { Comment } from '@/data/types';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  async add(@Body() comment: Comment) {
    await this.commentService.add(comment);
    return Result.success();
  }

  @Delete('batch')
  async delBatch(@Body() ids: number[]) {
    await this.commentService.delBatch(ids);
    return Result.success();
  }

  @Delete(':id')
  async del(@Param('id') id: number) {
    await this.commentService.del(id);
    return Result.success();
  }

  @Patch()
  async edit(@Body() comment: Comment) {
    await this.commentService.edit(comment);
    return Result.success();
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    const data = await this.commentService.get(id);
    return Result.success(data);
  }

  @Post('list')
  async list() {
    const list = await this.commentService.list();
    return Result.success(list);
  }

  @Post('paging')
  async paging(@Query('page') page: number, @Query('size') size: number) {
    const list = await this.commentService.paging(page, size);
    return Result.success(list);
  }

  @Get('article/:id')
  async getArticleComments(@Param('id') articleId: number) {
    const list = await this.commentService.getArticleComments(articleId);
    return Result.success(list);
  }

  @Patch(':id/audit')
  async updateAuditStatus(
    @Param('id') id: number,
    @Body('status') status: number
  ) {
    await this.commentService.updateAuditStatus(id, status);
    return Result.success();
  }
} 