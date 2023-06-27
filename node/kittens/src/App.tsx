import { useState } from 'react'
import CardList from "./CardList"
import { kittens } from './kittens'
import SearchBox from './SearchBox'



function App() {
  const [filteredResults, setFilteredResults] = useState(kittens);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (searchValue: any) => {
    setSearchInput(searchValue)
    const filteredKittens = kittens.filter(kitten => {
      return kitten.name.toLowerCase().includes(searchInput.toLowerCase())
    })
    setFilteredResults(filteredKittens)
  }

  return (
    <div className="tc">
      <h1>Kittens</h1>
      <SearchBox searchChange={handleSearch}/>
      <CardList kittens={ filteredResults } />
    </div>
  )
}

export default App
