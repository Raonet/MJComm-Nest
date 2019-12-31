import { Document } from 'mongoose';

export interface ForumPraise extends Document {
  readonly forumId: string;
  readonly praises: [
    {
    readonly userid: string,
    readonly name: string,
    }
  ];
}
