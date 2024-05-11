import axios from "axios";
import type { Session, User, Placemark, Street } from "$lib/types/placemark-types";

export const localeHistoryService = {
    baseUrl: "http://localhost:3000",

    async signup(user: User): Promise<boolean> {
      try {
        const response = await axios.post(`${this.baseUrl}/api/users`, user);
        return response.data.success === true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    async getUser(user: User): Promise<User | null> {
        const res = await axios.get(`${this.baseUrl}/api/users/${user._id}`);
        return res.data;
      },
    
    async getAllUsers(): Promise<User[]> {
        try {
        const res = await axios.get(`${this.baseUrl}/api/users`);
        return res.data;
        } catch (error) {
           return [];
      }
    },

    async deleteAllUsers(): Promise<boolean> {
        const res = await axios.delete(`${this.baseUrl}/api/users`);
        return res.data;
    },

    async createStreet(street: Street, session: Session) {
      try {
        axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
        const response = await axios.post(this.baseUrl + "/api/streets/", street);
        return response.status >= 200 && response.status < 300;
      } catch (error) {
        return false;
      }
    },

    async deleteAllStreets(): Promise<boolean> {
        const res = await axios.delete(`${this.baseUrl}/api/streets`);
        return res.data;
    },

    async deleteStreet(street: Street): Promise<boolean> {
        const res = await axios.delete(`${this.baseUrl}/api/streets/${street._id}`);
        return res.data;
    },

    async getAllStreets(session: Session): Promise<Street[]> {
        try {
        axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
        const res = await axios.get(`${this.baseUrl}/api/streets`);
        return res.data;
        } catch (error) {
           return [];
      }
    },

    async getStreet(street: Street): Promise<Street | null> {
        const res = await axios.get(`${this.baseUrl}/api/streets/${street._id}`);
        return res.data;
    },

    async getAllPlacemarks(): Promise<Placemark[]> {
        try {
        const res = await axios.get(`${this.baseUrl}/api/placemarks`);
        return res.data;
        } catch (error) {
           return [];
      }
    },

    async createPlacemark(street:Street, placemark: Placemark): Promise<boolean> {
        const res = await axios.post(`${this.baseUrl}/api/streets/${street._id}/placemarks`, placemark);
        return res.data;
    },

    async deleteAllPlacemarks(): Promise<boolean> {
        const res = await axios.delete(`${this.baseUrl}/api/placemarks`);
        return res.data;
    },

    async getPlacemark(placemark: Placemark): Promise<Placemark | null> {
        const res = await axios.get(`${this.baseUrl}/api/placemarks/${placemark._id}`);
        return res.data;
    },

    async deletePlacemark(placemark: Placemark): Promise<boolean> {
        const res = await axios.delete(`${this.baseUrl}/api/placemarks/${placemark._id}`);
        return res.data;
    },
        
    async login(email: string, password: string): Promise<Session | null> {
      try {
        const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
        if (response.data.success) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
          const session: Session = {
            name: response.data.name,
            token: response.data.token,
            _id: response.data.id
          };
          return session;
        }
        return null;
      } catch (error) {
        console.log(error);
        return null;
      }
    },

  };