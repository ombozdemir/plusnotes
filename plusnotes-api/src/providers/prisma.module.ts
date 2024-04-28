import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService], // PrismaService'i eklemek önemli
  exports: [PrismaService],
})
export class PrismaModule {}
