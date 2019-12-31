import { Document } from 'mongoose';

export interface ForumList extends Document {
  readonly forumId: string;
  readonly comments: [
    {
      userId: string,
      userName: string,
      content: string,
      replys: [
        {
          userId: string,
          userName: string,
          content: string,
        }
      ],
    }
  ];
}
