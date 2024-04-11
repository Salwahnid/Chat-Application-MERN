import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;  
    
    let conversation = await Conversation.findOne({
        participants: {$all: [senderId, receiverId]},
    })

    //s'il parlent pour la premiere fois 
    if(!conversation){
        conversation = await Conversation.create({
            participants: [senderId, receiverId],
        })
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message,
    })

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }

    //SOCKER IO FUNCTIONALITY WILL GO HERE

    //await conversation.save();
    //await newMessage.save();

    //tthose will run in parallele
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);

} catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({error : "Internal Server Error"});

}};


export const getMessage = async (req, res) => {
    try {
        const {id : userToChartId} =req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChartId]},
        }).populate("messages");
        //populate give the content instead the id of messages in database

        if(!conversation){
            return res.status(200).json([])
        };

        const messages = conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({error : "Internal Server Error"});
    
    }
}
