import { BrowserRouter, Route, Routes } from "react-router-dom"
import CharacterList from "./components/CharacterList"
import CharacterDetail from "./components/CharacterDetail"
import FavoritePage from "./components/FavoritePage"
import Menu from "./components/Menu"

function App() {

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
 