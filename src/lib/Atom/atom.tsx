import { atom } from "recoil";

export const userInputValueState = atom({
  key: "userInputValueState",
  default: { id: "", pw: "" },
});
