import {PrismaClient} from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
	// create two dummy articles
	const user1 = await prisma.account.upsert({
	  where: { email: 'kitty2@42.fr' },
	  update: {},
	  create: {
		name: 'Kitty2',
		email: 'kitty2@42.fr',
		status: true,
	  },
	});

	const user2 = await prisma.account.upsert({
		where: { email: 'teddy@42.fr' },
		update: {},
		create: {
		  name: 'Teddy',
		  email: 'teddy@42.fr',
		  status: true,
		},
	  });

  
	console.log({ user1, user2});
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
  