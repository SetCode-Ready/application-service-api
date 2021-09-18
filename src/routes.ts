import { Request, Response, Router } from 'express';
import { ServiceController } from './controllers/ServiceController';
import { container } from 'tsyringe';

const router = Router();

const serviceController = container.resolve(ServiceController);

router.get('/service', (request: Request, response: Response) => {
    return serviceController.findAll(request, response);
});

router.post('/service', (request: Request, response: Response) => {
    return serviceController.create(request, response);
});

router.put('/service/:id', (request: Request, response: Response) => {
    return serviceController.updateById(request, response);
});

export { router };