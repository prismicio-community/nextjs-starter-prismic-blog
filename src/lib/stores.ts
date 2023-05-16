import { StateCreator } from "zustand";
import { create } from "zustand";

export interface ImageSlice {
  images: Record<string, string>;
  getImage: (key: string) => string;
  setImage: (key: string, value: string) => void;
}

export const createImageSlice: StateCreator<ImageSlice> = (set, get) => ({
  images: {},
  setImage: (key: string, value: string) =>
    set((state) => ({ images: { ...state.images, [key]: value } })),
  getImage: (key: string) => {
    return get().images[key];
  },
});

type StoreState = ImageSlice;

export const useImageStore = create<StoreState>()((...a) => ({
  ...createImageSlice(...a),
}));
