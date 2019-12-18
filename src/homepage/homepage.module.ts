import { Module } from '@nestjs/common';
import { HomepageController } from './homepage.controller';
import { HomepageService } from './homepage.service';
import { homeProviders } from './homepage.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HomepageController ],
  providers: [HomepageService, ...homeProviders],
})
export class HomepageModule {}
