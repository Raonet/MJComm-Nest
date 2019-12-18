import { Connection } from 'mongoose';
import { HomePageImgSchema } from './schemas/homepage-img.schemas';

export const homeProviders = [
  {
    provide: 'HOME_MODEL',
    useFactory: (connection: Connection) => connection.model('HomePage', HomePageImgSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
