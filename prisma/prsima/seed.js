const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 3; i++) {
	const user = await prisma.user.create({
	  data: {
		username: `user${i}`,
		playlists: {
		  create: Array.from({ length: 5 }, (_, j) => ({
			name: `Playlist ${j + 1}`,
			description: `Description for Playlist ${j + 1}`
		  }))
		}
	  }
	});
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
	await prisma.$disconnect();
  });