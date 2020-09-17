import React, { useState } from 'react'

import './User.css'

export default (props) => {

    const id = props.id
    const [name, setName] = useState(props.name)
    const [age, setAge] = useState(props.age)
    const [editable, setEditable] = useState(props.editable || false)

    return (
        <div className="mt-2">
        {!editable ? <div key={props.id} className="readonly">
            <input placeholder="ID" value={id} disabled className="mr-2"/>
            <input placeholder="Nome"className="mr-2" value={name} onChange={e => {setName(e.target.value); } } type="text" disabled={!editable}/>
            <input placeholder="Idade"className="mr-2" value={age} onChange={e => {setAge(e.target.value); } } type="number" disabled={!editable}/>
            { !editable && <button type="button" onClick={ () => { props.click() } }>Editar</button> }
            { editable && <button type="button" onClick={ () => { setEditable(false) } }>Cancelar Edição</button> }
        </div> :
        <div className="editable">
            <input placeholder="ID"className="mr-2" value={props.id} disabled/>
            <input placeholder="Nome"className="mr-2" value={name} onChange={e => {setName(e.target.value); } } type="text" disabled={!editable}/>
            <input placeholder="Idade"className="mr-2" value={age} onChange={e => {setAge(e.target.value); } } type="number" disabled={!editable}/>
            <button type="button" onClick={ () => { props.onSave({id, name, age}) } }>Salvar</button>
        </div>
        }
        </div>
    )
}