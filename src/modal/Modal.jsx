import React from 'react';
import Modal from 'react-modal';
import User from './User';

import * as UsersActions from '../store/actions/users'

import { useSelector, useDispatch } from 'react-redux'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '2px'
  }
};

Modal.setAppElement('#root')
 
export default (props) => {

  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [editable, setEditable] = React.useState(false);
  
  const userSelected = useSelector(state => state.userSelected)
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  function managerUser(user, action ='add') {
    let type
    switch (action) {
      case 'add':
        type = 'ADD_USER'
        break
      case 'set':
        type = 'SET_USER'
        break
      default:
        type = 'ADD_USER'
    }
    dispatch(
        { 
            type,
            user
        }
    )
  }
    
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  const changeUsers = (user) => {
    managerUser(user, 'set')
  }

  const selectUser = (user) => {
    dispatch(UsersActions.selectUser(user))
  }

  return (
    <div>
      { users.map((user, i) => (<User {...user}  key={i} click={() => { selectUser(user); setEditable(true); openModal() }} />)) }
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

      <div style={ {border: '1px solid', padding: '20px'} }>
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Modal</h2>
        <User
          editable={editable}
          onSave={changeUsers} 
        />
        <button onClick={closeModal}>Close</button>
      </div>
      </Modal>
      <button type="button" className="mb-2" onClick={ () => {console.log(users, userSelected)} } >Exibir State</button>
    </div>
  );
}
