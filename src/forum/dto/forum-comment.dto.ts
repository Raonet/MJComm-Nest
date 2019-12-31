export class ForumCommentDto {
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
