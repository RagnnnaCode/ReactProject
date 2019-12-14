import React from 'react';
import style from './FP.module.css'
import {Link} from 'react-router-dom';
import WOW from 'wowjs';

const FirstPage = () => {
    
    const m = "wow fadeInUp";
        new WOW.WOW().init();
    
    return(
        <div className={style.wrapper}>
            <div className={style.all}>
                
                <div className={style.NavBar}>
                    <ul className="list1" >
                        <li className={style.listcomp1}><Link to="/">Home</Link></li>
                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Work">Work</Link></li>
                        <li><Link to="/Contacts">Contacts</Link></li>
                    </ul>
                </div>
                
                <div className={m} data-wow-delay="0.45s" data-wow-duration="2.5s">
                    <div className={style.preview}  >
                        <div className={style.previewFirst}>
                            <p>good ideas</p>
                            <p>comes</p>
                        </div>
                        <div className={style.previewSecond}>
                            <p>first!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;