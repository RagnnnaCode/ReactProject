import React from 'react';
import style from './Services.module.css'
import {Link} from 'react-router-dom';
import WOW from 'wowjs';


const Services = (props) => {
    const m2 = "wow fadeInUp";
    new WOW.WOW().init();
    return(
        <div className={style.wrapperS}>
            <div className={style.NavBar}>
                <ul className="list1" >
                    <li ><Link to="/">Home</Link></li>
                    <li className={style.listcomp2}><Link to="/Services">Services</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Work">Work</Link></li>
                    <li><Link to="/Contacts">Contacts</Link></li>
                </ul>
            </div>
            <div className={style.acrostia}>
                <p>acrostia</p>
            </div>
            <div className={m2} data-wow-delay="0.45s" data-wow-duration="2s">
                <div className={style.aboutService}>
                    <p>OUR SERVICES</p>
                    <p>Cras commodo mattis justo nec <span>lobortis</span>. Nam ut tellus lobortis, ullamcorper massa sit amet</p>
                    <p>Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est.</p>
                    <p>Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.</p>
                </div>
            </div>
            <div className={style.imageService}>
                <div className={style.imgS}>
                    <div className={style.borderF}>
                        <div className={style.circleF}>
                            <img src="https://i.imgur.com/XYtBeAf.png" alt=""/>
                            <div className={style.textA}>
                                <p>Researching</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit .</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.imgS}>
                <div className={style.borderF}>
                        <div className={style.circleF}>
                            <img src="https://i.imgur.com/pWc6Ici.png" alt=""/>
                            <div className={style.textA}>
                                <p>DESIGN</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit .</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.imgS}>
                <div className={style.borderF}>
                        <div className={style.circleF}>
                            <img src="https://i.imgur.com/fdder9K.png" alt=""/>
                            <div className={style.textA}>
                                <p>Development</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit .</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.imgS}>
                <div className={style.borderF}>
                        <div className={style.circleF}>
                            <img src="https://i.imgur.com/3lstln7.png" alt=""/>
                            <div className={style.textA}>
                                <p>launch</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit .</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;