import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

  const [categories, setcategories] = useState(['One Punch Man']) // creamos el estado


  return (
    <>
      <h2>Gif Expert</h2>
      <AddCategory setcategories={setcategories} /> {/* importamos el componentes AddCategory y le pasamos props setcategories con el valor de setcategories */}
      <button>Agregar
      </button>
      <ol>
        {
          categories.map( category =>  //Hacemos un recorrido(bucle) de las categories
            <GifGrid                   //Importamos el componentes GifGrid y le pasamos como props> category
                key={category}         //siempre debe ir key
                category={category}
            
            />
          )
          
        }
      </ol>
    </>

  )
}
