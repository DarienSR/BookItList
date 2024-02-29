import "./books.scss"
import React, { useState } from 'react'
import { BiWorld   } from "react-icons/bi";
import { GiBookPile } from "react-icons/gi";
import { CiBookmarkCheck, CiBookmarkRemove } from 'react-icons/ci'
import { FaRegHeart } from "react-icons/fa";
import { postData } from '../utils/api.tsx'

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
  in_library: true,
  tbr: true
}

const Book = (props: IBookProps) => {
  const { title, global_rating, bookittbr_rating, key, in_library, tbr } = props
  
  const ChooseBookIndicator  = (in_library, tbr) => {
    if(in_library && tbr) return { icon: <div title="Add to Read List"><CiBookmarkCheck /> </div> } 

    if(in_library && !tbr) return { icon: <div title="Remove from Read List"><CiBookmarkRemove  /></div> } // remove from read list

    return { icon: <div title="Add to Library"><FaRegHeart /></div> } // add to library
  }

  const [bookIndicator, setBookIndicator] = useState<any>(ChooseBookIndicator(in_library, tbr));
  
  const ChangeBookIndicator = () => {
    // TO DO: make request to toggle indicator.
    const response = postData('', {});
    // update indicator given new data
    // setBookIndicator(ChooseBookIndicator(response.data.instance.in_library, response.data.instance.tbr))
  }

  return <div className="Book-Container" key={ key }>
    <h3 className="Book-Title">{ title }</h3>
    <div className="Book">
      <div className="Book-Indicator" onClick={ () => ChangeBookIndicator() }>{ bookIndicator?.icon }</div>
    </div>
    <div className="Book-Ratings">
      <p>{ global_rating } <BiWorld /></p>
      <p>{ bookittbr_rating } <GiBookPile /></p>
    </div>
  </div>
}

Book.defaultProps = defaultProps
export default Book