export interface ServiceRequest {
    title: string;
    description: string;
    budget: number;
    limitDate: Date;
    status?: string;
    comments?: string; 
}