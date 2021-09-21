import { v4 as uuid } from "uuid";
import { ServiceRequest } from "./dto/ServiceRequest";

export class Service {
    id: string;
    title: string;
    description: string;
    budget: number;
    creationDate: string;
    limitDate: string;
    status: string;
    comments: string;

    constructor(props: ServiceRequest) {
        if (!this.id) {
            this.id = uuid();
        }

        this.title = props.title;
        this.description = props.description;
        this.budget = props.budget;
        this.limitDate = props.limitDate;
        this.creationDate = new Date().toISOString();
        this.status = props.status || 'Open';
        this.comments = props.comments;
    }
}

