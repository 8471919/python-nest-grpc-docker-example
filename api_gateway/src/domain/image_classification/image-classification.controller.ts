import {
  Body,
  Controller,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImageClassificationService } from './image-classification.service';
import { TypedBody, TypedRoute } from '@nestia/core';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('api/v1/img_cl')
export class ImageClassificationController {
  constructor(
    private readonly imageClassificationService: ImageClassificationService,
  ) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  @TypedRoute.Post()
  async getLabel(@Req() req) {
    const url = req.file.location;
    const res = await this.imageClassificationService.imageClassification(url);
    return res;
  }
}
