import { Routes, Route } from 'react-router-dom'
import { Menu } from './screens/Menu'
import './App.scss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Menu />} />
  </Routes>  )
}

export default App
