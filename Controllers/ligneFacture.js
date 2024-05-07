const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createLigneFacture(req, res) {
  const { ID_Facture, ID_Produit, Quantite } = req.body;
  try {
    const newLigneFacture = await prisma.ligne_facture.create({
      data: { ID_Facture, ID_Produit, Quantite },
    });
    res.json(newLigneFacture);
  } catch (error) {
    console.error('Error creating Ligne Facture:', error);
    res.status(500).json({ error: 'Error creating Ligne Facture' });
  }
}

async function getAllLigneFactures(req, res) {
  try {
    const allLigneFactures = await prisma.ligne_facture.findMany();
    res.json(allLigneFactures);
  } catch (error) {
    console.error('Error finding Ligne Facture:', error);
    res.status(500).json({ error: 'Error finding Ligne Facture' });
  }
}

async function updateLigneFacture(req, res) {
  const id = req.params.id;
  const { ID_Facture, ID_Produit, Quantite } = req.body;
  try {
    const updateLigneFacture = await prisma.ligne_facture.update({
      where: { ID_Ligne: parseInt(id) },
      data: { ID_Facture, ID_Produit, Quantite },
    });
    res.json(updateLigneFacture);
  } catch (error) {
    console.error('Error updating Ligne Facture:', error);
    res.status(500).json({ error: 'Error updating Ligne Facture' });
  }
}

async function deleteLigneFacture(req, res) {
  const id = req.params.id;
  try {
    const deletedLigneFacture = await prisma.ligne_facture.delete({
      where: { ID_Ligne: parseInt(id) },
    });
    res.json(deletedLigneFacture);
  } catch (error) {
    console.error('Error deleting Ligne Facture:', error);
    res.status(500).json({ error: 'Error deleting Ligne Facture' });
  }
}

module.exports = {
  createLigneFacture,
  getAllLigneFactures,
  updateLigneFacture,
  deleteLigneFacture,
};