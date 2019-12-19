import { Connection } from 'mongoose';
import { ForumSchema } from './schemas/forum.schemas';

export const forumProviders = [
  {
    provide: 'FORUM_MODEL',
    useFactory: (connection: Connection) => connection.model('forum', ForumSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
