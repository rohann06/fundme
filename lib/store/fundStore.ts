import { create } from "zustand";

type State = {
  isFunded: boolean;
};
type Actions = {
  setIsFunded: (value: boolean) => void;
};

export const useFundStore = create<State & Actions>((set) => ({
  isFunded:false,
  setIsFunded:value => set({isFunded:value})
}));
