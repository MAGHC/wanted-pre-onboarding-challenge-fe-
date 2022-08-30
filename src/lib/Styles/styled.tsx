import { DefaultTheme } from "styled-components";

export const styled: DefaultTheme = {
  colors: {
    primary: "e3f2fd",
    primaryLight: "ffffff",
    primaryDark: "b1bfca",
    secondary: "#fafafa",
    secondaryLight: "#ffffff",
    secondaryDark: "#c7c7c7",
    font: "#424242",
  },

  mixin: {
    center: () => {
      return `
            display:flex,
            justify-content:center, 
            align-items:center
        `;
    },
  },
};
