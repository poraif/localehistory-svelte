export interface User {
    _id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    admin?: boolean;
    }

export interface Session {
    name: string;
    _id: string;
    token: string;
    }

export interface Street {
    _id?: number;
    name: string;
    userid?: User | string;
}

export interface Placemark {
    _id?: number;
    title: string;
    description: string;
    category: string;
    year: number;
    latitude: number;
    longitude: number;
    street?: Street;
    }
