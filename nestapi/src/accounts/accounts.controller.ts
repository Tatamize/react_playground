import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AccountEntity } from './entities/account.entity';

@Controller('accounts')
@ApiTags('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @ApiCreatedResponse({type: AccountEntity}) // for POST
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get()
  @ApiOkResponse({type: AccountEntity, isArray : true}) // for Get Patch Delete
  findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: AccountEntity})
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.accountsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: AccountEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(id, updateAccountDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: AccountEntity})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.accountsService.remove(id);
  }
}
