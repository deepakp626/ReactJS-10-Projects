import style from './Button.module.css'
import {MdMessage} from 'react-icons/md'
const Button = (props) => {
  const {isOutline,icon,text,...rest} = props;
  return (
    <>
        <button  className={ isOutline? style.outline_btn:style.submit}
         {...rest}  > 
          {icon}
          {text}
          </button>
    </>
  );
};

export default Button;
