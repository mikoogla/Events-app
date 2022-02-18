export class Event  {
    public date: string;
    public time: string;
    public title: string;
    public description: string;

    constructor(date: string, time: string, title: string, description: string) {
        this.date = date;
        this.time = time;
        this.title = title;
        this.description = description;
    }
}

