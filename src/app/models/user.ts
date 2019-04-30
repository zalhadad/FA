export class User {
    readonly id: string;
    name: string;
    password: string;
    role: UserRole;
}

export enum UserRole {
    ADMIN ='admin',
    USER = 'user',
}
