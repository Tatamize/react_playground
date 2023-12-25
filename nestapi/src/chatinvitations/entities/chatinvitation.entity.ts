import {Account, Chatroom, ChatInvitation} from  '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ChatInvitationEntitiy implements ChatInvitation {
	@ApiProperty()
	id : number;

	@ApiProperty({default : false})
	status : boolean;

	@ApiProperty()
	roomID : number;
	@ApiProperty()
	room : Chatroom;

	@ApiProperty()
	chatInviterID: number;
	@ApiProperty()
	chatInviter: Account;

	@ApiProperty()
	chatGuestID: number;
	@ApiProperty()
	chatGuest: Account;

	@ApiProperty()
	createdAt : Date;
	@ApiProperty()
	updatedAt : Date;

}