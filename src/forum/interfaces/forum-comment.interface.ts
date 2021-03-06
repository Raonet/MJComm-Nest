import { Document } from 'mongoose';

export interface ForumComment extends Document {
  readonly forumId: string;
  readonly comments: [
    {
      userId: string,
      userName: string,
      content: string,
      avatar: string,
      date: string,
      replys: [
        {
          userId: string,
          userName: string,
          content: string,
          avatar: string,
          date: string,
        }
      ],
    }
  ];
}
