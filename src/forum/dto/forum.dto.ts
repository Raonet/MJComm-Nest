export class ForumDto {
  readonly title: string;
  readonly content: any;
  readonly createtime: string;
  readonly moditime: string;
  readonly heat: number;
  readonly author: {
    readonly _id: string,
    readonly name: string,
    readonly avatar: string,
  };
  readonly praise: [
    {
      readonly _id: string,
      readonly name: string,
    }
  ];
  readonly step: [
    {
      readonly _id: string,
      readonly name: string,
    }
  ];
}
