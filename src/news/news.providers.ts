import { Connection } from 'mongoose';
import { NewsSchema } from './schemas/news.schemas';

export const NewsProviders = [
  {
    provide: 'NEWS_MODEL',
    useFactory: (connection: Connection) => connection.model('News', NewsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
