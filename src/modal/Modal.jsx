import React from 'react';
import Modal from 'react-modal';
import User from './User';
 
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
  const [userSelected, selectUser] = React.useState({});
  const [editable, setEditable] = React.useState(false);
  const [users, setUsers] = React.useState(props.users || []);
  
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
    const newUsers = props.users.map(u => { return u.id === user.id ? user : u })
    console.log('changeUsers', user, props.users, newUsers)
    setUsers(newUsers)
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
        <User {...userSelected} 
          editable={editable}
          onSave={changeUsers} 
        />
        <button onClick={closeModal}>Close</button>
      </div>
      </Modal>
    </div>
  );
}
