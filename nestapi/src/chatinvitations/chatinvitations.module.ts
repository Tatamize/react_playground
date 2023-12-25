import { Module } from '@nestjs/common';
import { ChatinvitationsService } from './chatinvitations.service';
import { ChatinvitationsController } from './chatinvitations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [ChatinvitationsController],
  providers: [ChatinvitationsService],
  imports: [PrismaModule],
})
export class ChatinvitationsModule {}
