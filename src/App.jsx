import { Route, Routes } from 'react-router'
import './App.css'
import Homepage from './Homepage'
import MovieDetails from './MovieDetails'
import SearchPage from './SearchPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />}>
      </Route>

      <Route path='/searchpage' element={<SearchPage />}>

      </Route>

      <Route path='/moviedetails/:id' element={<MovieDetails />}></Route>
    </Routes>
    </>
  )
}

export default App
