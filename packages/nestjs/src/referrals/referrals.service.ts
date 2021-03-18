import { Injectable , HttpException, HttpStatus, Logger } from '@nestjs/common';
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
    await this.referralsRepository.save(referralEntity)
    .then((referral) => {
        Logger.log({message: `Referral successfully wrote - id: ${referral.id}` , level: 'success'});
    })
    .catch((e) => {
      Logger.log({message: 'Referral failed to Create', error: e.sqlMessage, level: 'error'});
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });

    return referral;
  }

  async findAll(): Promise<Referral[]> { 
    return await this.referralsRepository.find().catch((e) => {
      Logger.log({message: 'Failed to find all Referrals', error: e.sqlMessage, level: 'error'});
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });
  }

  async findOne(id: number) : Promise<Referral> {
    return await this.referralsRepository.findOne(id).catch((e) => {
      Logger.log({message: `Failed to find one Referral - id: ${id}`, error: e.sqlMessage, level: 'error'});
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });
  }

  async update(id: number, referral: UpdateReferralDto) {
    return await this.referralsRepository.update(id, referral)
    .then((referral) => {
      Logger.log({message: `Referral successfully updated - id: ${id}` , level: 'success'});
    })
    .catch((e) => {
      Logger.log({message: `Referral failed to update - id: ${id}`, error: e.sqlMessage, level: 'error'});
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });
  }

  async remove(id: number): Promise<void> {
    await this.referralsRepository.delete(id).catch((e) => {
      Logger.log({message: `Referral failed to delete - id: ${id}`, error: e.sqlMessage, level: 'error'});
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: e.sqlMessage,
      }, HttpStatus.BAD_REQUEST);
    });
  }
}
