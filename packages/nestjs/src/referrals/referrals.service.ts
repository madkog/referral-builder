import { Injectable , HttpException, HttpStatus } from '@nestjs/common';
import { CreateReferralDto } from './dto/create-referral.dto';
import { Referral } from './entities/referral.entity';
import { UpdateReferralDto } from './dto/update-referral.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ReferralsService {

  constructor(
    @InjectRepository(Referral)
    private referralsRepository: Repository<Referral>,
  ) {}

  async create(referral: CreateReferralDto) : Promise<CreateReferralDto> {
    const referralEntity: Referral = this.referralsRepository.create(referral);
    await this.referralsRepository.save(referralEntity).catch((e) => {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });

    return referral;
  }

  async findAll(): Promise<Referral[]> { 
    return await this.referralsRepository.find().catch((e) => {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });
  }

  async findOne(id: number) : Promise<Referral> {
    return await this.referralsRepository.findOne(id).catch((e) => {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });
  }

  async update(id: number, referral: UpdateReferralDto) {
    return await this.referralsRepository.update(id, referral).catch((e) => {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });
  }

  async remove(id: number): Promise<void> {
    await this.referralsRepository.delete(id).catch((e) => {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });
  }
}
