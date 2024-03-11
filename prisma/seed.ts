import { PrismaClient } from '@prisma/client';
import { create } from 'domain';
// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // creacion de roles
  const roleDev = await prisma.rol.upsert({
    where: { rolId: 1 },
    update: {},
    create: {
      nombre: 'Developer',
    },
  });
  //  creacion de area
  const areaSistemas = await prisma.areaEmpresa.upsert({
    where: { areaId: 1 },
    update: {},
    create: {
      nombre: 'Sistemas',
    },
  });
  // creacion de cargo
  const cargoDev = await prisma.cargoEmpresa.upsert({
    where: { cargoId: 1 },
    update: {},
    create: {
      nombre: 'Developer',
      areaId: 1,
    },
  });
  // creacion de usuario
  const userDev = await prisma.colaborador.upsert({
    where: { colaboradorId: 1 },
    update: {},
    create: {
      nombre: 'Daniel',
      apellidos: 'Morán Vilchez',
      tipoDocumento: 'DNI',
      dni: '70315050',
      cargoId: 1,
    },
  });

  console.log({ userDev, roleDev, cargoDev, areaSistemas });
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
