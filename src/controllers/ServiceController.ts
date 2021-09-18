import { Request, Response } from "express"
import { container, injectable } from "tsyringe";
import { CreateServiceUseCase } from "../useCases/ServicesUseCases/CreateServiceUseCase";
import { GetServicesUseCase } from "../useCases/ServicesUseCases/GetServicesUseCase";
import { UpdateServiceUseCase } from "../useCases/ServicesUseCases/UpdateServiceUseCase";

@injectable()
export class ServiceController {
    private createServiceUseCase = container.resolve(CreateServiceUseCase);
    private getServicesUseCase = container.resolve(GetServicesUseCase);
    private updateServiceUseCase = container.resolve(UpdateServiceUseCase);

    async findAll(request: Request, response: Response): Promise<Response> {
        try {
            const services = await this.getServicesUseCase.execute();

            return response.status(200).json({ services });
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error on get services.' });
        }
    }
    
    async create(request: Request, response: Response): Promise<Response> {
        const {
            title,
            description,
            budget,
            limitDate,
            status,
            comments,
        } = request.body;

        try {
            await this.createServiceUseCase.execute({
                title,
                description,
                budget,
                limitDate,
                status,
                comments,
            });

            return response.status(201).json({ message: 'Service created!'});
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error on creating service.' });
        }
    }

    async updateById(request: Request, response: Response): Promise<Response> {
        const {
            title,
            description,
            budget,
            creationDate,
            limitDate,
            status,
            comments,
        } = request.body;

        const { id } = request.params;

        try {
            await this.updateServiceUseCase.execute(id, {
                title,
                description,
                budget,
                limitDate,
                status,
                comments,
            });

            return response.status(200).json({ message: 'Service updated!'});
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error on updating service.' });
        }
    }
}