import React,{createContext,useContext} from 'react';

export const ThemeContext= createContext({
    Theme:"light",
    lightTheme:()=>{},
    darkTheme:()=>{}
});

export  const ThemeContextProvider=ThemeContext.Provider

export default function useTheme(){
    return  useContext(ThemeContext)
}