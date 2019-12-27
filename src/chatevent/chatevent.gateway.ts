import { SubscribeMessage, WebSocketGateway, WsResponse, WebSocketServer } from '@nestjs/websockets';
import { ChateventService } from './chatevent.service';

@WebSocketGateway()
export class EventsGateway {
  constructor(private chatService: ChateventService) {}
  @WebSocketServer() server;

  @SubscribeMessage('events')
  async handleEvent(client: any, data: unknown): Promise<WsResponse<unknown>> {
    const event = 'events';
    // client.emit('events', data);
    // client.broadcast.emit('events', data);
    // tslint:disable-next-line: no-console
    console.log(data);
    data = await this.chatService.postchat(data);
    return { event, data };
  }
}
