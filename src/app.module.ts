import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AwsModule } from './service/aws/aws.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    AwsModule,
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.env.${ENV}`,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
