const express = require('express');
const factureRouter = express.Router();

const factureController = require('../Controllers/facture');

factureRouter.route('/facture/').get(factureController.getAllFactures).post(factureController.createFacture);
factureRouter.route('/facture/:id').delete(factureController.deleteFacture).patch(factureController.updateFacture).get(factureController.getFacture);

module.exports = factureRouter;