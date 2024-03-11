import { Test, TestingModule } from '@nestjs/testing';
import { AuthPatientsController } from './auth-patients.controller';
import { AuthPatientsService } from './auth-patients.service';

describe('AuthPatientsController', () => {
  let controller: AuthPatientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthPatientsController],
      providers: [AuthPatientsService],
    }).compile();

    controller = module.get<AuthPatientsController>(AuthPatientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
