import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { FriendshipsService } from './friendships.service';
import { CreateFriendshipDto } from './dto/create-friendship.dto';
import { UpdateFriendshipDto } from './dto/update-friendship.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FriendshipEntity } from './entities/friendship.entity';

@Controller('friendships')
@ApiTags('friendships')
export class FriendshipsController {
  constructor(private readonly friendshipsService: FriendshipsService) {}

  @Post()
  @ApiCreatedResponse({ type: FriendshipEntity })
  create(@Body() createFriendshipDto: CreateFriendshipDto) {
    return this.friendshipsService.create(createFriendshipDto);
  }

  @Get()
  @ApiOkResponse({ type: FriendshipEntity, isArray:true })
  findAll() {
    return this.friendshipsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: FriendshipEntity })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.friendshipsService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: FriendshipEntity })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFriendshipDto: UpdateFriendshipDto) {
    return this.friendshipsService.update(id, updateFriendshipDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: FriendshipEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.friendshipsService.remove(id);
  }
}
