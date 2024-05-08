export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    }

export interface Street {
    id: number;
    name: string;
    user: User;
}

export interface Placemark {
    id: number;
    title: string;
    description: string;
    category: string;
    year: number;
    lat: number;
    lng: number;
    user: User;
    street: Street;
    }
