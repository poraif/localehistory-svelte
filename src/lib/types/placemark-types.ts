export interface User {
    _id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    }

export interface Session {
    name: string;
    _id: string;
    token: string;
    }

export interface Street {
    _id: number;
    name: string;
    img: string;
    user: User;
}

export interface Placemark {
    _id: number;
    title: string;
    description: string;
    category: string;
    year: number;
    lat: number;
    lng: number;
    street: Street;
    }
