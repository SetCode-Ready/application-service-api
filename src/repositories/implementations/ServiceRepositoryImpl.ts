import { ServiceResponse } from "../../entities/dto/ServiceResponse";
import { Service } from "../../entities/Service";
import { db } from "../../infra/persistence/firestore";
import { ServiceRepository } from "../ServiceRepository";

interface ServiceDocResponse {
    data: Service;
    docId: string;
}

export class ServiceRepositoryImpl implements ServiceRepository {

    async findAll(): Promise<ServiceResponse[]> {
        const servicesRef = db.collection('services');

        const servicesDoc = await servicesRef.orderBy('creationDate', 'desc').get();

        const services = servicesDoc.docs.map(doc => ({ data: doc.data(), docId: doc.id })) as ServiceDocResponse[];

        const serviceResponseList = services.map(service => {
            return new ServiceResponse(
                service.data.id,
                service.docId,
                service.data.title,
                service.data.description,
                service.data.budget,
                service.data.limitDate,
                service.data.creationDate,
                service.data.status,
                service.data.comments
            );
        });

        return serviceResponseList as ServiceResponse[];
    }

    async findById(id: string): Promise<ServiceResponse> {
        const servicesRef = db.collection('services');

        const servicesDoc = await servicesRef.get();

        const existingService = servicesDoc.docs.find(doc => doc.id === id);

        if (existingService !== null) {
            const service = new ServiceResponse(
                existingService.data().id,
                existingService.id,
                existingService.data().title,
                existingService.data().description,
                existingService.data().budget,
                existingService.data().limitDate,
                existingService.data().creationDate,
                existingService.data().status,
                existingService.data().comments,
            )

            return service;
        }

        return null;
    }

    async save(service: Service): Promise<void> {
        const newService = JSON.parse(JSON.stringify(service));

        await db.collection('services').doc(service.id).set(newService);
    }

    async updateById(id: string, service: Service): Promise<void> {

        const existingService = await this.findById(id);

        if (existingService !== null) {
            delete existingService.docId;
            delete existingService.id;

            const newService = JSON.parse(JSON.stringify(service));

            await db.collection('services').doc(id).set(newService);
        }

    }
}