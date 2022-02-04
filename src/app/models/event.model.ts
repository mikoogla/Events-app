export class Event {
    public date: Date;
    public title: string;
    public description: string;

    constructor(date: Date, title: string, description: string) {
        this.date = date;
        this.title = title;
        this.description = description;
    }
}

