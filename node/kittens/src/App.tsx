import { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';



function App() {
  const [kittens, setKittens] = useState<any[]>([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setKittens(users) });
  }, [])

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value)
  }

  const filteredKittens = kittens.filter(kitten => {
    return kitten.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return !kittens.length ?
    <h1>Loading</h1> :
    (
    <div className="tc">
      <h1 className="f1">Kittens</h1>
        <SearchBox searchChange={onSearchChange} />
      <CardList kittens={ filteredKittens } />
    </div>
  )
}

export default App
