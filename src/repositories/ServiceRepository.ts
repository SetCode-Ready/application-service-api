import { ServiceResponse } from "../entities/dto/ServiceResponse";
import { Service } from "../entities/Service";

export interface ServiceRepository {
    findAll(): Promise<ServiceResponse[]>;
    findById(id: string): Promise<ServiceResponse>;
    save(service: Service): Promise<void>;
    updateById(id: string, service: Service): Promise<void>;
}