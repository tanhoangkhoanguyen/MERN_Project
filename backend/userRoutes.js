const express = require("express")
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId
const bcrypt = require("bcrypt")

let userRoutes = express.Router()
const SALT_ROUNDS = 6

//#1 - Retrieve All
userRoutes.route("/users").get(async(request, response) => {
    let db = database.getDb()
    let data = await db.collection("users").find({}).toArray()
    if (data.length > 0) {
        response.json(data)
    } else {
        throw new Error("Data was not found")
    }
})

//#2 - Retrieve One
userRoutes.route("/users/:id").get(async(request, response) => {
    let db = database.getDb()
    let data = await db.collection("users").findOne({_id: new ObjectId(request.params.id)})
    if (Object.keys(data).length > 0) {
        response.json(data)
    } else {
        throw new Error("Data was not found")
    }
})

//#3 - Create one
userRoutes.route("/users").post(async(request, response) => {
    let db = await database.getDb()
    let mongoObject = {
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        joinDate: new Date(),
        posts: []
    }
    let data = await db.collection("users").insertOne(mongoObject)
    response.json(data) //doesnt neccessary
})

//#4 - Update one
userRoutes.route("/users/:id").put(async(request, response) => {
    let db = database.getDb()

    const takenEmail = db.collection("users").findOne({email: request.body.email})

    if (takenEmail) {
        response.json({message: "The email is taken"})
    } else {
        const hash = await brcypt(request.body.password, SALT_ROUNDS)

        let mongoObject = {
            $set: {
                name: request.body.name,
                email: request.body.email,
                password: request.body.password,
                joinDate: hash,
                posts: request.body.posts
            }
        }
        let data = await db.collection("users").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
        response.json(data)
    }
})

//#5 - Delete one
userRoutes.route("/users/:id").delete(async(request, response) => {
    let db = database.getDb()
    let data = await db.collection("users").deleteOne({_id: new ObjectId(request.params.id)})
    response.json(data)
})

module.exports = userRoutes