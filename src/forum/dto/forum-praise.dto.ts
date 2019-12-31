export class ForumPraiseDto {
  readonly forumId: string;
  readonly praises: [
    {
    readonly userid: string,
    readonly name: string,
    }
  ];
}
