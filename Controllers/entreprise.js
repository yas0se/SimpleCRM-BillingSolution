
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createEntreprise(req, res) {
  const { Nom, Siege_social, Date_creation, Identifiant_fiscal, Capital, Nombre_employes, Ville, Responsable, Numero_telephone, Email  } = req.body;
  try {
    const newEntreprise = await prisma.entreprise.create({
      data: { Nom, Siege_social, Date_creation, Identifiant_fiscal, Capital, Nombre_employes, Ville, Responsable, Numero_telephone, Email  },
    });
    res.json(newEntreprise);
  } catch (error) {
    console.error('Error creating Entreprise:', error);
    res.status(500).json({ error: 'Error creating Entreprise' });
  }
}

async function getAllEntreprises(req, res) {
  try {
    const allEntreprises = await prisma.entreprise.findMany();
    res.json(allEntreprises);
  } catch (error) {
    console.error('Error finding Entreprise:', error);
    res.status(500).json({ error: 'Error finding Entreprise' });
  }
}

async function updateEntreprise(req, res) {
  const id = req.params.id;
  const { Nom, Siege_social, Date_creation, Identifiant_fiscal, Capital, Nombre_employes, Ville, Responsable, Numero_telephone, Email  } = req.body;
  try {
    const updateEntreprises = await prisma.entreprise.update({
      where: { ID_Entreprise: parseInt(id)},
      data: { Nom, Siege_social, Date_creation, Identifiant_fiscal, Capital, Nombre_employes, Ville, Responsable, Numero_telephone, Email  }
    });
    res.json(updateEntreprises);
  } catch (error) {
    console.error('Error updating Entreprise:', error);
    res.status(500).json({ error: 'Error updating Entreprise' });
  }
}

async function deleteEntreprise(req, res) {
  const id = req.params.id;
  try {
    const deletedEntreprises = await prisma.entreprise.delete({
      where: { ID_Entreprise: parseInt(id)},
    });
    res.json(deletedEntreprises);
  } catch (error) {
    console.error('Error deleting Entreprise:', error);
    res.status(500).json({ error: 'Error deleting Entreprise' });
  }
}

module.exports = {
  createEntreprise,
  getAllEntreprises,
  updateEntreprise,
  deleteEntreprise
};
