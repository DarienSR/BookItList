import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from '../components/Container.tsx'
export default function Library() {

  const [readBooks, setReadBooks] = useState<object>()
  const [tbrBooks, setTBRBooks] = useState<object>()


  return <>
    <h2>Library</h2>
    <Container
      header = "Books You've Read"
      child = { readBooks }
    />

    <Container
      header = "TBR Books"
      child = { tbrBooks }
    />
  </>
}