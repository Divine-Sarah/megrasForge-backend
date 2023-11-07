
import {Recipe }from "../db/schema/recipe.js"
const store1 =(req, res, next) => {
  let recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
  })
  if(req.file){
    recipe.thumbnail = req.file.path
  }
  recipe.save()
  .then(response =>{
    res.json({
      message: "Image saved successfully"
    })
  }).catch(error =>{
    res.json({
      message: "Error saving image"
    })
  })
}
export default store1