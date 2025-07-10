import express from 'express';
import Project from '../models/project.model.js';
import upload from '../configs/multer.js';
import cloudinary from '../configs/cloudinary.js';

const router = express.Router();

router.get("/", async (req, res) => {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
})

router.post("/", upload.single("video"), async (req, res) => {
  try {
    console.log("req.file:", req.file)

    let videoUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "video",
        folder: "portfolio_projects",
      });
      console.log("cloudinary result:", result);
      videoUrl = result.secure_url;
    }

    const newProject = new Project({
      ...req.body,
      video: videoUrl,
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error("❌ Upload error:", err);
    res.status(500).json({ error: err.message });
  }
});


export default router;
