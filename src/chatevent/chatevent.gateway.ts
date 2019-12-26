import { SubscribeMessage, WebSocketGateway, WsResponse, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer() server;

  @SubscribeMessage('events')
  handleEvent(client: any, data: unknown): WsResponse<unknown> {
    const event = 'events';
    // client.emit('events', data);
    // client.broadcast.emit('events', data);
    // tslint:disable-next-line: no-console
    console.log(data);
    return { event, data };
  }
}
