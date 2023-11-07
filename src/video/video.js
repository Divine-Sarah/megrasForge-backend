
import {Video }from "../db/schema/video.js"

const store =(req, res, next) => {
  let video = new Video({
    title: req.body.title,
    description: req.body.description,
  })
  if(req.file){
    video.videoUrl = req.file.path
  }
  video.save()
  .then(response =>{
    res.json({
      message: "Video saved successfully"
    })
  }).catch(error =>{
    res.json({
      message: "Error saving video"
    })
  })
}
export default store