import app from "./index.js";
import { config } from "dotenv"
import mongoose from "mongoose";

config()

const port = process.env.PORT || 7777
const mongo = process.env.MONGO

app.listen(port, () => {
    console.log(`Server is running in http://localhost:${port}`)
    mongoose.connect(mongo).then(() => console.log('Banco connectado com sucesso')).catch(e => console.log(e));
})
