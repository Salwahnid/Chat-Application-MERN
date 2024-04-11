import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn : '15d'
    } )

    res.cookie("jwt",token,{
        maxAge : 15 * 24*60*60*1000, //en msecond
        httpOnly: true,
        sameSite: "strict",
        secure : process.env.NODE_ENV !== "development" // vous garantissez que le cookie JWT est envoyé uniquement sur des connexions HTTPS sécurisées dans un environnement de production
    });
};

export default generateTokenAndSetCookie;


