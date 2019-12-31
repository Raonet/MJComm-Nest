import { SubscribeMessage, WebSocketGateway, WsResponse, WebSocketServer } from '@nestjs/websockets';
import { ChateventService } from './chatevent.service';

@WebSocketGateway()
export class EventsGateway {
  constructor(private chatService: ChateventService) {}
  @WebSocketServer() server;

  @SubscribeMessage('events')
  async handleEvent(client: any, data: unknown): Promise<WsResponse<unknown>> {
    const event = 'events';
    data = await this.chatService.postchat(data);
    return { event, data };
  }
}
