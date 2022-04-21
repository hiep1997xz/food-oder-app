import React from 'react'
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Food Oder</h1>
        <HeaderCartButton onClick={props.handleShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="" />
      </div>
    </>
  )
}

export default Header