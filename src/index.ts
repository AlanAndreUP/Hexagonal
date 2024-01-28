import express from 'express'
import AnimalsRouter from './animals/infraestructure/AnimalRoutes'
import ZooRouter from './zoo/infraestructure/ZooRoutes'
const app = express();



const port = process.env.PORT || 4000
app.use(express.json())

app.use('/api/animals', AnimalsRouter)
app.use('/api/Zoo', ZooRouter)

app.listen(port, () => {
    console.log('Server Servido en la puerta ' + port)
})
