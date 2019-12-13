import React from 'react';
import style from './FP.module.css'
import {NavLink} from 'react-router-dom';

const FirstPage = (props) => {
    return(
        <div className={style.wrapper}>
            <div className={style.all}>
                <div className={style.NavBar}>
                    <ul className="list1" >
                        <li><NavLink to="/Home">Home</NavLink></li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Work</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default FirstPage;