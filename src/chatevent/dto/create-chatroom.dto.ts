export class ChatRoomDto {
  readonly name: string;
  readonly description: string;
  readonly data: [
    {
      readonly userid: string;
      readonly username: string;
      readonly msg: string;
      readonly avatar: string;
      readonly time: string;
    }
  ];
}
