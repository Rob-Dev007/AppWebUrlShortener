import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import Configuracion from './components/configuracion';

import './App.css';

function App() {

  return (
    <>
    <BrowserRouter>
      <div>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/dashboard' element={ <Dashboard/> }>
              <Route path='/dashboard/configuracion' element={ <Configuracion /> } />
            </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
