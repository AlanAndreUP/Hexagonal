import { IZooRepository } from "../dominio/puertos/IZooRepository"; 
import { Zoo } from "../dominio/Zoo"; 

export class CreateZoo {
    constructor(private readonly repository: IZooRepository){}

    async run(name: string, id?: number, createdAt?: Date, updatedAt?: Date){
        const zoo = new Zoo(name, id, createdAt, updatedAt);
        return await this.repository.create(zoo);
    }
}
