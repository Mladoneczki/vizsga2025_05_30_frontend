import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import SzoSor from './SzoSor'

function SzoTabla() {
    const {szoLista}=useContext(ApiContext)

  return (
    <>{szoLista.map((szo, i)=>{return  <SzoSor szo={szo} key={i}/>})}</>
            
       
  )
}

export default SzoTabla