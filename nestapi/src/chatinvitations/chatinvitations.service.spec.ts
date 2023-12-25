import { Test, TestingModule } from '@nestjs/testing';
import { ChatinvitationsService } from './chatinvitations.service';

describe('ChatinvitationsService', () => {
  let service: ChatinvitationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatinvitationsService],
    }).compile();

    service = module.get<ChatinvitationsService>(ChatinvitationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
