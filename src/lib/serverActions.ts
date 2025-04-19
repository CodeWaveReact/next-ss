"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { axiosInstance } from "./axiosInstance";

// Types
type LoginState = {
  success?: boolean;
  error?: string;
};

// Login Action
export async function login(prevState: LoginState | null, data: { email: string; password: string }): Promise<LoginState> {
  try {
    const { email, password } = data;
    const response = await axiosInstance.post("/auth/login", { email, password });

    if (response.data.access_token) {
      const cookieStore = await cookies();
      cookieStore.set("token", response.data.access_token, {
        path: "/",
        secure: true,
        sameSite: "strict",
      });
      return { success: true };
    }
    return { error: "Login failed" };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        error: error.response?.data?.message || "An error occurred during login",
      };
    }
    return { error: "An unexpected error occurred" };
  }
}

// Get Profile
export async function getProfile() {
  try {
    const response = await axiosInstance.get("/auth/profile");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}

// Get Products
export async function getProducts() {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
}
