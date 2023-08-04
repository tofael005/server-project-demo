require("dotenv").config()
const express = require("express")
const port = process.env.PORT || 5000
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vabrqqs.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });




















  run().catch(console.dir);



  app.get("/", (req, res) => {
      res.send("Project Name is running")
  })



  app.listen(port)