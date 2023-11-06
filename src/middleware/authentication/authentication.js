import { UsersCollection } from "../../db/schema/collections.js";


export class Authentication {
    static async signup(req, res){
        const {fullname,email,username,password,confirmpassword,role} = req.body;
        // console.log(req.body)
        // return
    
        const existingUser = await UsersCollection.findOne({ email: email})
    
        if(existingUser) return res.status(400).send({message: "Existing User"});
         
        const user = await UsersCollection.create({ 
            fullname:fullname,
            email: email,
            username: username,
            password: password,
            confirmpassword: confirmpassword,
            role: role
        })
        if(!user) return res.status(500).send({ message: 'Error creating user'})
        res.status(200).send({ message: 'User created'})
    }



    static async login(req, res) {
        const {email, password, role}= req.body;

        if(!(email, password,role)){
            res.status(400).send('All input required');
        }

        const user = await UsersCollection.findOne({email})

        if(user) return res.status(200).send({message: 'Login Successful'});

        res.status(200).json(user);
    
        res.status(400).send("Invalid Credentials");
    }
       
}