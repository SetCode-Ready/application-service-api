import { container, inject, injectable } from "tsyringe";
import { ServiceRepositoryImpl } from "../../repositories/implementations/ServiceRepositoryImpl";
import { ServiceRepository } from "../../repositories/ServiceRepository";

@injectable()
export class GetServicesUseCase {
    constructor(@inject("ServiceRepositoryImpl") private servicesRepository: ServiceRepository) {};

    async execute() {
        const services = await this.servicesRepository.findAll();

        return services;
    }
}