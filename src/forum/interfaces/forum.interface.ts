import { Document } from 'mongoose';

export interface Forum extends Document {
  readonly title: string;
  readonly content: any;
  readonly description: string;
  readonly createtime: string;
  readonly moditime: string;
  readonly heat: number;
  readonly author: {
    readonly userid: string,
    readonly name: string,
    readonly avatar: string,
  };
  readonly praise: [
    {
    readonly userid: string,
    readonly name: string,
    }
  ];
  readonly step: [
    {
    readonly userid: string,
    readonly name: string,
    }
  ];
}