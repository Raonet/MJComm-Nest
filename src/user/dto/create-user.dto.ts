export class CreateUserDto {
  // tslint:disable-next-line: variable-name
  readonly _id: string;
  readonly user: string;
  readonly pwd: string;
  readonly phone: number;
  readonly avater: string;
  readonly description: string;
  readonly email: string;
  readonly createTime: string;
  readonly createf: [
    {readonly forumid: string; }
  ];
  readonly jionf: [
    {readonly forumid: string; }
  ];
  readonly praise: [
    {readonly forumid: string; }
  ];
  readonly step: [
    {readonly forumid: string; }
  ];
}
