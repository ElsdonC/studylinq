require("dotenv").config()
const express = require('express')
const app = express()
const cors = require("cors")
const pool = require('./db')
const PORT = process.env.PORT

// Middleware
app.use(cors())
app.use(express.json())

//Routes

//Create a study session
app.post("/sessions", async (req,res)=>{
    try {
        const name = req.body.name
        const newSession = await pool.query(
            "INSERT INTO sessions (name) VALUES($1) RETURNING *",
            [name]
        )
        res.json(newSession.rows[0])
    } catch (error) {
        console.error(error)
    }
})

//Read all study sessions
app.get("/sessions", async (req, res) => {
    try {
        const sessions = await pool.query(
            "SELECT * FROM sessions"
        )
        res.json(sessions.rows)
    } catch (error) {
        console.error(error)
    }
})

//Read specific study session
app.get("/sessions/:id", async (req, res) => {
    try {
        const id = req.params.id
        const session = await pool.query(
            "SELECT * FROM sessions WHERE id = $1",
            [id]
        )
        res.json(session.rows[0])
    } catch (error) {
        console.error(error)
    }
})

//Edit specific study session
app.put("/sessions/:id", async (req, res) => {
    try {
        const id = req.params.id
        const name = req.body.name
        await pool.query(
            "UPDATE sessions SET name = $1 WHERE id = $2",
            [name, id]
        )
        res.json("Study session was updated!")
    } catch (error) {
        console.error(error)
    }
})

//Delete specific study session
app.delete("/sessions/:id", async (req, res) => {
    try {
        const id = req.params.id
        await pool.query(
            "DELETE FROM sessions WHERE id = $1",
            [id]
        )
        res.json("Study session was deleted")
    } catch (error) {
        console.error(error)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})