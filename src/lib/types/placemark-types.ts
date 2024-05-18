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

// export interface Street {
//     _id?: string;
//     name: string;
//     userid?: User | string;
//     placemarks?: Placemark[];
// }

export interface Placemark {
    _id?: string;
    title: string;
    description: string;
    category: string;
    year: number;
    lat: number;
    lng: number;
    userid?: string;
    img?: string;
    }

export interface DataSet {
    labels: string[];
    datasets: [{ values: number[] }];
    }



// export interface Data {
//     labels: string[];
//     datasets: [{ label: string; data: number[]; backgroundColor: string; borderColor: string; borderWidth: number }];
//     }
