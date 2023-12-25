import {Account, Chatroom, ChatInvitation, RoomStatus} from  '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ChatroomEntity implements Chatroom {
	@ApiProperty()
	id : number;

	@ApiProperty()
	status : RoomStatus;

	@ApiProperty()
	invitations  : ChatInvitation[]

	@ApiProperty({default : 0})
	ownerID  : number;
	@ApiProperty()
	owner :Account;

	@ApiProperty()
	createdAt : Date;
	@ApiProperty()
	updatedAt : Date;

}
