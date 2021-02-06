import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../Layout/UI/Backdrop/Backdrop';
import Aux from '../../../Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];

    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems>

                    </NavigationItems>
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;