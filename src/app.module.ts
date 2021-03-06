import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { HomepageModule } from './homepage/homepage.module';
import { NewsModule } from './news/news.module';
import { ForumModule } from './forum/forum.module';
import { EventsGateway } from './chatevent/chatevent.gateway';
import { ChateventService } from './chatevent/chatevent.service';
import { chatroomProviders } from './chatevent/chatroom.providers';
import { DatabaseModule } from './db/database.module';
import { ChatRoomController } from './chatevent/chatroom.controller';
import { RepairModule } from './repair/repair.module';

@Module({
  imports: [
    DatabaseModule,
    AdminModule,
    UserModule,
    HomepageModule,
    NewsModule,
    ForumModule,
    RepairModule,
    ],
  controllers: [AppController, ChatRoomController],
  providers: [EventsGateway, ChateventService, ...chatroomProviders],
})
export class AppModule {}
