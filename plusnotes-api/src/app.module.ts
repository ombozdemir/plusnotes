import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './services/post.service';
import { PrismaModule } from './providers/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService, PostService],
})
export class AppModule {}
