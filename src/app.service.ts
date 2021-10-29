import { Injectable } from '@nestjs/common';
import { AwsModule } from './service/aws/aws.module';

@Injectable()
export class AppService {
  constructor(private readonly awsModule: AwsModule) {
    console.log(awsModule);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
