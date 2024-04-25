import {create} from 'zustand';

export interface Counter {
  count: number;

  incrementBy: (value: number) => void;
}

export const userCountStore = create<Counter>()((set, get) => ({
  count: 10,

  incrementBy: (value: number) => {
    set(state => ({count: state.count + value}));
  },
}));
