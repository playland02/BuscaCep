//react-router
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import Search from './pages/Search'

//css
import './App.css'

function App() {
  

  


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/BuscaCep/' element={<Home/>}/>
    <Route path='/BuscaCep/search' element={<Search/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
