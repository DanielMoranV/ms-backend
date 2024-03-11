import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { AuthPatientsService } from './auth-patients.service';
import { CreateAuthPatientDto } from './dto/create-auth-patient.dto';
import { UpdateAuthPatientDto } from './dto/update-auth-patient.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthPatientEntity } from './entities/auth-patient.entity';

@Controller('auth-patients')
@ApiTags('auth-patients')
export class AuthPatientsController {
  constructor(private readonly authPatientsService: AuthPatientsService) {}

  @Post()
  @ApiCreatedResponse({ type: AuthPatientEntity })
  create(@Body() createAuthPatientDto: CreateAuthPatientDto) {
    return this.authPatientsService.create(createAuthPatientDto);
  }

  @Get()
  findAll() {
    return this.authPatientsService.findAll();
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.authPatientsService.findOne(username);
  }

  @Patch(':id')
  update(
    @Param('username') username: string,
    @Body() updateAuthPatientDto: UpdateAuthPatientDto,
  ) {
    return this.authPatientsService.update(username, updateAuthPatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authPatientsService.remove(+id);
  }
}
