import { Router } from "express";
import { CreateZoo } from "../../aplication/CreateZoo";
import { ZooRepositoryPrisma } from "../../infraestructure/ZooRepositoryPrisma";

const ZooRouter = Router()
const repository = new ZooRepositoryPrisma()
const create = new CreateZoo(repository)

ZooRouter.post('/create', async(req, res) => {
    const { name, lastName } = req.body;
    const zoo = await create.run(name, lastName)
    res.status(201).json({zoo})
})


export default ZooRouter;
