import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
  HttpCode,
} from '@nestjs/common';

import { AppService } from './app.service';

import { PostService } from './services/post.service';

import { Post as PostModel } from '@prisma/client';

import { Prisma } from '@prisma/client';

import { UpdatePostDto } from './dtos/update-post.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly postService: PostService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('posts')
  @HttpCode(200)
  async posts(
    @Query()
    params: {
      // Burada isteğe bağlı query parametrelerinizin tipini belirtebilirsiniz
      skip?: number;
      take?: number;
      cursor?: Prisma.PostWhereUniqueInput;
      where?: Prisma.PostWhereInput;
      orderBy?: Prisma.PostOrderByWithRelationInput;
    },
  ): Promise<PostModel[]> {
    return this.postService.posts(params);
  }

  @Post('post')
  async createPost(
    @Body() postData: { title: string; content?: string },
  ): Promise<PostModel> {
    const { title, content } = postData;
    return this.postService.createPost({
      title,
      content,
    });
  }

  @Post('postUpdate/:id')
  async updatePost(
    @Param('id') id: number,
    @Body() UpdatePostDto: { title: string; content: string },
  ): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: UpdatePostDto,
    });
  }
}
