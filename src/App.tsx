import classes from './App.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartingPage from './pages/StartingPage/StartingPage'
import Game from './pages/Game/Game'
function App() {
  
  const windowWidth = window.innerWidth

  if (windowWidth < 768) {
    return <div className={classes.not_supported} >
          <p>Minimal device width 768px</p>

    </div>
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartingPage />}/>
          <Route path="/game" element={<Game />}/>
          <Route path="/contact" element={<h1>Contact</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
