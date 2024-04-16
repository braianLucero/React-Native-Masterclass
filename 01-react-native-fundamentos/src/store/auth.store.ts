import { create } from "zustand";

interface AuthState {
  status: "authenticated " | "unauthenticated" | "cheking";
  token?: string;
  user?: {
    name: string;
    email: string;
  };
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: "cheking",
  token: undefined,
  user: undefined,
}));
