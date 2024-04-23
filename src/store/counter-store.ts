import {create} from 'zustand';
export interface Counter {
  count: number;

  increment: (value: number) => void;
}

export const userCountStore = create<Counter>()((set, get) => ({
  count: 0,

  increment: (value: number) => {
    console.log(get);
    set({value});
  },
}));
