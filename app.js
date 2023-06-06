import express from "express"
import {} from 'dotenv/config'

const app = express()
const router = express.Router()

app.use(express.static('public'))

router.route('/', (req, res) => {
    res.sendFile('index.html', {root:'public'})
})

app.use(router)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))