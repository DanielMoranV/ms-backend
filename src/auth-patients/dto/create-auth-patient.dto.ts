import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';
export class CreateAuthPatientDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;

  @IsDateString()
  @ApiProperty()
  createAt: Date;

  @IsNumber()
  @ApiProperty()
  pacienteId: number;
}
