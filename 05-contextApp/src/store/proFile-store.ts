// import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import {create} from 'zustand';
export interface ProfileState {
  name: string;
  email: string;

  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: 'john Doe ',
  email: 'jogn.doe@gmail.com',

  changeProfile: (name: string, email: string) => {
    console.log(get());
    set({name, email});
  },
}));
