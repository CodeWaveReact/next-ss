"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const baseURL = "https://api.escuelajs.co/api/v1";

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    if (error.response?.status === 401) {
      // Clear the token cookie
      const cookieStore = await cookies();
      if (cookieStore.get("token")) {
        cookieStore.delete("token");
      }

      // Redirect to login page
      if (typeof window !== "undefined") {
        redirect("/login");
      }
    }
    return Promise.reject(error);
  }
);
