import multer from 'multer';
import path from 'path';

var storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb){
    let ext = path.extname(file.originalname)
    cb(null, Date.now() + ext)
  }
})


var upload = multer({
   storage: storage,
  fileFilter: function(req, file, callback){
    if(
      file.mimetype == "video/mp4" ||
      file.mimetype == "video/MOV"
    ){
      callback(null, true)
    }else{
      console.log('only mp4 & MOV is supported')
      callback(null, false)
    }
  },
  limits:{
    fileSize: 1024 * 1024 * 2.7,
  }
})

export default upload

// import { VidoeCollection } from '../db/schema/video.js'
// app.post('/upload', upload.single('video'), async (req, res) => {
//   const { title, description } = req.body;
//   const videoUrl = req.file.path; // Assuming the uploaded video file path is stored in req.file.path

//   try {
//     const newVideo = new VidoeCollection({ title, description, videoUrl });
//     await newVideo.save();
//     res.status(201).json({ message: 'Video uploaded and saved successfully' });
//   } catch (error) {
//     console.error('Error saving video:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



