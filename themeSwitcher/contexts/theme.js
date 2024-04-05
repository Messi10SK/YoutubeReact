import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

// exporting themecontext  (createcontext se) default value 
// value jo ki alredy fill ho
// default light dedi
// darktheme function aur light theme function
// means jab koi context call karega 
// to use thememode aur method dono mil jayenge
// exporting ThemeProvider = ThemeContext.Provider
// creating custom hook i.e. useTheme() return usecontext(themecontext)
// 