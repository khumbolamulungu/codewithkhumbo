"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType{
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext< ThemeContextType | undefined >(undefined)

export const ThemeProvider = ({ children } : { children : React.ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    // set theme here
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");

    }

    // toggle theme here
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    // initialize theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;

        setThemeState(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setMounted(true);
    }, [])

    if(!mounted){
        return null;
    }

    return(
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}