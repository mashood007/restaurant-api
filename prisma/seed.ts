// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two sample user
  const category1 = await prisma.category.upsert({
    where: { title: 'Desserts' },
    update: {},
    create: {
      title: 'Desserts',
    },
  });

  const category2 = await prisma.category.upsert({
    where: { title: 'Drinks' },
    update: {},
    create: {
      title: 'Drinks',
    },
  });
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
