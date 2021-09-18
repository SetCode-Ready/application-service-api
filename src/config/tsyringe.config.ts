import { container } from 'tsyringe';
import { ServiceController } from '../controllers/ServiceController';
import { ServiceRepositoryImpl } from '../repositories/implementations/ServiceRepositoryImpl';
import { ServiceRepository } from '../repositories/ServiceRepository';

container.registerSingleton<ServiceRepository>('ServiceRepositoryImpl', ServiceRepositoryImpl);
container.register("ServiceController", { useClass: ServiceController });