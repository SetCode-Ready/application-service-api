export class ServiceResponse {
    id: string;
    docId: string;
    title: string;
    description: string;
    budget: number;
    limitDate: string;
    creationDate: string;
    status?: string;
    comments?: string;

    constructor(
        id: string,
        docId: string,
        title: string,
        description: string,
        budget: number,
        limitDate: string,
        creationDate: string,
        status?: string,
        comments?: string,
    ) {
        this.id = id;
        this.docId = docId;
        this.title = title;
        this.description = description;
        this.budget = budget;
        this.limitDate = limitDate;
        this.creationDate = creationDate;
        this.status = status;
        this.comments = comments;
    }
}