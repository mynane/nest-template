import * as mongoose from 'mongoose';
import CONFIG from '../../config';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<mongoose.Connection> =>
      await mongoose.connect(`mongodb://${CONFIG.mongo.host}:${CONFIG.mongo.port}/${CONFIG.mongo.database}`),
  },
];
