import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.tsx'
import 'tachyons'
import { kittens } from './kittens'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Card id={kittens[0].id} name={kittens[0].name } email={kittens[0].email} />
      <Card id={kittens[1].id} name={kittens[1].name } email={kittens[1].email} />
      <Card id={kittens[2].id} name={kittens[2].name } email={kittens[2].email} />
    </div>
  </React.StrictMode>,
)
  