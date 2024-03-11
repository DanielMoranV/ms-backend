import { PartialType } from '@nestjs/swagger';
import { CreateAuthPatientDto } from './create-auth-patient.dto';

export class UpdateAuthPatientDto extends PartialType(CreateAuthPatientDto) {}
