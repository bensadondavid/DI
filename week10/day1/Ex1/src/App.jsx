import {ThemeProvider, useTheme} from './ToggleChangeColor'

function ThemeSwitcher(){

  const {theme, HandleTheme} = useTheme()

  return(
    <div className='container'>
      <button onClick={HandleTheme}>change theme</button>
    </div>
  )
}

function App() {

  return (
    <>
    <ThemeProvider>
    <h1 style={{textAlign : 'center'}}>Essay</h1>
    <ThemeSwitcher/>
    </ThemeProvider>
    </>

  )
}

export default App
