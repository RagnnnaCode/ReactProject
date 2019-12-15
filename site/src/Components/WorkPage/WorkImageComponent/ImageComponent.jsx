import React from 'react';
import style from './../Work.module.css'
const ImageComponent = (props) => {
    return(
        <div>
            <div className={style.imgBlockD} >
                <p>{props.name}</p>
                <img src={props.url} alt=""/>
            </div>
        </div>
    )
}
export default ImageComponent;