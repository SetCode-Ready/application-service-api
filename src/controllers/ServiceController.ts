import { Request, Response } from "express"
import { container, injectable } from "tsyringe";
import { CreateServiceUseCase } from "../useCases/ServicesUseCases/CreateServiceUseCase";
import { GetServicesUseCase } from "../useCases/ServicesUseCases/GetServicesUseCase";

@injectable()
export class ServiceController {
    private createServiceUseCase = container.resolve(CreateServiceUseCase);
    private getServicesUseCase = container.resolve(GetServicesUseCase);

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
            creationDate,
            limitDate,
            status,
            comments,
        } = request.body;

        try {
            await this.createServiceUseCase.execute({
                title,
                description,
                budget,
                creationDate,
                limitDate,
                status,
                comments,
            });

            return response.status(201).json({ message: 'Service created!'});
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error on creating service.' });
        }
    }
}