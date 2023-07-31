import Navbar from './components/Navbar'
import AllSections from './components/AllSections'
import Footer from './components/Footer'
import NavProvider from './context/NavContext'

function App() {

  return (
    <>
      <NavProvider>
        <Navbar/>
        <AllSections />
      </NavProvider>
      
      <Footer />
    </> 
  )
}

export default App
