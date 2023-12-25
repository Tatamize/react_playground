import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService){}

  create(createAccountDto: CreateAccountDto) {
    // return 'This action adds a new account';
    return this.prisma.account.create({ data: createAccountDto });
  }

  findAll() {
    return this.prisma.account.findMany({
      // include:{friendSender: true, friendRecipient: true}
    });
  }

  findOne(id: number) {
    return this.prisma.account.findUnique({
      where : {id}, 
      // include:{friendSender: true, friendRecipient: true}
    });
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.prisma.account.update({ where: { id }, data: updateAccountDto });
  }

  remove(id: number) {
    return this.prisma.account.delete({ where: { id } });
  }
}
