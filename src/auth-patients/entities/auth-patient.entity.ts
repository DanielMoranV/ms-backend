import { ApiProperty } from '@nestjs/swagger';
import { AccesoPaciente } from '@prisma/client';
export class AuthPatientEntity implements AccesoPaciente {
  @ApiProperty()
  accesoId: number;

  @ApiProperty()
  username: string;

  password: string;

  @ApiProperty()
  estado: string;

  @ApiProperty()
  active: boolean;

  @ApiProperty()
  lastSession: Date;

  @ApiProperty()
  createAt: Date;

  @ApiProperty()
  pacienteId: number;
}
