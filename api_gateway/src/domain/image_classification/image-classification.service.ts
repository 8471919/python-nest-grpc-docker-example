import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IMAGE_CLASSIFICATION_OPTION } from './image-classification.grpc-option';
import { IModelService, ModelReturn } from 'src/proto/interface/model.proto';

@Injectable()
export class ImageClassificationService implements OnModuleInit {
  constructor() {}

  @Client(IMAGE_CLASSIFICATION_OPTION)
  private readonly imageClassificationClient: ClientGrpc;

  private imageClassificationGrpcService: IModelService;

  onModuleInit() {
    this.imageClassificationGrpcService =
      this.imageClassificationClient.getService<IModelService>('ModelService');
  }

  async imageClassification(url: string): Promise<ModelReturn> {
    const res: ModelReturn = await this.imageClassificationGrpcService.getLabel(
      { url: url },
    );

    return res;
  }
}
