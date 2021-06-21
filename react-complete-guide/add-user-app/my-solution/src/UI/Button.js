import styles from './Button.module.css';

const Button = (props) => {
  const type = props.type || 'button';

  const buttonclickHandler = () => {
    if (props && props.onClick) {
      props.onClick();
    }
  };

  const classes = !props.className? styles.button : `${ styles.button } ${ props.className }`;

  return (
    <button 
      className={ classes }
      type={ type }
      onClick={ buttonclickHandler }
    >{ props.text }</button>
  );
}

export default Button;