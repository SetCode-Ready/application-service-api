import { Service } from "../entities/Service";

export interface ServiceRepository {
    findAll(): Promise<Service[]>;
    save(service: Service): Promise<void>;
}