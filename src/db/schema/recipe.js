import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title:{
         type: String,
    required: true,
    },
    ingredients:{
         type: String,
    required: true,
    },
    instructions:{
         type: String,
    required: true,
    },
    thumbnail:{
         type: String,
    required: true,
    }
})

export const Recipe = mongoose.model('Recipe', recipeSchema)