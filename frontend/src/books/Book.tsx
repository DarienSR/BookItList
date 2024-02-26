import "./books.scss"
import React from 'react'
import { BiWorld   } from "react-icons/bi";
import { GiBookPile  } from "react-icons/gi";
import axios from 'axios'

interface IRequiredBookProps {
  title: string, 
  author: string,
  isbn: string, 
  key: number
}

interface IOptionalBookProps {
  global_rating: number,
  bookittbr_rating: number
  in_library: boolean,
  tbr: boolean,
}

interface IBookProps extends IRequiredBookProps, IOptionalBookProps {}

const defaultProps : IOptionalBookProps = {
  global_rating: 0,
  bookittbr_rating: 0,
  in_library: false,
  tbr: false
}

const Book = (props: IBookProps) => {
  const { title, global_rating, bookittbr_rating, key } = props
  
  return <div className="Book-Container" key={ key }>
    <h3 className="Book-Title">{ title }</h3>
    <div className="Book">
    
    </div>
    <div className="Book-Ratings">
      <p>{ global_rating } <BiWorld /></p>
      <p>{ bookittbr_rating } <GiBookPile /></p>
    </div>
  </div>
    
}

Book.defaultProps = defaultProps
export default Book