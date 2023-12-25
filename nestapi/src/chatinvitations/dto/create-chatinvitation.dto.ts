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
  
  export class CreateChatinvitationDto {

	@IsNotEmpty()
	@IsBoolean()
	@ApiProperty()
	status: boolean;

	@IsNotEmpty()
	@IsInt()
	@ApiProperty()
	roomID: number;

	@IsNotEmpty()
	@IsInt()
	@ApiProperty()
	chatInviterID: number;

	@IsNotEmpty()
	@IsInt()
	@ApiProperty()
	chatGuestID: number; 
  }
