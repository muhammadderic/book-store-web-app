import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
    </Routes>
  )
}

export default App
