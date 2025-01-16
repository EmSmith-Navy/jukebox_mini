const express = require('express');
const { PrismaClient } = require('@prisma/client');
// Remove the duplicate declaration of 'prisma'
// Remove the duplicate declaration of 'app'
app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
	where: { id: parseInt(id) },
	include: { playlists: true }
  });
  res.json(user);
});

app.post('/users/:id/playlists', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const playlist = await prisma.playlist.create({
	data: {
	  name,
	  description,
	  ownerId: parseInt(id)
	}
  });
  res.json(playlist);
});

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    include: { playlists: true }
  });
  res.json(user);
});

app.post('/users/:id/playlists', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const playlist = await prisma.playlist.create({
    data: {
      name,
      description,
      ownerId: parseInt(id)
    }
  });
  res.json(playlist);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});