import { Service } from "../entities/Service";

export interface ServiceRepository {
    findAll(): Promise<Service[]>;
    findById(id: string): Promise<Service>;
    save(service: Service): Promise<void>;
    updateById(id: string, service: Service): Promise<void>;
}