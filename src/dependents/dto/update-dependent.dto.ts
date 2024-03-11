import { PartialType } from '@nestjs/swagger';
import { CreateDependentDto } from './create-dependent.dto';

export class UpdateDependentDto extends PartialType(CreateDependentDto) {}
