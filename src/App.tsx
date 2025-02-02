// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { WelcomeSection } from './sections'
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

function App() {

  return (
    <div className='max-w-screen'>
      <Navbar />
      <Cursor />
      <WelcomeSection />
    </div>
  )
}

export default App
