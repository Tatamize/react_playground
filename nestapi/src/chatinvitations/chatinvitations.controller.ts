import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ChatinvitationsService } from './chatinvitations.service';
import { CreateChatinvitationDto } from './dto/create-chatinvitation.dto';
import { UpdateChatinvitationDto } from './dto/update-chatinvitation.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ChatInvitationEntitiy } from './entities/chatinvitation.entity';

@Controller('chatinvitations')
@ApiTags('chatinvitation')
export class ChatinvitationsController {
  constructor(private readonly chatinvitationsService: ChatinvitationsService) {}

  @Post()
  @ApiCreatedResponse({type: ChatInvitationEntitiy}) 
  create(@Body() createChatinvitationDto: CreateChatinvitationDto) {
    return this.chatinvitationsService.create(createChatinvitationDto);
  }

  @Get()
  @ApiOkResponse({type: ChatInvitationEntitiy, isArray : true})
  findAll() {
    return this.chatinvitationsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: ChatInvitationEntitiy})
  findOne(@Param('id', ParseIntPipe) id:number) {
    return this.chatinvitationsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: ChatInvitationEntitiy})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateChatinvitationDto: UpdateChatinvitationDto) {
    return this.chatinvitationsService.update(id, updateChatinvitationDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: ChatInvitationEntitiy})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.chatinvitationsService.remove(id);
  }
}
