import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Header from './components/header';
import './App.css'
import Banner from './components/banner';
import Dashboard from './components/dashboard';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/' />
          <Route path='/dashboard' element={ Dashboard }/>
          
        </Route>
      </Routes>
    </BrowserRouter>
     <Banner />
     <Dashboard />
    </>
  )
}

export default App
