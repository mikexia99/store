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
          <Route path = '/grocerystore' element = {<Store />} />

          <Route path = '/grocerystore/:type/' element = {<Products />} />
          <Route path = '/grocerystore/:meat' element = {<Products />} />
          <Route path = '/grocerystore/:vegetables' element = {<Products />} />
          <Route path = '/grocerystore/:fruits' element = {<Products />} />
          <Route path = '/grocerystore/:snacks' element = {<Products />} />
          <Route path = '/grocerystore/:fastfoos' element = {<Products/>} />

        </Routes>
      </Container>
    </ShoppingCartProvider>
    
  )
    
}

export default App