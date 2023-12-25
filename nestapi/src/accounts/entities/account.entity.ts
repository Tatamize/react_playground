import {Account, Friendship, Chatroom, ChatInvitation} from  '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AccountEntity implements Account {
	@ApiProperty()
	id : number;
	
	@ApiProperty()
	email : string;
	
	@ApiProperty()
	name : string;
	
	@ApiProperty({required : false, nullable : true})
	nickname : string;
	
	@ApiProperty({required : false, nullable : true}) // this should be protected later
	token : string;
	
	@ApiProperty({required : false, nullable : true})
	image : string;

	@ApiProperty({default : false})
	status : boolean;

	@ApiProperty()
	friendSender : Friendship[];

	@ApiProperty()
	friendRecipient : Friendship[];

	@ApiProperty()
	chatOwner : Chatroom[];

	@ApiProperty()
	chatInviter : ChatInvitation[];

	@ApiProperty()
	chatGuest : ChatInvitation[];

	@ApiProperty()
	createdAt : Date;

	@ApiProperty()
	updatedAt : Date;
	
}
