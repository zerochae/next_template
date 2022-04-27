import { atom, selector } from "recoil";

export const pageNameState = atom({
  key: "pageNameState",
  default: "",
});

export const getNameSelector = selector({
  key: "getNameSelector",
  get: async () => {
    const res = await fetch("http://localhost:3000/api/hello");
    return res;
  },
});
