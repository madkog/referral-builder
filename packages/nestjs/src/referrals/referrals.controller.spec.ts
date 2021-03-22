import { Test, TestingModule } from '@nestjs/testing';
import { ReferralsController } from './referrals.controller';
import { ReferralsService } from './referrals.service';

describe('ReferralsController', () => {
  let controller: ReferralsController;

  let referralsController: ReferralsController;
  let referralsService: ReferralsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferralsController],
      providers: [ReferralsService],
    }).compile();

    const moduleRef = await Test.createTestingModule({
      controllers: [ReferralsController],
      providers: [ReferralsService],
    }).compile();

    controller = module.get<ReferralsController>(ReferralsController);
    referralsService = moduleRef.get<ReferralsService>(ReferralsService);
    referralsController = moduleRef.get<ReferralsController>(ReferralsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
