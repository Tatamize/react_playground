-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_friendRecipientID_fkey";

-- DropForeignKey
ALTER TABLE "Friendship" DROP CONSTRAINT "Friendship_friendSenderID_fkey";

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_friendSenderID_fkey" FOREIGN KEY ("friendSenderID") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_friendRecipientID_fkey" FOREIGN KEY ("friendRecipientID") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
