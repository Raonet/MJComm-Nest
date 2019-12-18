import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AdminModule,
    UserModule,
    ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
