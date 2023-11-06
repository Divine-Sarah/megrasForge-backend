import mongoose from "mongoose";

export const Db_connection = () =>{
    try{
        mongoose.set('strictQuery', false);
        console.log(process.env.DB_DEV_URL)
        mongoose.connect(process.env.DB_DEV_URL,{});
        mongoose.connection.on("error", err => {
            console.log("err", err)
        })
        mongoose.connection.on("connected", (err, res) => {
            console.log("Connection Establish")
        })
    } catch (error) {
      throw new Error(error)
    }
}