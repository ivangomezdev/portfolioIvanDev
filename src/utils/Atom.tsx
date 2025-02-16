import { atom } from "recoil";

export const paginationState = atom({
    key: 'page',
    default: 0,
  });