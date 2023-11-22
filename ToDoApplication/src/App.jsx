import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContextProvider } from './Contexts/ContextApi'
import ThemeBtn from './Components/Btn'
import Card from './Components/Card'

function App() {
  const [Theme, setTheme] = useState('light')

  const lightTheme = () => {
    setTheme('light')
  }
  const darkTheme = () => {
    setTheme('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(Theme)

  }, [Theme])

  return (
    <ThemeContextProvider value={{ Theme, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
             <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
                <Card/>
          </div>
        </div>
      </div>

    </ThemeContextProvider>
  )
}

export default App
