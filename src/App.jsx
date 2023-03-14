import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FlashcardList from './FlashcardList';


function App() {
  const [count, setCount] = useState(0)
  const [flashcards, setFlashcards] = useState(d)

  return (
    <div className="App">
      <h1>
        Flash card
      </h1>
      <FlashcardList  flashcards={flashcards}/>
    </div>
  )
}

const d = [
{
  q: 1,
  a: 2
}
]

export default App
