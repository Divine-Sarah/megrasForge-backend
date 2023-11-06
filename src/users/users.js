import { UsersCollection } from "../db/schema/collection.js";

export class Users{
    static async getuser(req,res){
        try{
            const allUsers = await UsersCollection.find({});
            
            if(!allUsers){
                return res.status(500).send({message: "Error fetcing users"}) 
        }
        res.status(200).json(allUsers);
        return
    } catch(error) {
        return res.status(500).send({ error: error})
    }
        };
}