import { ApiProperty } from '@nestjs/swagger';
import {
	IsBoolean,
	IsNotEmpty,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
	IsEmail,
  } from 'class-validator';

export class CreateAccountDto {
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	@ApiProperty()
	email: string;

	@IsNotEmpty()
	@IsString()
	@ApiProperty()
	name: string;

	@IsString()
	@ApiProperty({required : false})
	nickname?: string;

	@IsString()
	@ApiProperty({required : false})
	token?: string;

	@IsString()
	@ApiProperty({required : false})
	image?: string;

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	status: boolean;


}
