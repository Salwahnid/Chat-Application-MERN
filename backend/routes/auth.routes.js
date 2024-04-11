//Ce code est écrit en JavaScript et utilise le framework Express.js pour créer des routes dans une application web.
//le fichier agit comme un middleware car il définit des routes et des fonctions de contrôleur spécifiques, puis exporte le routeur pour être monté dans l'application principale en tant que middleware.

import express from "express";

import { signup , login , logout } from '../controllers/auth.controller.js';

// crée un nouvel objet routeur
const router = express.Router();


//router.METHOD() pour appliquer le middleware à une méthode HTTP spécifique d'un groupe de routes.
router.post("/signup", signup);

router.post("/login", login );

router.post("/logout",logout);



// exporte le routeur créé, de sorte qu'il puisse être utilisé dans d'autres fichiers de l'application.
export default router;