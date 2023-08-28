import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {
    const [gifsInfo, setGifsInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [noResults, setNoResults] = useState(false);
  
    async function getGifsInfo() {
      const gifs = await getGifs(category);
      setGifsInfo(gifs);
      setIsLoading(false);
      gifs.length > 0 ? setNoResults(false) : setNoResults(true);
    }
  
    useEffect( () => {
      getGifsInfo();
    }, [] )

    return {
        gifsInfo,
        isLoading,
        noResults,
    }
}
