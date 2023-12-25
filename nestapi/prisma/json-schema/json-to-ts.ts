interface RootObject {
  '$schema': string;
  definitions: Definitions;
  type: string;
  properties: Properties5;
}

interface Properties5 {
  account: Items;
  friendship: Items;
  chatroom: Items;
  chatInvitation: Items;
}

interface Definitions {
  Account: Account;
  Friendship: Friendship;
  Chatroom: Chatroom;
  ChatInvitation: ChatInvitation;
}

interface ChatInvitation {
  type: string;
  properties: Properties4;
}

interface Properties4 {
  id: Id;
  status: Status;
  room: Items;
  chatInviter: Items;
  chatGuest: Items;
  createdAt: CreatedAt;
  updatedAt: CreatedAt;
}

interface Chatroom {
  type: string;
  properties: Properties3;
}

interface Properties3 {
  id: Id;
  status: Status2;
  invitations: FriendSender;
  owner: Items;
  createdAt: CreatedAt;
  updatedAt: CreatedAt;
}

interface Status2 {
  type: string;
  enum: string[];
}

interface Friendship {
  type: string;
  properties: Properties2;
}

interface Properties2 {
  id: Id;
  accepted: Status;
  friendSender: Items;
  friendRecipient: Items;
  createdAt: CreatedAt;
  updatedAt: CreatedAt;
}

interface Account {
  type: string;
  properties: Properties;
}

interface Properties {
  id: Id;
  email: Id;
  name: Id;
  nickname: Nickname;
  token: Nickname;
  image: Nickname;
  status: Status;
  friendSender: FriendSender;
  friendRecipient: FriendSender;
  chatOwner: FriendSender;
  chatInviter: FriendSender;
  chatGuest: FriendSender;
  createdAt: CreatedAt;
  updatedAt: CreatedAt;
}

interface CreatedAt {
  type: string;
  format: string;
}

interface FriendSender {
  type: string;
  items: Items;
}

interface Items {
  '$ref': string;
}

interface Status {
  type: string;
  default: boolean;
}

interface Nickname {
  type: string[];
}

interface Id {
  type: string;
}