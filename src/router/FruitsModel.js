import mongoose from "mongoose";

const FruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});
const Fruit = mongoose.model("Fruit", FruitSchema);
export default Fruit;