import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Home = mongoose.model("Home", HomeSchema);

export default Home;
