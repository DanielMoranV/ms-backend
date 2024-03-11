import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { APP_FILTER, HttpAdapterHost } from '@nestjs/core';
import {
  PrismaClientExceptionFilter,
  PrismaModule,
  loggingMiddleware,
} from 'nestjs-prisma';
import { AuthPatientsModule } from './auth-patients/auth-patients.module';
import { DependentsModule } from './dependents/dependents.module';

@Module({
  imports: [
    PrismaModule,
    PatientsModule,
    PrismaModule.forRoot({
      prismaServiceOptions: {
        middlewares: [loggingMiddleware()],
      },
    }),
    AuthPatientsModule,
    DependentsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useFactory: ({ httpAdapter }: HttpAdapterHost) => {
        return new PrismaClientExceptionFilter(httpAdapter);
      },
      inject: [HttpAdapterHost],
    },
  ],
})
export class AppModule {}
