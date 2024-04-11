//importe le module Express
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";

//Cela crée une instance de l'application Express. Toutes les fonctionnalités de l'application, telles que la définition des routes et des middlewares, sont associées à cet objet app.
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

//pour pouvoir acceder au contenu de req.dody
//ce sont des middleware
app.use(express.json());
app.use(cookieParser());

//app.use() pour appliquer le middleware à toutes les routes.
// toute requête HTTP effectuée sur des routes commençant par "/api/auth" passera par authRoutes.
app.use ("/api/auth",authRoutes);
app.use ("/api/messages",messageRoutes);
app.use ("/api/users", userRoutes);


// appliquer le middleware uniquement à une méthode HTTP spécifique, la c'est get
//app.get("/", (req, res) => {
    //root route http://localhost:5000/
//    res.send("Hello world !!!");
//});






//Cela démarre le serveur en écoutant les connexions sur le port 5000. Lorsque le serveur démarre avec succès, il affiche un message dans la console indiquant que le serveur est en cours d'exécution.
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});


