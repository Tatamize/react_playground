import {Friendship, Account} from  '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class FriendshipEntity implements Friendship {
	@ApiProperty()
	id: number;

	@ApiProperty({default : false})
	accepted: boolean; 
	
	@ApiProperty()
	friendSenderID: number;
	@ApiProperty()
	friendSender  : Account;
	
	@ApiProperty()
	friendRecipientID: number;
	@ApiProperty()
	friendRecipient :Account;
	
	
	@ApiProperty()
	createdAt: Date;
	@ApiProperty()
	updatedAt: Date;
}
