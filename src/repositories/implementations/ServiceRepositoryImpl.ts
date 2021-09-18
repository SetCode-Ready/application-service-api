import { injectable } from "tsyringe";
import { Service } from "../../entities/Service";
import { db } from "../../infra/persistence/firestore";
import { ServiceRepository } from "../ServiceRepository";

export class ServiceRepositoryImpl implements ServiceRepository {
    async findAll(): Promise<Service[]> {
        const servicesRef = db.collection('services');

        const servicesDoc = await servicesRef.get();

        const services = servicesDoc.docs.map(doc => ({ ...doc.data() }));

        return services as Service[];
    }

    async save(service: Service): Promise<void> {
        await db.collection('services').add(JSON.parse(JSON.stringify(service)));
    }

}