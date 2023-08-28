import { Card } from "./Card"
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

  const {gifsInfo, isLoading, noResults} = useFetchGifs(category);

  return (
    <>
      <h2 className='heading'>{category}</h2>
      {isLoading && <p className="heading">Cargando...</p>}
      
      {noResults && <p className="heading">No se encontraron resultados...</p>}

      <div className="display">
        {
          gifsInfo.map( (gif) => {
            return <Card key={gif.id} {...gif}/>
          })
        }
      </div>
    </>
    

  )
}
