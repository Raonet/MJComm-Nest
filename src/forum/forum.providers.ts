import { Connection } from 'mongoose';
import { ForumSchemas } from './schemas/forum.schemas';
import { ForumStepSchemas } from './schemas/forum-step.schemas';
import { ForumPraiseSchemas } from './schemas/forum-praise.schemas';
import { ForumCommentSchemas } from './schemas/forum-comment.schemas';

export const forumProviders = [
  {
    provide: 'FORUM_MODEL',
    useFactory: (connection: Connection) => connection.model('forum', ForumSchemas),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'FORUMSTEP_MODEL',
    useFactory: (connection: Connection) => connection.model('forumstep', ForumStepSchemas),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'FORUMPRAISE_MODEL',
    useFactory: (connection: Connection) => connection.model('forumpraise', ForumPraiseSchemas),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'FORUMCOMMENT_MODEL',
    useFactory: (connection: Connection) => connection.model('forumcomment', ForumCommentSchemas),
    inject: ['DATABASE_CONNECTION'],
  },
];
