import { Connection } from 'mongoose';
import { AdminSchema } from './schemas/admin.schemas';

export const adminProviders = [
    {
        provide: 'ADMIN_MODEL',
        useFactory: (connection: Connection) => connection.model('Admin', AdminSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
