import React from 'react'
import {Container} from "react-bootstrap"
import Footer from './components/Footer'
import Header from './components/Header'
import "./App.css"
 const App = () => {
  return (
    <div>
      <Header/>
      <main className="py-3">
        <Container><h1>hi</h1></Container>
        </main>
      <Footer/>
    </div>
  )
}

export default App;
