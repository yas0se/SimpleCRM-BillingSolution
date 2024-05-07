const express = require('express');
const app = express();

const controllerClient = require('./Controllers/client');
const controllerEntreprise = require('./Controllers/entreprise');
const controllerProduit = require('./Controllers/produit')
const controllerFacture = require('./Controllers/facture')

app.use(express.json());

app.post('/client/', controllerClient.createClient);
app.get('/client/', controllerClient.getAllClients);
app.patch('/client/:id', controllerClient.updateClient);
app.delete('/client/:id', controllerClient.deleteClient);

app.post('/entreprise/', controllerEntreprise.createEntreprise);
app.get('/entreprise/', controllerEntreprise.getAllEntreprises);
app.patch('/entreprise/:id', controllerEntreprise.updateEntreprise);
app.delete('/entreprise/:id', controllerEntreprise.deleteEntreprise);

app.post('/produit/', controllerProduit.createProduit);
app.get('/produit/', controllerProduit.getAllProduits);
app.patch('/produit/:id', controllerProduit.updateProduit);
app.delete('/produit/:id', controllerProduit.deleteProduit);

app.post('/facture/', controllerFacture.createFacture);
app.get('/facture/', controllerFacture.getAllFactures);
app.patch('/facture/:id', controllerFacture.updateFacture);
app.delete('/facture/:id', controllerFacture.deleteFacture);

app.listen(3001, () => console.log('app working on port 3001...'));
