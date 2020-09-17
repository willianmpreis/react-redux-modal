import React from 'react'
import Modal from './Modal'

export default (props) => {
    const users = [
        {
            id: 1,
            name: 'Willian',
            age: 30
        },
        {
            id: 2,
            name: 'Magno',
            age: 30
        },
        {
            id: 3,
            name: 'Ana',
            age: 28
        },
        {
            id: 4,
            name: 'Luiza',
            age: 28
        },
    ]
    return (
        <div id="yourAppElement">
            <h1>Meu Modal</h1>
            <Modal users={users}></Modal>
        </div>
    )
}
