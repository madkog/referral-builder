import { PartialType } from '@nestjs/mapped-types';
import { CreateReferralDto } from './create-referral.dto';
import { IsEmail, IsNotEmpty, IsInt, MinLength, MaxLength } from 'class-validator';

export class UpdateReferralDto extends PartialType(CreateReferralDto) {
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(50)
    givenName: string;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(50)
    surname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    phone: string;

    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    homeName: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    street: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    suburb: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(10)
    state: string;

    @IsNotEmpty()
    @IsInt()
    postcode: number;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    country: string;

    @MinLength(3)
    @MaxLength(20)
    avatar: string;

}
