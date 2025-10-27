import { api } from "../axios";
import { SignupProps } from "../Contexts/AuthContext";

export async function signup({ email, name, password }: SignupProps) {
  const response = await api.post("/auth/signup", {
    email,
    name,
    password
  });
  return response.data;
}