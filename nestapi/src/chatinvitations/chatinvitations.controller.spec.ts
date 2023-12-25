import { Test, TestingModule } from '@nestjs/testing';
import { ChatinvitationsController } from './chatinvitations.controller';
import { ChatinvitationsService } from './chatinvitations.service';

describe('ChatinvitationsController', () => {
  let controller: ChatinvitationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatinvitationsController],
      providers: [ChatinvitationsService],
    }).compile();

    controller = module.get<ChatinvitationsController>(ChatinvitationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
