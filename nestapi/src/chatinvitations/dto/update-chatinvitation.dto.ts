import { PartialType } from '@nestjs/mapped-types';
import { CreateChatinvitationDto } from './create-chatinvitation.dto';

export class UpdateChatinvitationDto extends PartialType(CreateChatinvitationDto) {}
