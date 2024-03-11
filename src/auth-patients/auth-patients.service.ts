import { Injectable } from '@nestjs/common';
import { CreateAuthPatientDto } from './dto/create-auth-patient.dto';
import { UpdateAuthPatientDto } from './dto/update-auth-patient.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuthPatientsService {
  constructor(private prisma: PrismaService) {}
  create(createAuthPatientDto: CreateAuthPatientDto) {
    return this.prisma.accesoPaciente.create({ data: createAuthPatientDto });
  }

  findAll() {
    return this.prisma.accesoPaciente.findMany();
  }

  findOne(username: string) {
    return this.prisma.accesoPaciente.findUnique({ where: { username } });
  }

  update(username: string, updateAuthPatientDto: UpdateAuthPatientDto) {
    return this.prisma.accesoPaciente.update({
      where: { username },
      data: updateAuthPatientDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} authPatient`;
  }
}
