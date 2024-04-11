//Les fonctions de contrôleur sont des fonctions qui définissent le comportement d'une route spécifique de votre application Express.js.

import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

//ce code n'est pas un middleware
export const signup = async (req,res) => {
    try{
        // Cette ligne extrait les champs fullName, username, password, confirmPassword, et gender de l'objet req.body. Cela suppose que votre requête HTTP POST contient ces champs dans son corps, généralement envoyés via un formulaire HTML ou une requête JSON
        const { fullName,username,password,confirmPassword,gender } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match"});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({error:"Username already exists"});
        }

        //HACH PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic : gender === "male" ? boyProfilePic : girlProfilePic
        });


        //await pour attendre qu'une opération asynchrone se termine et retourne une valeur, avant d'executer le reste du code ,


        //201 cad created et tt passe bien 
        if(newUser){
            //generate Jwt token here
            generateTokenAndSetCookie(newUser._id,res);

            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName : newUser.fullName,
                username : newUser.username,
                profilePic : newUser.profilePic
            });
        }else {
            res.status(400).json({error : "Invalid user data" });
        }

    }catch (error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error : "Internal Server Error"});

    }
};

export const login = async (req,res) => {
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic
        });

    }catch(error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error : "Internal Server Error"});

    }
};

export const logout = (req,res) => {
    try{
        res.cookie("jwt","",{MaxAge : 0 })
        res.status(200).json({message: "Logged out successfully"});
    }catch(error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error : "Internal Server Error"});

    }
};

