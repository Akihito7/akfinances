import { api } from "../axios";
import { SignlnProps } from "../Contexts/AuthContext";

export async function signln({ email, password }: SignlnProps) {
  const { data } = await api.post("/auth/signln", {
    email,
    password,
  });
  return data;
}
