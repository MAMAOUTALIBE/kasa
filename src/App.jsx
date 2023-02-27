import React from 'react'
import AppartementGrid from './components/AppartementGrid'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
function App() {
  return (
    <div>
      <Navbar />
      <Main>
      <Banner />
      <AppartementGrid />
      </Main>
      <Footer />
      


    </div>
  )
}

export default App