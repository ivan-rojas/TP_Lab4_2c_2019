export class User 
{
    public name: string;
    public lastname: string;
    public password: string;
    public email: string;
    public role: Role;

    constructor() 
    {
        this.name = "";
        this.lastname = "";
        this.password = "";
        this.email = "";
        this.role = Role.socio;
    }

    public static CreateUserWithParams(name: string, lastname: string,  email: string, password: string, role: Role): User
    {
        let user = new User();
        user.name = name
        user.lastname = lastname;
        user.password = password;
        user.email = email;
        user.role = role;
        return user;
    }
}

export enum Role
{
    socio = 'socio',
    mozo = 'mozo'
}
