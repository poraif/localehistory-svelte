import axios from "axios";
import type { Session, User, Placemark } from "$lib/types/placemark-types";

export const localeHistoryService = {
    baseUrl: "http://localhost:3000",

    async signup(user: User): Promise<boolean> {
      try {
        const response = await axios.post(`${this.baseUrl}/api/users`, user);
        return response.data.success === true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },

    async login(email: string, password: string): Promise<Session | null> {
      try {
        const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
        if (response.data.success) {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
          const session: Session = {
            email: response.data.email,
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

    async getAllPlacemarks(session: Session): Promise<Placemark[]> {
        try {
        axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
        const res = await axios.get(`${this.baseUrl}/api/placemarks`);
        return res.data;
        } catch (error) {
           return [];
      }
    },

    async uploadPlacemarkImage(id: string, imageFile: File, session: Session): Promise<boolean> {
      try {
        const formData = new FormData();
        formData.append('img', imageFile);
    
        axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
        const response = await axios.post(`${this.baseUrl}/api/placemarks/${id}/image`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        return response.status == 200;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    

    async createPlacemark(placemark: Placemark, session: Session) {
      try {
        axios.defaults.headers.common["Authorization"] = session.token;
        const response = await axios.post(`${this.baseUrl}/api/users/${session._id}/placemarks`, placemark);
        console.log(session.token);
        return response.status == 201;
      } catch (error) {
        return false;
      }
    },

    async deleteAllPlacemarks(): Promise<boolean> {
        const res = await axios.delete(`${this.baseUrl}/api/placemarks`);
        return res.data;
    },

    async getPlacemark(id: string, session: Session): Promise<Placemark> {
        axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
        const res = await axios.get(`${this.baseUrl}/api/placemarks/${id}`);
        return res.data;
    },

    async deletePlacemark(id: string) {
      const res = await axios.delete(`${this.baseUrl}/api/placemarks/${id}`);
      return res.data;
  },

        // async createStreet(street: Street, session: Session) {
    //   try {
    //     axios.defaults.headers.common["Authorization"] = session.token;
    //     const response = await axios.post(this.baseUrl + "/api/streets", street);
    //     console.log(session.token);
    //     return response.status == 201;
    //   } catch (error) {
    //     return false;
    //   }
    // },

    // async deleteAllStreets(): Promise<boolean> {
    //     const res = await axios.delete(`${this.baseUrl}/api/streets`);
    //     return res.data;
    // },

    // async deleteStreet(street: Street): Promise<boolean> {
    //     const res = await axios.delete(`${this.baseUrl}/api/streets/${street._id}`);
    //     return res.data;
    // },

    // async getAllStreets(session: Session): Promise<Street[]> {
    //     try {
    //     axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
    //     const res = await axios.get(`${this.baseUrl}/api/streets`);
    //     return res.data;
    //     } catch (error) {
    //        return [];
    //   }
    // },
  

    // async getStreet(id: string, session: Session): Promise<Street> {
    //     axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
    //     const res = await axios.get(`${this.baseUrl}/api/streets/${id}`);
    //     return res.data;
    // },

        // async getStreetPlacemarks(id: string): Promise<Placemark[]> {
    //     try {
    //     const res = await axios.get(`${this.baseUrl}/api/placemarks/${id}`);
    //     return res.data;
    //     } catch (error) {
    //        return [];
    //   }
    // },
  };