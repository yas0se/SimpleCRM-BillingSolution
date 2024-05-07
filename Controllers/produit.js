const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createProduit(req, res) {
  const { Nom, Prix_achat, Prix_vente, Dimension, Taille  } = req.body;
  const Taux_marge = Prix_vente - Prix_achat;
  try {
    const newProduit = await prisma.produit.create({
      data: { Nom, Prix_achat, Prix_vente, Taux_marge, Dimension, Taille  },
    });
    res.json(newProduit);
  } catch (error) {
    console.error('Error creating Produit:', error);
    res.status(500).json({ error: 'Error creating Produit' });
  }
}

async function getAllProduits(req, res) {
  try {
    const allProduits = await prisma.produit.findMany();
    res.json(allProduits);
  } catch (error) {
    console.error('Error finding Produit:', error);
    res.status(500).json({ error: 'Error finding Produit' });
  }
}

async function updateProduit(req, res) {
  const id = req.params.id;
  const { Nom, Prix_achat, Prix_vente, Taux_marge, Dimension, Taille  } = req.body;
  try {
    const updateProduits = await prisma.produit.update({
      where: { ID_Produit: parseInt(id)},
      data: { Nom, Prix_achat, Prix_vente, Taux_marge, Dimension, Taille  }
    });
    res.json(updateProduits);
  } catch (error) {
    console.error('Error updating Produit:', error);
    res.status(500).json({ error: 'Error updating Produit' });
  }
}

async function deleteProduit(req, res) {
  const id = req.params.id;
  try {
    const deletedProduits = await prisma.produit.delete({
      where: { ID_Produit: parseInt(id)},
    });
    res.json(deletedProduits);
  } catch (error) {
    console.error('Error deleting Produit:', error);
    res.status(500).json({ error: 'Error deleting Produit' });
  }
}

module.exports = {
  createProduit,
  getAllProduits,
  updateProduit,
  deleteProduit
};
