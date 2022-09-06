import { atom } from "recoil";

interface AuthStateI {
  isLogin: boolean;
}

export const AuthState = atom<AuthStateI>({
  key: "AuthState",
  default: { isLogin: false },
});
