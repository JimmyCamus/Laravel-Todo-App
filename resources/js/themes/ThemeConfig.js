import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  text: "#363537",
  toggleBorder: "#fff",
  background: "#363537",
  primary: "#6200ee",
  secondary: "#03dac5",
  error: "#b00020",
  onPrimary: "#ffffff",
  onSecondary: "#000000",
  onError: "#ffffff",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
