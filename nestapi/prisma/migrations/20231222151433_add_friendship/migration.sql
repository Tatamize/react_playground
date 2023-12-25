/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Game";

-- CreateTable
CREATE TABLE "Friendship" (
    "id" SERIAL NOT NULL,
    "friendSenderID" INTEGER NOT NULL,
    "friendRecipientID" INTEGER NOT NULL,
    "accepted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_friendSenderID_fkey" FOREIGN KEY ("friendSenderID") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_friendRecipientID_fkey" FOREIGN KEY ("friendRecipientID") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
