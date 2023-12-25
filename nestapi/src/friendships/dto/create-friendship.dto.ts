import { ApiProperty } from '@nestjs/swagger';
import {
	IsBoolean,
	IsNotEmpty,
	IsOptional,
	IsString,
	MaxLength,
	MinLength,
	IsEmail,
	IsInt,
  } from 'class-validator';

export class CreateFriendshipDto {

	@IsNotEmpty()
	@IsInt()
	@ApiProperty()
	friendSenderID: number;

	@IsNotEmpty()
	@IsInt()
	@ApiProperty()
	friendRecipientID: number; 

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	accepted: boolean;
}
