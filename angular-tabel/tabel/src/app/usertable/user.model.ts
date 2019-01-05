
export interface User {
    userName: string;
    email: string;
    contactNumber: string;
    password: string;
    }

export interface LoginCredentials{
    email: string;
    password: string;
}
export interface RegCredentials {
    userName: string;
    email: string;
    contactNumber: string;
    password: string;
    }

export interface getAllUser{
    page: string;
    size: string;
    sortOrder: string;
    sortField: string;
    }