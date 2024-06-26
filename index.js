const express = require('express');
const app = express();

const fact = require('./routes/factures');

const controllerClient = require('./Controllers/client');
const controllerEntreprise = require('./Controllers/entreprise');
const controllerProduit = require('./Controllers/produit')
// const controllerFacture = require('./Controllers/facture')
const controllerLigneFacture = require('./Controllers/ligneFacture')
const log = require('./log');
const logger = require('./log');


app.use(express.json());

// app.use(function (req,res,next){
//     console.log('yasser mestaoui'); 
//     next()
// })


app.post('/client/', controllerClient.createClient);
app.get('/client/', function (req,res,next){
    console.log('yasser mestaoui'); 
    next()
}, controllerClient.getAllClients);
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

app.use('/', fact);

// app.post('/facture/', controllerFacture.createFacture);
// app.get('/facture/', controllerFacture.getAllFactures);
// app.patch('/facture/:id', controllerFacture.updateFacture);
// app.delete('/facture/:id', controllerFacture.deleteFacture);

app.post('/ligneFacture/', controllerLigneFacture.createLigneFacture);
app.get('/ligneFacture/', controllerLigneFacture.getAllLigneFactures);
app.patch('/ligneFacture/:id', controllerLigneFacture.updateLigneFacture);
app.delete('/ligneFacture/:id', controllerLigneFacture.deleteLigneFacture);

app.listen(3001, () => logger.info('app working on port 3001...'));
