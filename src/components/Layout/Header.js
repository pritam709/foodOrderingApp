import React  ,{Fragment}from "react";
import MealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
const Header =()=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <button>cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage}  alt="meals img"/>
        </div>

    </Fragment>

}

export default Header;