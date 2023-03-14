import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false)
  return (
    <div onClick={() => setFlip(!flip)}>
      {flip ? flashcard.a : flashcard.q }
    </div>

  )

  }