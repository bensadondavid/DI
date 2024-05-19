import { useState, createContext, useContext} from "react"

const ThemeContext = createContext()

const ThemeProvider = ({children})=>{
   
    const lightTheme = {
        backgroundColor : 'white',
        color : 'black'
    }
    const darkTheme = {
        backgroundColor : 'black', 
        color : 'white'
    }

    const [theme, setTheme] = useState(lightTheme)
    
    const HandleTheme = ()=>{
        if(theme.backgroundColor === 'white'){
            setTheme(darkTheme)
        }
        else if(theme.backgroundColor === 'black'){
            setTheme(lightTheme)
        }
    }    

    return (
            <>
                <ThemeContext.Provider value={{theme, HandleTheme}}>
                    <div style={theme}>
                        {children}
                    </div>
                </ThemeContext.Provider>
            </>
    )
}

const useTheme = ()=>{
    const context = useContext(ThemeContext)
    if(!context){
        throw new Error
    }
    return context
}

export {ThemeProvider, useTheme}





