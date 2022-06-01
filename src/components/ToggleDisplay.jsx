import React, {useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './../contexts/menu.context';
import styles from './ToggleDisplay.module.css';
console.log(styles);

function ToggleDisplay(){
  const {text, button} = styles;
  const { isOpen, toggle } = useContext(MenuContext);
  console.log({ isOpen, toggle });
  return (
    <>
      <p className={classNames(text, { open: isOpen })}>Toggle Value: {`${isOpen}`}</p>
      <button className={button} onClick={toggle}>Toggle Value</button>
    </>
  );
}

export default ToggleDisplay;