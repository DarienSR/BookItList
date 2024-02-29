import React from 'react'
import "../global.scss"
export default function Header() {
  return <div className="header">
    <div className="wrapper">
      <h1>BookItList</h1>

      <span className="nav-links">
        <a href="/find">Find Books</a>
        <a href="/library">My Library</a>
      </span>
    </div>
  </div>
}