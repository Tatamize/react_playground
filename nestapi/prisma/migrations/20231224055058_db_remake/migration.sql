-- CreateEnum
CREATE TYPE "RoomStatus" AS ENUM ('PUBLIC', 'INVITEONLY');

-- AlterTable
ALTER TABLE "Friendship" ALTER COLUMN "accepted" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Chatroom" (
    "id" SERIAL NOT NULL,
    "status" "RoomStatus" NOT NULL,
    "ownerID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chatroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatInvitation" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "roomID" INTEGER NOT NULL,
    "chatInviterID" INTEGER NOT NULL,
    "chatGuestID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChatInvitation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Chatroom" ADD CONSTRAINT "Chatroom_ownerID_fkey" FOREIGN KEY ("ownerID") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatInvitation" ADD CONSTRAINT "ChatInvitation_roomID_fkey" FOREIGN KEY ("roomID") REFERENCES "Chatroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatInvitation" ADD CONSTRAINT "ChatInvitation_chatInviterID_fkey" FOREIGN KEY ("chatInviterID") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatInvitation" ADD CONSTRAINT "ChatInvitation_chatGuestID_fkey" FOREIGN KEY ("chatGuestID") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
