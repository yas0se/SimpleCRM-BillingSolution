const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createClient(req, res) {
  const { Nom, Prenom, Adresse, Ville, Numero_telephone, Email } = req.body;
  
  try {
    const newClient = await prisma.client.create({
      data: { Nom, Prenom, Adresse, Ville, Numero_telephone, Email },
    });
    res.json(newClient);
  } catch (error) {
    console.error('Error creating client:', error);
    res.status(500).json({ error: 'Error creating client' });
  }
}

async function getAllClients(req, res) {
  try {
    const allClients = await prisma.client.findMany();
    res.json(allClients);
  } catch (error) {
    console.error('Error finding client:', error);
    res.status(500).json({ error: 'Error finding client' });
  }
}

async function updateClient(req, res) {
  const id = req.params.id;
  const { Nom, Prenom, Adresse, Ville, Numero_telephone, Email } = req.body;
  try {
    const updateClients = await prisma.client.update({
      where: { ID_Client: parseInt(id)},
      data: { Nom, Prenom, Adresse, Ville, Numero_telephone, Email }
    });
    res.json(updateClients);
  } catch (error) {
    console.error('Error updating client:', error);
    res.status(500).json({ error: 'Error updating client' });
  }
}

async function deleteClient(req, res) {
  const id = req.params.id;
  try {
    const deletedClients = await prisma.client.delete({
      where: { ID_Client: parseInt(id)},
    });
    res.json(deletedClients);
  } catch (error) {
    console.error('Error deleting client:', error);
    res.status(500).json({ error: 'Error deleting client' });
  }
}

module.exports = {
  createClient,
  getAllClients,
  updateClient,
  deleteClient
};
