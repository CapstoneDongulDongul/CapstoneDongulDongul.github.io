import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import IndexPage from './components/IndexPage'
import ChartPage from './components/ChartPage'
import CoinSites from './components/CoinSites'
import SearchPage from './components/SearchPage'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <IndexPage />
      <ChartPage />
      <CoinSites />
      <SearchPage />
      <Footer />
    </div>
  )
}

export default App
