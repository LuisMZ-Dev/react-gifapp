import { useEffect, useState } from "react"
import {getGif} from '../Helpers/getGifs'

export const useFetchGifs = (category) => {

  const [state, setstate] = useState({
    data:[],
    loading:true 

  });

  useEffect(()=>{ //para prevenir que se vuelva a carcar getGifs
    getGif( category ).then(imgs=>{

            setstate({
            data: imgs,
            loading: false        
        });    


    })
  },[category])
  

  return state;

}

//Este es un custom hook con estado inicial de objeto y que retorna el state