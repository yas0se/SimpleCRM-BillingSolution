-- CreateTable
CREATE TABLE `approvisionnement` (
    `ID_Approvisionnement` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Entreprise` INTEGER NULL,
    `ID_Produit` INTEGER NULL,
    `ID_Fournisseur` INTEGER NULL,
    `Date` DATE NULL,
    `Quantite` INTEGER NULL,

    INDEX `ID_Entreprise`(`ID_Entreprise`),
    INDEX `ID_Fournisseur`(`ID_Fournisseur`),
    INDEX `ID_Produit`(`ID_Produit`),
    PRIMARY KEY (`ID_Approvisionnement`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client` (
    `ID_Client` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(255) NULL,
    `Prenom` VARCHAR(255) NULL,
    `Adresse` VARCHAR(255) NULL,
    `Ville` VARCHAR(255) NULL,
    `Numero_telephone` VARCHAR(20) NULL,
    `Email` VARCHAR(255) NULL,

    PRIMARY KEY (`ID_Client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entreprise` (
    `ID_Entreprise` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(255) NULL,
    `Siege_social` VARCHAR(255) NULL,
    `Date_creation` DATE NULL,
    `Identifiant_fiscal` VARCHAR(255) NULL,
    `Capital` DECIMAL(10, 2) NULL,
    `Nombre_employes` INTEGER NULL,
    `Ville` VARCHAR(255) NULL,
    `Responsable` VARCHAR(255) NULL,
    `Numero_telephone` VARCHAR(20) NULL,
    `Email` VARCHAR(255) NULL,

    PRIMARY KEY (`ID_Entreprise`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facture` (
    `ID_Facture` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Client` INTEGER NULL,
    `Date` DATE NULL,
    `Montant_total` DECIMAL(10, 2) NULL,

    INDEX `ID_Client`(`ID_Client`),
    PRIMARY KEY (`ID_Facture`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fournisseur` (
    `ID_Fournisseur` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(255) NULL,
    `Adresse` VARCHAR(255) NULL,
    `Ville` VARCHAR(255) NULL,
    `Numero_telephone` VARCHAR(20) NULL,
    `Email` VARCHAR(255) NULL,

    PRIMARY KEY (`ID_Fournisseur`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ligne_facture` (
    `ID_Ligne` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_Facture` INTEGER NULL,
    `ID_Produit` INTEGER NULL,
    `Quantite` INTEGER NULL,

    INDEX `ID_Facture`(`ID_Facture`),
    INDEX `ID_Produit`(`ID_Produit`),
    PRIMARY KEY (`ID_Ligne`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produit` (
    `ID_Produit` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom` VARCHAR(255) NULL,
    `Prix_achat` DECIMAL(10, 2) NULL,
    `Prix_vente` DECIMAL(10, 2) NULL,
    `Taux_marge` DECIMAL(5, 2) NULL,
    `Dimension` VARCHAR(50) NULL,
    `Taille` VARCHAR(50) NULL,

    PRIMARY KEY (`ID_Produit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `approvisionnement` ADD CONSTRAINT `approvisionnement_ibfk_1` FOREIGN KEY (`ID_Entreprise`) REFERENCES `entreprise`(`ID_Entreprise`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `approvisionnement` ADD CONSTRAINT `approvisionnement_ibfk_2` FOREIGN KEY (`ID_Produit`) REFERENCES `produit`(`ID_Produit`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `approvisionnement` ADD CONSTRAINT `approvisionnement_ibfk_3` FOREIGN KEY (`ID_Fournisseur`) REFERENCES `fournisseur`(`ID_Fournisseur`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `facture` ADD CONSTRAINT `facture_ibfk_1` FOREIGN KEY (`ID_Client`) REFERENCES `client`(`ID_Client`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ligne_facture` ADD CONSTRAINT `ligne_facture_ibfk_1` FOREIGN KEY (`ID_Facture`) REFERENCES `facture`(`ID_Facture`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `ligne_facture` ADD CONSTRAINT `ligne_facture_ibfk_2` FOREIGN KEY (`ID_Produit`) REFERENCES `produit`(`ID_Produit`) ON DELETE NO ACTION ON UPDATE NO ACTION;
