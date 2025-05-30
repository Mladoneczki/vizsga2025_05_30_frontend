import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext';
import { Dropdown } from 'bootstrap';



function TemaValaszto() {
    const { temaLista } = useContext(ApiContext);

    


    return (
        <div>
            <label htmlFor="tema">Choose a téma:</label>

            <select id="tema">
                {temaLista.map((tema, i) => { return <option key={i} value={tema.temanev}>{tema.temanev}</option> })}

            </select>
        </div>
        // <Dropdown>
        //   <Dropdown.Toggle variant="success" id="dropdown-basic">
        //     Dropdown Button
        //   </Dropdown.Toggle>
        //   <Dropdown.Menu>
        //   {temaLista.map((tema, i)=>{return <Dropdown.Item href={`#/action-${tema.id}`}>{tema.temanev}</Dropdown.Item>})}
        // </Dropdown.Menu>
        // </Dropdown>


    );
}

export default TemaValaszto