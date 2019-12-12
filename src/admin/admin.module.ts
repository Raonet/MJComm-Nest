import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { adminProviders } from './admin.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [AdminController],
    providers: [...adminProviders, AdminService],
})
export class AdminModule {}
