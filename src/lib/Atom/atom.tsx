import { atom } from "recoil";

interface AuthState {
  isLogin: boolean;
  token: string;
}

export const AuthState = atom<AuthState>({
  key: "AuthState",
  default: { isLogin: false, token: "" },
});
