import { Event } from './event.model'

export class User {
    public login: string;
    public password: string;
    public name: string;
    public lastname: string;
    public road: string;
    public city: string;
    public zipcode: string;
    public hasConfirmedTicket: boolean = false;
    public hasGeneratedTicket: boolean = false;
    public selectedEvents: Event[] = [];

    constructor(login: string, password: string, name: string, lastname: string, road: string, city: string, zipcode: string) {
        this.login = login;
        this.password = password;
        this.name = name;
        this.lastname = lastname;
        this.road = road;
        this.city = city;
        this.zipcode = zipcode;
    }

    hasAllDataFilledOut() {
        return  !(this.city === "" || 
                this.lastname === "" || 
                this.login === "" || 
                this.name === "" || 
                this.password === "" || 
                this.road === "" || 
                this.zipcode === ""
        );
    }
}
