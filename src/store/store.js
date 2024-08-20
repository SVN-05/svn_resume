import { colors } from "@/utils/constants/constants";
import { create } from "zustand";

const useAppStore = create((set) => ({
  isDarkMode: false,
  portfolioFilter: "All",
  //   Action Functions
  changeAppTheme: () =>
    set((state) => ({
      isDarkMode: !state.isDarkMode,
    })),
  applyDarkTheme: () =>
    set((state) => ({
      isDarkMode: true,
      iconcolor: colors.blue3,
    })),
  applyLightTheme: () =>
    set((state) => ({
      isDarkMode: false,
      iconcolor: colors.primary,
    })),
  setPortfolioFilter: (portfolioFilter) =>
    set(() => ({
      portfolioFilter: portfolioFilter,
    })),
}));

export default useAppStore;
