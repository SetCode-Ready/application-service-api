import { ServiceStatusEnum } from "../enum/ServiceStatusEnum";

export interface ServiceRequest {
    title: string;
    description: string;
    budget: number;
    creationDate: string;
    limitDate: string;
    status: ServiceStatusEnum;
    comments: string; 
}