import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks />} />
    </Routes>
  )
}

export default App
