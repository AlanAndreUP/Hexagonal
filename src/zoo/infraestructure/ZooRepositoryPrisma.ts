import { PrismaClient } from "@prisma/client";
import { IZooRepository } from "../interfaces/puertos/IZooRepository";
import { Zoo } from "../dominio/Zoo";
import { Animals } from "../../animals/dominio/animals"; 

export class ZooRepositoryPrisma implements IZooRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(zoo: Zoo): Promise<Zoo> {
        const zooSaved = await this.prisma.zoo.create({
            data: {
                name: zoo.name,

            }
        });

        return new Zoo(
            zooSaved.name,
            zooSaved.id,
            zooSaved.createdAt,
            zooSaved.updatedAt
        );
    }



}

