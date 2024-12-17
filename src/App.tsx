import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { useAppDispatch } from './redux/store';

export const App = () => {
  const dispatch = useAppDispatch()

  return (
    <div className='app__container'>
      <div className='app'>
        <Routes>
          <Route path='/' element={<ProductsPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
