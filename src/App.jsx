import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TODOList from './TODOList'
import AddForm from './AddForm'


function App() {
  return (
    <>
      <AddForm />
      <TODOList />
    </>
  )
}

export default App
