import { ClientOptions, Transport } from '@nestjs/microservices';
import * as path from 'path';

export const IMAGE_CLASSIFICATION_OPTION: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'python_server:50051',
    package: 'model',
    protoPath: path.join(__dirname, '../../../../src/proto/model.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
