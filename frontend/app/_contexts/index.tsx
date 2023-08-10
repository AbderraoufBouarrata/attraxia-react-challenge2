import React from "react";
import ThemeContextProvider from "./ThemeContext";

export default function index({ children }: { children: React.ReactNode }) {
    return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
