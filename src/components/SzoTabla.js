import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import SzoSor from './SzoSor'

function SzoTabla() {
    const { szoLista } = useContext(ApiContext)

    return (<>
        <div className='sorok' id='fejlec'>
            <div><strong>Angol</strong></div>
            <div><strong>Magyar</strong></div>
            <div><strong>eredmény</strong></div>
        </div>
        <>{szoLista.map((szo, i) => { return <SzoSor szo={szo} key={i} /> })}</>

    </>
    )
}

export default SzoTabla