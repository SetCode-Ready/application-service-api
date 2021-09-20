import { Service } from "../../entities/Service";
import { db } from "../../infra/persistence/firestore";
import { ServiceRepository } from "../ServiceRepository";

export class ServiceRepositoryImpl implements ServiceRepository {

    async findAll(): Promise<Service[]> {
        const servicesRef = db.collection('services');

        const servicesDoc = await servicesRef.orderBy('creationDate', 'desc').get();

        const services = servicesDoc.docs.map(doc => ({ ...doc.data() })).sort();

        return services as Service[];
    }

    async findById(id: string): Promise<Service> {
        const servicesRef = db.collection('services');

        const servicesDoc = await servicesRef.get();

        const existingService = servicesDoc.docs.find(doc => doc.id === id);

        if (existingService !== null) {
            return existingService.data() as Service;
        }

        return null;
    }

    async save(service: Service): Promise<void> {
        const newService = Service.parseToSave(service);

        await db.collection('services').doc(service.id).set(newService);
    }

    async updateById(id: string, service: Service): Promise<void> {

        const existingService = await this.findById(id);

        if (existingService !== null) {
            const newService = Service.parseToSave(service);

            await db.collection('services').doc(existingService.id).set(newService);
        }

    }
}