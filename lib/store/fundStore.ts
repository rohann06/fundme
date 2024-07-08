import { create } from "zustand";

type State = {
  isFunded: boolean;
};
type Actions = {
  setIsFunded: (value: boolean) => void;
};

export const useFundStore = create<State & Actions>((set) => ({
  isFunded: false,
  setIsFunded: (value) => {
    console.log("Setting isFunded to", value);
    set({ isFunded: value });
  },
}));
