import { Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import { Products } from './pages/Products'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App(){

  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className = 'mb-4'>
        <Routes>
          <Route path = '/' element = {<Store />} />

          <Route path = '/:type/' element = {<Products />} />
          <Route path = '/:meat' element = {<Products />} />
          <Route path = '/:vegetables' element = {<Products />} />
          <Route path = '/:fruits' element = {<Products />} />
          <Route path = '/:snacks' element = {<Products />} />
          <Route path = '/:fastfoos' element = {<Products/>} />

        </Routes>
      </Container>
    </ShoppingCartProvider>
    
  )
    
}

export default App