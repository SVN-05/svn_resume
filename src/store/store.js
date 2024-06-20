import { colors } from "@/utils/constants/constants";
import { create } from "zustand";

const useAppStore = create((set) => ({
  isDarkMode: false,
  appBg: colors.white,
  textcolor: colors.black,
  titlecolor: colors.grey1,
  iconcolor: colors.primary,
  //   Action Functions
  changeAppTheme: () =>
    set((state) => ({
      isDarkMode: !state.isDarkMode,
      appBg: state.isDarkMode ? colors.white : colors.grey4,
      textcolor: state.isDarkMode ? colors.black : colors.white,
      titlecolor: state.isDarkMode ? colors.grey1 : colors.white,
      iconcolor: state.isDarkMode ? colors.primary : colors.blue3,
    })),
  applyDarkTheme: () =>
    set((state) => ({
      isDarkMode: true,
      appBg: colors.grey4,
      textcolor: colors.white,
      titlecolor: colors.white,
      iconcolor: colors.blue3,
    })),
  applyLightTheme: () =>
    set((state) => ({
      isDarkMode: false,
      appBg: colors.white,
      textcolor: colors.black,
      titlecolor: colors.grey1,
      iconcolor: colors.primary,
    })),
}));

export default useAppStore;
