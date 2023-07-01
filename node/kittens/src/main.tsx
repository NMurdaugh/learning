import React from 'react'
import ReactDOM from 'react-dom/client'
import CardList from './CardList.tsx'
import { kittens } from './kittens'
import 'tachyons'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CardList kittens={ kittens } />
  </React.StrictMode>,
)
