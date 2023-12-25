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
  import {RoomStatus} from  '@prisma/client';

export class CreateChatroomDto {

	@IsNotEmpty()
	@ApiProperty()
	status : RoomStatus;

	@IsNotEmpty()
	@IsInt()
	@ApiProperty()
	ownerID: number; 
}
