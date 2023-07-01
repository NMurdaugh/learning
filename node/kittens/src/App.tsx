import CardList from "./CardList"
import { kittens } from './kittens'
import SearchBox from './SearchBox'



function App() {


  return (
    <div className="tc">
      <h1>Kittens</h1>
      <SearchBox />
      <CardList kittens={ kittens } />
    </div>
  )
}

export default App
