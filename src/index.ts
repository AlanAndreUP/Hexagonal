import express from 'express'
import AnimalsRouter from './animals/interfaces/controllers/AnimalController'
import ZooRouter from './zoo/interfaces/controllers/ZooController.'
const app = express()



const port = process.env.PORT || 4000
app.use(express.json())

app.use('/api/animals', AnimalsRouter)
app.use('/api/Zoo', ZooRouter)

app.listen(port, () => {
    console.log('running on port ' + port)
})
