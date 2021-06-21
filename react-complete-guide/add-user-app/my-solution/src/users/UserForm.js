import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';
import styles from './UserForm.module.css';

const UserForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredName: "",
    enteredAge: "",
  });

  const [userFormHasError, setuserFormHasError] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const { enteredName, enteredAge } = userInput;

  const nameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value };
    });
  };

  const AgeChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAge: event.target.value };
    });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if (!enteredAge || !enteredName) {      
      setModalInfo({
        title: 'Invalid input',
        text: 'Please enter a valid name and age (non-empty values).',
      });
      
      setuserFormHasError(true);

      return;
    }

    if (enteredAge <= 0) {
      setModalInfo({
        title: 'Invalid input',
        text: 'Please enter a valid age (> 0).',
      });

      setuserFormHasError(true);
      return;
    }

    const userData = {
      id: Math.random(),
      name: enteredName,
      age: enteredAge,
    }

    props.onAddUser(userData);

    clearUserInputs();
  };

  const clearUserInputs = () => {
    setUserInput({
      enteredName: "",
      enteredAge: "",
    });
  };

  const onCloseModalHandler = () => {
    setuserFormHasError(false);
  };
    
  const showAddUserWarning = userFormHasError && 
    <Modal 
      onClose={ onCloseModalHandler }
      isOpen={ userFormHasError }
      title={ modalInfo.title }
      text={ modalInfo.text }
    />;

  return (
    <>
      <Card className={styles['user-form']}>
        <form onSubmit={formSubmitHandler}>
          <div className={styles['user-form__group']}>
            <label>Username</label>
            <input onChange={nameChangeHandler} value={enteredName} />
          </div>
          <div className={styles['user-form__group']}>
            <label>Age (Years)</label>
            <input type="number" onChange={AgeChangeHandler} value={enteredAge}/>
          </div>
          <Button text="Add user" type="submit"/>
        </form>
      </Card>
      { showAddUserWarning }
    </>
  );
}

export default UserForm;