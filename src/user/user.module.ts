import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../db/database.module';
import { forumProviders } from '../forum/forum.providers';

@Module({
  imports: [DatabaseModule, MulterModule.register({dest: './public/static/'})],
  controllers: [UserController],
  providers: [ UserService, ...userProviders, ...forumProviders],
})
export class UserModule {}
