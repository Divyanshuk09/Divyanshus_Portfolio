import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: [String],
    liveUrl: String,
    githubUrl: String,
    image: String,
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
