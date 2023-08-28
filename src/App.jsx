import { useEffect, useState } from "react";

import { GifGrid } from "./components/GifGrid"
import { SearchInput } from "./components/SearchInput"

export const App = () => {

    const [categories, setCategories] = useState(['Hi there!']);


  return (
    <div className="container">
        <h1 className="main__heading">Gif App - By Brandon</h1>

        {/* Get categories to look for and save it to the categories array. */}
        <SearchInput setCategories={setCategories}/>
        
        {/* Create grid where we're gonna show the gifs */}
        {categories.map( (category) => {
            return <GifGrid key={category} category={category}/>
        })}

        {/* Create component "card" with img and title of the gif. */}
    </div>
  )
}
