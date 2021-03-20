import { IsEmail, IsNotEmpty, IsInt, MinLength, MaxLength, IsEmpty } from 'class-validator';
import { IsNull } from 'typeorm';

export class CreateReferralDto {
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
    @MaxLength(25)
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
    @MaxLength(28)
    state: string;

    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(4)
    postcode: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    country: string;

    @MaxLength(20)
    avatar: string;
}
