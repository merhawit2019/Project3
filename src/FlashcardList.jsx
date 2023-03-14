// import { useState } from 'react'


// export default function Card({ flashcards }) {
  
//   const [flip, setFlip] = useState(false)
//   function handleClick() {
//     setFlashcard(!flip)
//   }
//   return <div className = 'card' onClick={handleClick}>
//     {flashcard}

//   </div>
  
// }


import React from 'react'
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}