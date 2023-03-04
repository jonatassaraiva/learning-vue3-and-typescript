import { EventItem } from "@/types";
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async getEvents(): Promise<EventItem[]> {
    const response = await apiClient.get<EventItem[]>("/events");
    return response.data;
  },
  async getEvent(id: string): Promise<EventItem> {
    const response = await apiClient.get<EventItem>(`/events/${id}`);
    return response.data;
  },
};
