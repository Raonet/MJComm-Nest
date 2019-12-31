export class ForumDto {
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
}
