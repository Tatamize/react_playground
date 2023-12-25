import { Injectable } from '@nestjs/common';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { UpdateChatroomDto } from './dto/update-chatroom.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatroomsService {
  constructor(private prisma: PrismaService){}

  create(createChatroomDto: CreateChatroomDto) {
    return this.prisma.chatroom.create({ 
      data : createChatroomDto
    });
  }

  findAll() {
    return this.prisma.chatroom.findMany();
  }

  findOne(id: number) {
    return this.prisma.chatroom.findUnique({ where: { id } });
  }

  update(id: number, updateChatroomDto: UpdateChatroomDto) {
    return this.prisma.chatroom.update({ where: { id }, data: updateChatroomDto });
  }

  remove(id: number) {
    return this.prisma.chatroom.delete({ where: { id } });
  }
}
