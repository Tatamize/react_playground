import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { PrismaModule } from './prisma/prisma.module';
import { FriendshipsModule } from './friendships/friendships.module';
import { ChatroomsModule } from './chatrooms/chatrooms.module';
import { ChatinvitationsModule } from './chatinvitations/chatinvitations.module';

@Module({
  imports: [AccountsModule, PrismaModule, FriendshipsModule, ChatroomsModule, ChatinvitationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
