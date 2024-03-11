import { Module } from '@nestjs/common';
import { DependentsService } from './dependents.service';
import { DependentsController } from './dependents.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [DependentsController],
  providers: [DependentsService],
  imports: [PrismaModule],
})
export class DependentsModule {}
