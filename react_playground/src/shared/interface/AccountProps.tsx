
interface AccountProps {
  id: number;
  email: string;
  name: string;
  nickname: string;
  token: string;
  image: string;
  status: boolean;
  friendSender: string[];
  friendRecipient: string[];
  chatOwner: string[];
  chatInviter: string[];
  chatGuest: string[];
  createdAt: string;
  updatedAt: string;
}
