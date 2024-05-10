const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createFacture(req, res) {
  const { ID_Client, Montant_total  } = req.body;
  try {
    const newFacture = await prisma.facture.create({
        data: { ID_Client, Montant_total },
      });
    res.json(newFacture);
  } catch (error) {
    console.error('Error creating Facture:', error);
    res.status(500).json({ error: 'Error creating Facture' });
  }
}

async function getFacture(req, res) {
  const id = req.params.id;
  try {
    const getedFactures = await prisma.facture.findUnique({
      where: { ID_Facture: parseInt(id)},
    });
    res.json(getedFactures);
  } catch (error) {
    console.error('Error geting Facture:', error);
    res.status(500).json({ error: 'Error geting Facture' });
  }
}
async function getAllFactures(req, res) {
  try {
    const allFactures = await prisma.facture.findMany();
    res.json(allFactures);
  } catch (error) {
    console.error('Error finding Facture:', error);
    res.status(500).json({ error: 'Error finding Facture' });
  }
}

async function updateFacture(req, res) {
  const id = req.params.id;
  const { ID_Client, Montant_total  } = req.body;
  try {
    const updateFactures = await prisma.facture.update({
      where: { ID_Facture: parseInt(id)},
      data: { ID_Client, Montant_total  }
    });
    res.json(updateFactures);
  } catch (error) {
    console.error('Error updating Facture:', error);
    res.status(500).json({ error: 'Error updating Facture' });
  }
}

async function deleteFacture(req, res) {
  const id = req.params.id;
  try {
    const deletedFactures = await prisma.facture.delete({
      where: { ID_Facture: parseInt(id)},
    });
    res.json(deletedFactures);
  } catch (error) {
    console.error('Error deleting Facture:', error);
    res.status(500).json({ error: 'Error deleting Facture' });
  }
}

module.exports = {
  getFacture,
  createFacture,
  getAllFactures,
  updateFacture,
  deleteFacture
};
