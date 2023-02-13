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
          <Route path = '/store/' element = {<Store />} />

          <Route path = '/store/:type/' element = {<Products />} />
          <Route path = '/store//:meat' element = {<Products />} />
          <Route path = '/store/:vegetables' element = {<Products />} />
          <Route path = '/store/:fruits' element = {<Products />} />
          <Route path = '/store/:snacks' element = {<Products />} />
          <Route path = '/store/:fastfoos' element = {<Products/>} />

        </Routes>
      </Container>
    </ShoppingCartProvider>
    
  )
    
}

export default App