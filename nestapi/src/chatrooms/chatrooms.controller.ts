import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ChatroomsService } from './chatrooms.service';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { UpdateChatroomDto } from './dto/update-chatroom.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ChatroomEntity } from './entities/chatroom.entity';

@Controller('chatrooms')
@ApiTags('chatrooms')
export class ChatroomsController {
  constructor(private readonly chatroomsService: ChatroomsService) {}

  @Post()
  @ApiCreatedResponse({type: ChatroomEntity}) 
  create(@Body() createChatroomDto: CreateChatroomDto) {
    return this.chatroomsService.create(createChatroomDto);
  }

  @Get()
  @ApiOkResponse({type: ChatroomEntity, isArray : true})
  findAll() {
    return this.chatroomsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: ChatroomEntity})
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.chatroomsService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({type: ChatroomEntity})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateChatroomDto: UpdateChatroomDto) {
    return this.chatroomsService.update(id, updateChatroomDto);
  }

  @Delete(':id')
  @ApiOkResponse({type: ChatroomEntity})
  remove(@Param('id', ParseIntPipe) id: number){
    return this.chatroomsService.remove(id);
  }
}
