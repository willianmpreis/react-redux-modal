import React from 'react'

import { useSelector, useDispatch } from 'react-redux'


export default (props) => {

    const users = useSelector(state => state.data)
    const dispatch = useDispatch()

    const [name, setName] = React.useState('')
    const [id, setId] = React.useState('')
    
    function reset() {
        setName('')
        setId('')
    }

    function addUser() {
        dispatch(
            { 
                type: 'ADD_USER',
                user: { name }
            }
        )
        reset()
    }
    function setUser() {
        dispatch(
            { 
                type: 'SET_USER',
                user: { id, name }
            }
        )
        reset()
    }

    return (
        <div className="mt-4">
            <h2>[Redux] Lista de Usuários - Hook</h2>
            <table className="table mt-2" border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (<tr key={user.id}><td>{user.id}</td><td>{user.name}</td></tr>) )}
                </tbody>
            </table>
            <input value={name} onChange={e => setName(e.target.value) } type="text" placeholder="Novo nome" />
            <button type="button" onClick={ addUser } >Novo</button>
            <input value={id} onChange={e => setId(+e.target.value) } type="text" placeholder="ID que deseja alterar" />
            <button type="button" onClick={ setUser } >Editar</button>
        </div>
    )
}
