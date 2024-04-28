import { ApiProperty } from '@nestjs/swagger';
export class UpdatePostDto {
  @ApiProperty({ description: 'The title of the post' })
  title: string; // 'string' veri tipi belirtilir

  @ApiProperty({ description: 'The content of the post' })
  content: string; // 'string' veri tipi belirtilir
}
