import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs( category)
  
  return (
    <>
  
  <h3>{ category } </h3>

  {loading && <p className='animate__animated animate__flash'>loading...</p> }
  
    <div className='card-grid animate__animated animate__fadeIn'>    
    
    <ol>
        { images.map(img =>( //para hacer el recorrido y dibujar en el componente exportado con props los datos

        <GifGridItem 
        key={img.id}
        {...img}

        />
  
         ))
        }    
    </ol>
   
   </div>
    </>
  )
}
