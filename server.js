const express = require("express");
const router = require("./src/routes");
const app = express();
require("dotenv").config();

const host = process.env.APP_HOST;
const port = process.env.APP_PORT || 4000;
app.use(express.json());
app.get("/", async(req,res) => {
    res.status(200).send({
        statusCode:200,
        message:"Hello Tokoku"
    })
})

app.use("/api/v1", router)
app.listen(port, () => console.log(`Running on ${host}:${port}`))