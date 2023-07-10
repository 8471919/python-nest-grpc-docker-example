import { Module } from '@nestjs/common';
import { ImageClassificationService } from './image-classification.service';
import { ImageClassificationController } from './image-classification.controller';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { S3Client } from '@aws-sdk/client-s3';
import * as multerS3 from 'multer-s3';
import * as path from 'path';

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): MulterOptions => {
        const s3 = new S3Client({
          region: configService.get('AWS_BUCKET_REGION'),
          credentials: {
            accessKeyId: configService.get('AWS_ACCESS_KEY_ID')!,
            secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY')!,
          },
        });

        return {
          storage: multerS3({
            s3,
            bucket: configService.get('AWS_BUCKET_NAME'),
            key: (req: Request, file, done) => {
              // 파일 확장자 추출
              const ext = path.extname(file.originalname);
              // 파일 이름
              const basename = path.basename(file.originalname, ext);
              // 파일 이름이 중복되는 것을 방지하기 위해 파일이름_날짜.확장자 형식으로 설정
              done(null, `${basename}_${new Date().getTime()}.${ext}`);
            },
          }),
          limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
        };
      },
    }),
    // ClientsModule.register([
    //   {
    //     name: 'IMAGE_CLASSIFICATION_SERVICE',
    //     transport: Transport.GRPC,
    //     options: {
    //       url: '0.0.0.0:50051',
    //       package: 'model',
    //       protoPath: path.join(__dirname, '../../proto/model.proto'),
    //       loader: {
    //         enums: String,
    //         objects: true,
    //         arrays: true,
    //       },
    //     },
    //   },
    // ]),
  ],
  controllers: [ImageClassificationController],
  providers: [
    // {
    //     provide: 'IMAGE_CLASSIFICATION_SERVICE',
    //     useFactory: ()
    // }
    ImageClassificationService,
  ],
})
export class ImageClassificationModule {}
