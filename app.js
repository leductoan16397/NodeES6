import express from 'express'
import dotenv from 'dotenv'


dotenv.config()


const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({ message: "hello aasdad" })
})

app.listen(PORT, (error) => {
    if (error) {
        throw error
    } else {
        console.log(`Running on port: ${PORT}`);
    }
})

