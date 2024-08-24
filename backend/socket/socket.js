import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId]
};


    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
            origin: ["http://localhost:3000"],
            methods: ["GET", "POST"],
        },
    });



	const userSocketMap = {}; // {userId: socketId}

	io.on("connection", (socket) => {
		try {
			console.log("a user connected", socket.id);
	
			const userId = socket.handshake.query.userId; // Déplacez la définition de la variable userId ici
	
			if (userId !== "undefined") {
				userSocketMap[userId] = socket.id;
			}
	
			io.emit("getOnlineUsers", Object.keys(userSocketMap));
	
			socket.on("disconnect", () => {
				console.log("user disconnected", socket.id);
				if (userId !== undefined) {
					delete userSocketMap[userId];
					io.emit("getOnlineUsers", Object.keys(userSocketMap));
				}
			});
		} catch (error) {
			console.error("An error occurred in connection handler:", error);
			// Gérer l'erreur en conséquence, par exemple, en envoyant un message d'erreur au client
		}
	});


export { app, io, server };
