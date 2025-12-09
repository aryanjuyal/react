import {createContext,useContext}from'react'


export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})//here we gave default value to createcontext cz we want it to have 
//this is we are givng initial value to the context so when context is made these values are feed in it 
//now whenever the context is called we get all these given methods with it 
export const ThemeProvider= ThemeContext.Provider
export default function useTheme(){
    return useContext(ThemeContext)
}