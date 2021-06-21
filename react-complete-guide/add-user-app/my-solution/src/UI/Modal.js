import Button from './Button';
import Card from './Card';
import styles from './Modal.module.css';

const Modal = (props) => {
  const closeModalHandler = (event) => {
    if (event && event.target === event.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div className={ styles['modal-overlay'] } onClick={closeModalHandler}>
      <Card className={ styles.modal }>
        <div className={ styles['modal__header'] }>
          { props.title }
        </div>
        <div className={ styles['modal__body'] }>
          <p className={ styles['modal__text'] }>{ props.text }</p>
          <Button 
            className={ styles['modal__button'] }
            text="Okay"
            onClick={() => closeModalHandler(Event)} 
          />
        </div>
      </Card>
    </div>
  )
};

export default Modal;