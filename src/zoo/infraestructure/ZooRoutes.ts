// ZooRoutes.ts
import { Router } from "express";
import { ZooController } from "./controllers/ZooController";
import { CreateZoo } from "../aplication/CreateZoo";
import { FindZoo } from "../aplication/FindZoo";
import { ZooRepositoryPrisma } from "./ZooRepositoryPrisma";

const zooRouter = Router();
const repository = new ZooRepositoryPrisma();
const createZoo = new CreateZoo(repository);
const findZoo = new FindZoo(repository);
const zooController = new ZooController(createZoo, findZoo);

zooRouter.post('/', (req, res) => zooController.create(req, res));
zooRouter.get('/find/:id', (req, res) => zooController.find(req, res));

export default zooRouter;
