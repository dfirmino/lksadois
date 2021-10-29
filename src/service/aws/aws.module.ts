import { Module } from '@nestjs/common';
import { AwsSdkModule } from 'nest-aws-sdk';
import { S3ManagerModule } from './s3-manager.module';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { S3 } from 'aws-sdk';

@Module({
  imports: [
    S3ManagerModule,
    AwsSdkModule.forRootAsync({
      defaultServiceOptions: {
        useFactory: (configService: ConfigService) => {
          return {
            region: configService.get('AWS_DEFAULT_REGION'),
            accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
          };
        },
        imports: [ConfigModule],
        inject: [ConfigService],
      },
      services: [S3],
    }),
  ],
})
export class AwsModule {}
