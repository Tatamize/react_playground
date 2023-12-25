import { Injectable } from '@nestjs/common';
import { CreateChatinvitationDto } from './dto/create-chatinvitation.dto';
import { UpdateChatinvitationDto } from './dto/update-chatinvitation.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ChatinvitationsService {
  constructor(private prisma: PrismaService){}

  create(createChatinvitationDto: CreateChatinvitationDto) {
     return this.prisma.chatInvitation.create({ 
      data : createChatinvitationDto
    });
  }

  findAll() {
    return this.prisma.chatInvitation.findMany();
  }

  findOne(id: number) {
    return this.prisma.chatInvitation.findUnique({ where: { id } });
  }

  update(id: number, updateChatinvitationDto: UpdateChatinvitationDto) {
    return this.prisma.chatInvitation.update({ where: { id }, data: updateChatinvitationDto});
  }

  remove(id: number) {
    return this.prisma.chatInvitation.delete({ where: { id } });
  }
}
