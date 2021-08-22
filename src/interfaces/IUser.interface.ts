import {UserRoles} from "../enums/roles.enum";

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    roles: UserRoles;
};