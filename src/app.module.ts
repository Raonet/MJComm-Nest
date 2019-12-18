import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { HomepageModule } from './homepage/homepage.module';

@Module({
  imports: [
    AdminModule,
    UserModule,
    HomepageModule,
    ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
