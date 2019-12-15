import React from 'react';
import style from './Work.module.css'
import {Link} from 'react-router-dom';
import ImageComponent from './WorkImageComponent/ImageComponent';

const Work = (props) => {
    let ArrayUrls = [{Url : "https://i.imgur.com/Ts4u11T.png", name : "Aenean a elit"}, {Url : "https://i.imgur.com/KLWAOd6.png", name : "Aliquam"},
     {Url : "https://i.imgur.com/GR8sSMP.png", name : "Suspendisse libero"}, {Url : "https://i.imgur.com/Y46XdBX.png", name : "Maecenas fringilla"}, 
     {Url : "https://i.imgur.com/yaSc7Vu.png", name : "Donec vehicula"}, {Url : "https://i.imgur.com/gZwJBP0.png", name : "Ut et sapien"},
      {Url : "https://i.imgur.com/84xl7ag.png", name : "quis malesuada"}, {Url : "https://i.imgur.com/1311sx0.png", name : "Vestibulum ante"}]
    let newArrayUrls = ArrayUrls.map((u) => {
        return <ImageComponent url={u.Url} name={u.name}/>
    });


    return(
        <div>
            <div>
            <div className={style.wrapperS}>
            <div className={style.NavBar}>
                <ul className="list1" >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li className={style.listcomp4}><Link to="/Work">Work</Link></li>
                    <li><Link to="/Contacts">Contacts</Link></li>
                </ul>
            </div>
            <div className={style.acrostia}>
                <p>acrostia</p>
            </div>
                    <div>
                        <div className={style.save}>
                        <div className={style.aboutService}>
                            <p>Out work</p>
                            <p>Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien. Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim diam, ullamcorper quis libero et, ultricies commodo est.</p>
                            <p>Quisque at ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet lacus, eget laoreet erat posuere quis.</p>
                        </div>
                        <div className={style.Portfolio}>
                            <div className={style.PortfolioBlock1}>
                                <p>Portfolio</p>
                            </div>
                            <div className={style.PortfolioBlock2}>
                                <div className={style.listPortfolio}>
                                <ul>
                                    <li>All</li>
                                    <li className={style.li2}>Photography</li>
                                    <li>Logo design</li>
                                    <li>Web design</li>
                                </ul>
                                </div>
                            </div>
                            
                        </div>
                        </div>
                        <div className={style.imagesView}>
                               {newArrayUrls}
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
        
    )
}
export default Work;