import express from 'express';
import Project from '../models/project.model.js';
import upload from '../configs/multer.js';
import cloudinary from '../configs/cloudinary.js';

const router = express.Router();

router.get("/", async (req, res) => {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
})

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, techStack, liveUrl, githubUrl } = req.body;

    let imageUrl = "";
    if (req.file) {
      // ✅ THIS LINE IS FAILING: cloudinary.uploader.upload is undefined
      const result = await cloudinary.uploader.upload(req.file.path); // FIX: this works if cloudinary config is correct
      imageUrl = result.secure_url;
    }

    const newProject = new Project({
      title,
      description,
      techStack,
      liveUrl,
      githubUrl,
      image: imageUrl,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
