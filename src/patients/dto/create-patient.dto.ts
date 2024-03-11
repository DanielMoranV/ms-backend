import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsOptional, IsString } from 'class-validator';
export class CreatePatientDto {
  @ApiProperty({ enum: ['DNI', 'CE', 'Pasaporte'] })
  @IsString()
  tipoDocumento: string;

  @ApiProperty()
  @IsString()
  dni: string;

  @ApiProperty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  apellidos: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  telefono: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  direccion: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  foto: string;

  @ApiProperty()
  @IsDateString()
  fechaNacimiento: Date;

  @ApiProperty({ enum: ['Masculino', 'Femenino'] })
  @IsString()
  sexo: string;

  @ApiProperty({ enum: ['Soltero', 'Casado', 'Divorciado', 'Viudo'] })
  @IsString()
  @IsOptional()
  estadoCivil: string;

  @ApiProperty()
  @IsString()
  estado: string;
}
