import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import ChartPage from './components/ChartPage'
import CoinSites from './components/CoinSites'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <ChartPage />
      <CoinSites />
      <SearchPage />
      <Footer />
    </div>
  )
}

export default App
