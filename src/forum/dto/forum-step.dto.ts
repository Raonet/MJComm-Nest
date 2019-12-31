export class ForumStepDto {
  readonly forumId: string;
  readonly steps: [
    {
    readonly userid: string,
    readonly name: string,
    }
  ];
}
