
import { fetchData } from "../utils/api.tsx"
import React, {useEffect, useState} from 'react'
export default function Books() {
  
  const [bookList, setBookList] = useState<any[]>([])

  const getBooks = async () => {
    const data = await fetchData('books/');
    setBookList(data);
  }

  useEffect(() => {
    getBooks();
  }, [])


  return <>
    <h1>tbr page</h1>
    { bookList.map((book) => {
      return <p>{book.title} - {book.author}</p>
    }) }
  </>
}