import { Module } from '@nestjs/common';
import { AuthPatientsService } from './auth-patients.service';
import { AuthPatientsController } from './auth-patients.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [AuthPatientsController],
  providers: [AuthPatientsService],
  imports: [PrismaModule],
})
export class AuthPatientsModule {}
