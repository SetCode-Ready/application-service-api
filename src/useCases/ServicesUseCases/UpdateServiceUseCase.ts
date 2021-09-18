import { inject, injectable } from "tsyringe";
import { ServiceRequest } from "../../entities/dto/ServiceRequest";
import { Service } from "../../entities/Service";
import { ServiceRepository } from "../../repositories/ServiceRepository";

@injectable()
export class UpdateServiceUseCase {
    constructor(@inject("ServiceRepositoryImpl") private servicesRepository: ServiceRepository) {};

    async execute(id: string, data: ServiceRequest) {
        const service = new Service(data);

        const services = await this.servicesRepository.updateById(id, service);

        return services;
    }
}