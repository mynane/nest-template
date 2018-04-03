import {IsOptional, IsBoolean, IsDate, IsString, IsInt, IsEmail, Length} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @Length(5, 15)
    @IsOptional()
    readonly name?: string;
    @IsString()
    @IsOptional()
    readonly password?: string;
    @IsString()
    @IsOptional()
    readonly salt?: string;
    @IsInt()
    @IsOptional()
    readonly sex?: number;
    @IsDate()
    @IsOptional()
    readonly birthday?: Date;
    @IsInt()
    @IsOptional()
    readonly phone: number;
    @IsEmail()
    @IsOptional()
    readonly email?: string;
    @IsBoolean()
    @IsOptional()
    readonly activity?: boolean;
    @IsString()
    @IsOptional()
    readonly roles?: string
}
  