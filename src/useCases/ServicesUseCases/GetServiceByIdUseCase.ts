import { inject, injectable } from "tsyringe";
import { ServiceRepository } from "../../repositories/ServiceRepository";

@injectable()
export class GetServiceByIdUseCase {
    constructor(@inject("ServiceRepositoryImpl") private servicesRepository: ServiceRepository) {};

    async execute(id: string) {
        const services = await this.servicesRepository.findById(id);

        return services;
    }
}