
import { fetchData } from "../utils/api.tsx"
import React, {useEffect, useState, useRef} from 'react'
import Book from "./Book.tsx"
import "./books.scss"
import Container from "../components/Container.tsx"
import Input from "../components/Input.tsx"

export default function Books() {
  
  const [bookList, setBookList] = useState<any[]>([])
  let searchRef = useRef<any>()
  const [results, setResults] = useState<object>()

  const getBooks = async () => {
    const data = await fetchData('books/');
    setBookList(data);
  }

  useEffect(() => {
    getBooks();
  }, [])

  const books = bookList?.map((book, key) => {
    return <Book 
      title = { book.title }
      author = { book.author }
      isbn = { book.isbn }
      key = { key }
    />
  })

  function PerformSearch() {
    alert('Search performed ' + searchRef.current.value)
  }

  return <>
    <h2>To Be Discovered</h2>
    <Container
      header = "Recommended Books"
      child = { books }
    />

    <div style={ styles.search }>
      <Input
        type = "text"
        id = "search"
        text = "Search..."
        initial_value = { searchRef }
        action = { { text: 'Search', purpose: PerformSearch }  }
      />
      { results ? <p style={ styles.results }> 3 results returned </p> : null }
    </div>

    <Container
      header = ""
      child = { null }
    />

  </>
}

const styles = {
  search: {
    marginTop: '2rem',
    maxHeight: '5rem',
    minHeight: '5rem'
  },
  results: {
    paddingLeft: '1rem',
    margin: 0,
  }
}