export interface User {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    admin?: boolean;
    }

export interface Session {
    email: string;
    _id: string;
    token: string;
    }

export interface Street {
    _id?: string;
    name: string;
    userid?: User | string;
    placemarks?: Placemark[];
}

export interface Placemark {
    _id?: string;
    title: string;
    description: string;
    category: string;
    year: number;
    latitude: number;
    longitude: number;
    street?: Street;
    }

export interface DataSet {
    labels: string[];
    datasets: [{ values: number[] }];
    }