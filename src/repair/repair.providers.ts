import { Connection } from 'mongoose';
import { RepairSchema } from './schemas/repair.schemas';

export const RepairProviders = [
  {
    provide: 'REPAIR_MODEL',
    useFactory: (connection: Connection) => connection.model('Repair', RepairSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
