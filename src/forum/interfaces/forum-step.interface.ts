import { Document } from 'mongoose';

export interface ForumStep extends Document {
  readonly forumId: string;
  readonly steps: [
    {
    readonly userid: string,
    readonly name: string,
    }
  ];
}
