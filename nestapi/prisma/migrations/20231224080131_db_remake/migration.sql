-- DropForeignKey
ALTER TABLE "Chatroom" DROP CONSTRAINT "Chatroom_ownerID_fkey";

-- AlterTable
ALTER TABLE "Chatroom" ALTER COLUMN "ownerID" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Chatroom" ADD CONSTRAINT "Chatroom_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "Account"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;
