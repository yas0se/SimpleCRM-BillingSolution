// const express = require('express')
// const app = express();
// const {PrismaClient} = require('@prisma/client');
// const prisma = new PrismaClient();

// app.use(express.json());


// app.post('/', async (req, res) => {
//   const { Nom, Prenom, Adresse, Ville, Numero_telephone, Email } = req.body;
  
//   try {
//     const newClient = await prisma.client.create({
//       data: { Nom, Prenom, Adresse, Ville, Numero_telephone, Email },
//     });
//     res.json(newClient);
//   } catch (error) {
//     console.error('Error creating client:', error);
//     res.status(500).json({ error: 'Error creating client' });
//   }
// });

// app.get('/', async (req, res) => {
  
//   try {
//     const allClients = await prisma.client.findMany();
//     res.json(allClients);

//   } catch (error) {
//     console.error('Error finding client:', error);
//     res.status(500).json({ error: 'Error finding client' });
//   }
// });

// app.patch('/:id', async (req, res) => {
//   const id = req.params.id;
//   const { Nom, Prenom, Adresse, Ville, Numero_telephone, Email } = req.body;
//   try {
//     const updateClients = await prisma.client.update({
//       where: { ID_Client: parseInt(id)},
//       data: { Nom, Prenom, Adresse, Ville, Numero_telephone, Email }
//     });
//     res.json(updateClients);

//   } catch (error) {
//     console.error('Error updating client:', error);
//     res.status(500).json({ error: 'Error updating client' });
//   }
// });

// app.delete('/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const deletedClients = await prisma.client.delete({
//       where: { ID_Client: parseInt(id)},
//     });
//     res.json(deletedClients);

//   } catch (error) {
//     console.error('Error deleting client:', error);
//     res.status(500).json({ error: 'Error deleting client' });
//   }
// });


// app.listen(3001, ()=> console.log('app working on port 3001...'))
const express = require('express');
const app = express();
const controllerClient = require('./Controllers/client');
const controllerEntreprise = require('./Controllers/entreprise');

app.use(express.json());

app.post('/client/', controllerClient.createClient);
app.get('/client/', controllerClient.getAllClients);
app.patch('/client/:id', controllerClient.updateClient);
app.delete('/client/:id', controllerClient.deleteClient);

app.post('/entreprise/', controllerEntreprise.createEntreprise);
app.get('/entreprise/', controllerEntreprise.getAllEntreprises);
app.patch('/entreprise/:id', controllerEntreprise.updateEntreprise);
app.delete('/entreprise/:id', controllerEntreprise.deleteEntreprise);

app.listen(3001, () => console.log('app working on port 3001...'));
