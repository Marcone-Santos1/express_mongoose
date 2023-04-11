import { Router } from 'express'
import Fruit from "./FruitsModel.js";

const router = Router();

router.get("/", async (req, res) => {
    const allFruits = await Fruit.find();
    res.send({ "Fruit": allFruits })
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const fruit = await Fruit.findById({ _id: id });

    if (fruit === null) {
        return res.status(404).json({ "Error": "Fruit not exist" });
    }

    return res.status(200).json(fruit);
})

router.post("/create", async (req, res) => {
    const name = req.body.name

    if (name === undefined || name === "" || name === null) {
        return res.send({ "Error": "Name is required" });
    }

    const newFruit = new Fruit({ "name": name });
    const insertedFruit = await newFruit.save();
    return res.status(201).json(insertedFruit);
})

router.delete("/:id/delete", async (req, res) => {

    const id = req.params.id;
    const fruit = await Fruit.findByIdAndDelete({ _id: id });

    if (fruit === null) {
        return res.status(404).json({ "Error": "Fruit not exist" });
    }
    return res.status(200).json(fruit);

})

router.patch("/:id/update", async (req, res) => {

    const id = req.params.id;
    const name = req.body.name;
    const fruit = await Fruit.findByIdAndUpdate({ _id: id }, {name: name}, { returnOriginal: false });

    if (fruit === null) {
        return res.status(404).json({ "Error": "Fruit not exist" });
    }
    return res.status(200).json(fruit);

})

export default router;