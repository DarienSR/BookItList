import Find from "./books/Find.tsx"
import Library from "./books/Library.tsx"
import Header from "./navigation/Header.tsx"
import "./global.scss"
const App = () => {

  return (
    <>
      <Header />
      <div className="global-container">
        <Find />
        <Library />
      </div>
    </>
  )
}

export default App