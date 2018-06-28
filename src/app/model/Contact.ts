export class Contact{
    id: number;
    firstName : string;
    lastName : string;
    email : string;
    phoneNo : number;
    status : boolean;

    constructor(firstName? : string, lastName? : string, email? : string, phoneNo? : number, status? : boolean, id? : number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNo = phoneNo;
        this.status = status;
    }
}
