const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ModelsUsers = prisma.user;
const ModelsPost = prisma.post;

module.exports = {
  ModelsUsers,
  ModelsPost
};
