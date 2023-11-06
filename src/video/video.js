import { VidoeCollection } from '../db/schema/video.js'
// app.post('/upload', upload.single('video'), async (req, res) => {
//   const { title, description } = req.body;
//   const videoUrl = req.file.path; // Assuming the uploaded video file path is stored in req.file.path

//   try {
//     const newVideo = new Video({ title, description, videoUrl });
//     await newVideo.save();
//     res.status(201).json({ message: 'Video uploaded and saved successfully' });
//   } catch (error) {
//     console.error('Error saving video:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  res.json({ message: 'File uploaded successfully', file: req.file });
});