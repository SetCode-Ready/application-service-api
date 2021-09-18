import { v4 as uuid } from "uuid";
import { ServiceStatusEnum } from "./enum/ServiceStatusEnum";

export class Service {
    id: string;
    title: string;
    description: string;
    budget: number;
    creationDate: string;
    limitDate: string;
    status: ServiceStatusEnum = ServiceStatusEnum.OPEN;
    comments: string;

    constructor(props: Omit<Service, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}

