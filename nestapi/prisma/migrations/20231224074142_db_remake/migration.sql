-- DropForeignKey
ALTER TABLE "Chatroom" DROP CONSTRAINT "Chatroom_ownerID_fkey";

-- AddForeignKey
ALTER TABLE "Chatroom" ADD CONSTRAINT "Chatroom_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "Account"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
