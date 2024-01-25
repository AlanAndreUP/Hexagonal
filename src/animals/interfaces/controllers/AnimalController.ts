import { Router } from 'express'
import { CreateAnimals } from '../../aplicacion/createAnimals'
import { UpdateAnimals } from '../../aplicacion/updateAnimals'
import { AnimalRepositoryPrisma } from '../../infraestructure/AnimalRepositoryPrisma'
import { FindAnimal } from '../../aplicacion/findAnimal'
import { FindAllAnimals } from '../../aplicacion/findAllAnimals'
import { DeleteAnimals } from '../../aplicacion/deleteAnimals'

const AnimalRouter = Router()
const productRepository = new AnimalRepositoryPrisma()

const createAnimal = new CreateAnimals(productRepository); 
const updateAnimal = new UpdateAnimals(productRepository); 
const findAnimal = new FindAnimal(productRepository); 
const findAllAnimals = new FindAllAnimals(productRepository); 
const deleteAnimal = new DeleteAnimals(productRepository); 
AnimalRouter.post('/create', async( req, res) => {
    const { name, weight, age, type } = req.body;
    const product = await createAnimal.run(name, weight, age, type)
    res.status(201).json({product})
})

AnimalRouter.put('/update/:id', async( req, res) => {
    const {name, weight, age, type} = req.body;
    const {id} = req.params;
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
        return res.status(400).send('El ID proporcionado no es válido.');
    }
    const product = await updateAnimal.run(numericId,name,weight, age, type)
    res.status(201).json({product})
})

AnimalRouter.get('/find/:id', async(req, res) => {
    const { id } = req.params;
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
        return res.status(400).send('El ID proporcionado no es válido.');
    }
    const animal = await findAnimal.run(numericId)
    res.status(200).json({animal})
})

AnimalRouter.get('/find', async(_, res) => {
    const animals = await findAllAnimals.run()
    res.status(200).json({animals})
})

AnimalRouter.delete('/delete/:id', async(req, res) => {
    const { id } = req.params;
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
        return res.status(400).send('El ID proporcionado no es válido.');
    }
    await deleteAnimal.run(numericId)
    res.status(200).json({message: 'Product deleted', ProductId: id})
})

export default AnimalRouter