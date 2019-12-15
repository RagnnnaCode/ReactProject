import React from 'react';
import style from './About.module.css'
import {Link} from 'react-router-dom';
import WOW from 'wowjs';

const About = (props) => {
    const m2 = "wow fadeInUp";
    new WOW.WOW().init();
    return(
        <div>
            <div className={style.wrapperS}>
            <div className={style.NavBar}>
                <ul className="list1" >
                    <li ><Link to="/">Home</Link></li>
                    <li ><Link to="/Services">Services</Link></li>
                    <li className={style.listcomp3}><Link to="/About">About</Link></li>
                    <li><Link to="/Work">Work</Link></li>
                    <li><Link to="/Contacts">Contacts</Link></li>
                </ul>
            </div>
            <div className={style.acrostia}>
                <p>acrostia</p>
            </div>
            <div className={m2} data-wow-delay="0.45s" data-wow-duration="2s">
                <div className={style.aboutService}>
                    <p>Who we are & what we do</p>
                    <p>Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est.</p>
                    <p>Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.</p>
                </div>
            </div>
            <div className={style.imageService}>
                <div className={style.imgS}>
                    <div className={style.borderF}>
                        <div className={style.circleF}>
                            <img src="https://i.imgur.com/wNKbYfv.png" alt=""/>
                            <div className={style.textA}>
                                <p>Researching</p>
                                <p>General manager</p>
                                <div className={style.imgLinkBlock}>
                                    <div className={style.imgLink}>
                                    <a href="https://www.facebook.com/" target="_blank"><img src="https://i.imgur.com/b73Osuz.png" alt=""/></a>   
                                    </div>
                                    <div className={style.imgLink}>
                                    <a href="https://twitter.com/" target="_blank"><img src="https://i.imgur.com/huAJQaB.png" alt=""/></a>
                                    </div>
                                    <div className={style.imgLink}>
                                    <a href="https://plus.google.com/" target="_blank"><img src="https://i.imgur.com/Xd7MvZa.png" alt=""/></a>
                                    </div>
                                    <div className={style.imgLink}>
                                    <a href="https://www.linkedin.com/" target="_blank"><img src="https://i.imgur.com/zofda9a.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.imgS2}>
                <div className={style.borderF2}>
                        <div className={style.circleF}>
                            <img src="https://i.imgur.com/ss8Ny0Q.png" alt=""/>
                            <div className={style.textA}>
                                <p>DESIGN</p>
                                <p><span>Design Master</span></p>
                                <div className={style.imgLinkBlock}>
                                    <div className={style.imgLink1}>
                                    <a href="https://www.facebook.com/" target="_blank"><img src="https://i.imgur.com/b73Osuz.png" alt=""/></a>   
                                    </div>
                                    <div className={style.imgLink2}>
                                    <a href="https://twitter.com/" target="_blank"><img src="https://i.imgur.com/huAJQaB.png" alt=""/></a>
                                    </div>
                                    <div className={style.imgLink3}>
                                    <a href="https://plus.google.com/" target="_blank"><img src="https://i.imgur.com/Xd7MvZa.png" alt=""/></a>
                                    </div>
                                    <div className={style.imgLink4}>
                                    <a href="https://www.linkedin.com/" target="_blank"><img src="https://i.imgur.com/zofda9a.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.imgS}>
                <div className={style.borderF}>
                        <div className={style.circleF}>
                            <img src="https://i.imgur.com/wNKbYfv.png" alt=""/>
                            <div className={style.textA}>
                                <p>Development</p>
                                <p>Developer ninja</p>
                                <div className={style.imgLinkBlock}>
                                    <div className={style.imgLink}>
                                    <a href="https://www.facebook.com/" target="_blank"><img src="https://i.imgur.com/b73Osuz.png" alt=""/></a>   
                                    </div>
                                    <div className={style.imgLink}>
                                    <a href="https://twitter.com/" target="_blank"><img src="https://i.imgur.com/huAJQaB.png" alt=""/></a>
                                    </div>
                                    <div className={style.imgLink}>
                                    <a href="https://plus.google.com/" target="_blank"><img src="https://i.imgur.com/Xd7MvZa.png" alt=""/></a>
                                    </div>
                                    <div className={style.imgLink}>
                                    <a href="https://www.linkedin.com/" target="_blank"><img src="https://i.imgur.com/zofda9a.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.imgS}>
                <div className={style.borderF}>
                        <div className={style.circleF}>
                            <img src="https://i.imgur.com/wNKbYfv.png" alt=""/>
                            <div className={style.textA}>
                                <p>launch</p>
                                <p>SEO guru</p>
                                <div className={style.imgLinkBlock}>
                                    <div className={style.imgLink}>
                                    <a href="https://www.facebook.com/" target="_blank"><img src="https://i.imgur.com/b73Osuz.png" alt=""/></a>   
                                    </div>
                                    <div className={style.imgLink}>
                                    <a href="https://twitter.com/" target="_blank"><img src="https://i.imgur.com/huAJQaB.png" alt=""/></a>
                                    </div>
                                    <div className={style.imgLink}>
                                    <a href="https://plus.google.com/" target="_blank"><img src="https://i.imgur.com/Xd7MvZa.png" alt=""/></a>
                                    </div>
                                    <div className={style.imgLink}>
                                    <a href="https://www.linkedin.com/" target="_blank"><img src="https://i.imgur.com/zofda9a.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default About;