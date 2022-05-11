import Header from './components/Header'
import Footer from './components/Footer'
import IndexPage from './components/page_1/IndexPage'
import ChartPage from './components/page_2/ChartPage'
import CoinSites from './components/CoinSites'
import SearchPage from './components/page_3/SearchPage'
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
