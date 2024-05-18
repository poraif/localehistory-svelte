import axios from "axios";
import { c as currentSession } from "../../../../chunks/stores.js";
import { g as get_store_value } from "../../../../chunks/utils.js";
const localeHistoryService = {
  baseUrl: "https://localehistory-hapi-7eb22fa00a2d.herokuapp.com",
  async signup(user) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users`, user);
      return response.data.success === true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        const session = {
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
  async getUser(user) {
    const res = await axios.get(`${this.baseUrl}/api/users/${user._id}`);
    return res.data;
  },
  async getAllUsers() {
    try {
      const res = await axios.get(`${this.baseUrl}/api/users`);
      return res.data;
    } catch (error) {
      return [];
    }
  },
  async deleteAllUsers() {
    const res = await axios.delete(`${this.baseUrl}/api/users`);
    return res.data;
  },
  async getAllPlacemarks(session) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const res = await axios.get(`${this.baseUrl}/api/placemarks`);
      return res.data;
    } catch (error) {
      return [];
    }
  },
  async createPlacemark(placemark, session) {
    try {
      axios.defaults.headers.common["Authorization"] = session.token;
      const response = await axios.post(`${this.baseUrl}/api/users/${session._id}/placemarks`, placemark);
      console.log(session.token);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  },
  async deleteAllPlacemarks() {
    const res = await axios.delete(`${this.baseUrl}/api/placemarks`);
    return res.data;
  },
  async getPlacemark(id, session) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
    const res = await axios.get(`${this.baseUrl}/api/placemarks/${id}`);
    return res.data;
  },
  async deleteImage(id, session) {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${session.token}`;
      const res = await axios.delete(`${this.baseUrl}/api/placemarks/${id}/image`);
      return res.status === 204;
    } catch (error) {
      console.error("Error deleting image:", error);
      return false;
    }
  }
};
const load = async ({ params }) => {
  const placemark = await localeHistoryService.getPlacemark(encodeURI(params.id), get_store_value(currentSession));
  return {
    placemark
  };
};
export {
  load
};
