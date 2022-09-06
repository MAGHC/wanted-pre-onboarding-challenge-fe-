import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const AuthState = atom({
  key: "AuthState",
  default: { isLogin: false },
  effects_UNSTABLE: [persistAtom],
});
