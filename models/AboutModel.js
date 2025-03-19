import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  resumeUrl: {
    type: String,
  },
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
  },
});

module.exports = mongoose.model("About", AboutSchema);
