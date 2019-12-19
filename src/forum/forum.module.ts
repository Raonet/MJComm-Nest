import { Module } from '@nestjs/common';
import { ForumController } from './forum.controller';
import { ForumService } from './forum.service';
import { forumProviders } from './forum.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ForumController],
  providers: [ForumService, ...forumProviders],
})
export class ForumModule {}
