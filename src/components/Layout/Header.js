import React  ,{Fragment}from "react";
import MealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
const Header =()=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage}  alt="meals img"/>
        </div>

    </Fragment>

}

export default Header;