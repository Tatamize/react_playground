import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two users
  const user1 = await prisma.account.upsert({
    where: {email : "kitty@kit.com"},
    update: {},
    create: {
      email : "kitty@kit.com",
      name: "kitty"
    },
  });

  const user2 = await prisma.account.upsert({
    where: {email : "teddy@ted.com"},
    update: {},
    create: {
      email : "teddy@ted.com",
      name: "teddy"
    },
  });

  console.log({ user1, user2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });