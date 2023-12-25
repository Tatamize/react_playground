import { Module } from '@nestjs/common';
import { FriendshipsService } from './friendships.service';
import { FriendshipsController } from './friendships.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FriendshipsController],
  providers: [FriendshipsService],
  imports: [PrismaModule],
})
export class FriendshipsModule {}
