import React from 'react'

export const GifGridItem = ({ title, url}) => {

  return (
    <div className='card animate__animated animate__fadeIn'>
        
        <img src={ url } alt={title}/>
        <p>{ title }</p>

    </div>
  )
}


//Creamos el componente le pasamos props destructurados title, url y returnamos la parte visual
