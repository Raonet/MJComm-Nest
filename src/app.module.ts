import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { HomepageModule } from './homepage/homepage.module';
import { NewsModule } from './news/news.module';
import { ForumModule } from './forum/forum.module';
import { EventsGateway } from './chatevent/chatevent.gateway';
import { ChateventService } from './chatevent/chatevent.service';

@Module({
  imports: [
    AdminModule,
    UserModule,
    HomepageModule,
    NewsModule,
    ForumModule,
    ],
  controllers: [AppController],
  providers: [EventsGateway, ChateventService],
})
export class AppModule {}
