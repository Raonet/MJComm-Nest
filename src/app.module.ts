import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { HomepageModule } from './homepage/homepage.module';
import { NewsModule } from './news/news.module';
import { ForumModule } from './forum/forum.module';
import { EventsGateway } from './event/event.gateway';

@Module({
  imports: [
    AdminModule,
    UserModule,
    HomepageModule,
    NewsModule,
    ForumModule,
    ],
  controllers: [AppController],
  providers: [EventsGateway],
})
export class AppModule {}
