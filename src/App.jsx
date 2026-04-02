import { Route, Routes } from 'react-router'
import './App.css'
import Homepage from './Homepage'
import MovieDetails from './MovieDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />}>
      </Route>

      <Route path='/moviedetails/:id' element={<MovieDetails />}></Route>
    </Routes>
    </>
  )
}

export default App
