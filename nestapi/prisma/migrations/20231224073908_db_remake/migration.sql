-- DropForeignKey
ALTER TABLE "ChatInvitation" DROP CONSTRAINT "ChatInvitation_chatGuestID_fkey";

-- DropForeignKey
ALTER TABLE "ChatInvitation" DROP CONSTRAINT "ChatInvitation_chatInviterID_fkey";

-- DropForeignKey
ALTER TABLE "ChatInvitation" DROP CONSTRAINT "ChatInvitation_roomID_fkey";

-- DropForeignKey
ALTER TABLE "Chatroom" DROP CONSTRAINT "Chatroom_ownerID_fkey";

-- AlterTable
ALTER TABLE "Chatroom" ALTER COLUMN "ownerID" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Chatroom" ADD CONSTRAINT "Chatroom_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatInvitation" ADD CONSTRAINT "ChatInvitation_roomID_fkey" FOREIGN KEY ("roomID") REFERENCES "Chatroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatInvitation" ADD CONSTRAINT "ChatInvitation_chatInviterID_fkey" FOREIGN KEY ("chatInviterID") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatInvitation" ADD CONSTRAINT "ChatInvitation_chatGuestID_fkey" FOREIGN KEY ("chatGuestID") REFERENCES "Account"("id") ON DELETE CASCADE ON UPDATE CASCADE;
