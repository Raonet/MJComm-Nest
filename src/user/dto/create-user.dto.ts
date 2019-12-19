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
    {readonly _id: string; }
  ];
  readonly jionf: [
    {readonly _id: string; }
  ];
  readonly praise: [
    {readonly _id: string}
  ];
  readonly step: [
    {readonly _id: string; }
  ];
}
