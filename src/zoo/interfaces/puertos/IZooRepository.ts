import { Zoo } from "../../dominio/Zoo";

export interface IZooRepository {
    create(user: Zoo): Promise<Zoo>;
}