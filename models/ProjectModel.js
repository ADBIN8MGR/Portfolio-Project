import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    githubUrl: {
      type: String,
    },
    liveUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
