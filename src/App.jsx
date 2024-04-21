import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WordInput from './components/WordInput'
import Paragraph from './components/Paragraph'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<WordInput/>} />
        <Route path="/para" element={<Paragraph />} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
