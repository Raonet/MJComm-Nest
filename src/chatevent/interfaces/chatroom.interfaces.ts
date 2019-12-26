import { Document } from 'mongoose';

export interface ChatRoom extends Document {
  readonly name: string;
  readonly data: [
    { readonly userid: string;
      readonly msg: string;
      readonly avatar: string;
      readonly time: string;
    }
  ];
}
