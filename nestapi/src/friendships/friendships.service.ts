import { Injectable } from '@nestjs/common';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendshipsService {
  constructor(private prisma: PrismaService){}

  create(createFriendshipDto: CreateFriendshipDto) {
    return this.prisma.friendship.create({ data: createFriendshipDto});
  }

  findAll() {
    return this.prisma.friendship.findMany();
  }

  findOne(id: number) {
    return this.prisma.friendship.findUnique({ where: { id } });
  }

  update(id: number, updateFriendshipDto: UpdateFriendshipDto) {
    return this.prisma.friendship.update({ where: { id }, data: updateFriendshipDto });
  }

  remove(id: number) {
    return this.prisma.friendship.delete({ where: { id } });
  }
}
