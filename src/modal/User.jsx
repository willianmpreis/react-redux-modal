import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import * as UsersActions from '../store/actions/users'

import './User.css'

const User = (props) => {
    const userSelected = useSelector(state => state.userSelected)
    const dispatch = useDispatch()
    const id = props.id || userSelected.id
    const [name, setName] = useState(userSelected.name)
    const [age, setAge] = useState(userSelected.age)
    const editable = props.editable || false

    function addUser() {
        dispatch(UsersActions.addUser({
            name,
            age
        }))
    }

    return (
        <div className="mt-2">
        {!editable ? <div key={props.id} className="readonly">
            <input placeholder="ID" value={props.id} disabled className="mr-2"/>
            <input placeholder="Nome"className="mr-2" value={props.name}  disabled type="text"/>
            <input placeholder="Idade"className="mr-2" value={props.age} disabled type="number"/>
            <button type="button" onClick={ () => { props.click() } }>Editar</button>
        </div> :
        <div className="editable">
            <input placeholder="ID"className="mb-2" value={id} disabled/>
            <input placeholder="Nome"className="mb-2" value={name} onChange={e => {setName(e.target.value); } } type="text" disabled={!editable}/>
            <input placeholder="Idade"className="mb-2" value={age} onChange={e => {setAge(+e.target.value); } } type="number" disabled={!editable}/>
            <button type="button" className="mb-2" onClick={ () => { props.onSave({id, name, age}) } }>Salvar</button>
            <button type="button" className="mb-2" onClick={ addUser } >Clonar</button>
        </div>
        }
        </div>
    )
}
  
export default User;
