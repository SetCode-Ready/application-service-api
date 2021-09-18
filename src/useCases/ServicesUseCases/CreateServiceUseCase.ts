import { inject, injectable } from "tsyringe";
import { ServiceRequest } from "../../entities/dto/ServiceRequest";
import { Service } from "../../entities/Service";
import { ServiceRepository } from "../../repositories/ServiceRepository";

@injectable()
export class CreateServiceUseCase {
    constructor(@inject("ServiceRepositoryImpl") private servicesRepository: ServiceRepository) {};

    async execute(data: ServiceRequest) {
        const service = new Service(data);

        await this.servicesRepository.save(service);
    }
}