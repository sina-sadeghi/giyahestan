import React from 'react';
import './card.scss';
import Image from "../image/Image";
import {Link} from "react-router-dom";


const Card = props => {

    const save = e => {
        e.preventDefault();
        alert('bookmark clicked');
    }

    return <Link to={`/plant/${props.id}`}>
        <div className={'card'}>
            <Image src={props.image} alt={props.name}/>
            <p className={'card__score'}>
                {
                    [0, 1, 2, 3, 4].map(i => i < props.score ?
                        <i className="fa-solid fa-star"/> : <i className="fa-regular fa-star"/>)
                }
            </p>
            <p className={'card__description'}>
                <i className={'fa-regular fa-bookmark'} onClick={save}/>
                <p>{props.name}</p>
            </p>
        </div>
    </Link>
}
export default Card;

//div className={'similar-plant__item'}>
//                 {!!ribbon && <div className="similar-plant__ribbon-wrapper">
//                     <div className="similar-plant__ribbon">{ribbon}</div>
//                 </div>}
//
//                 <Image src={src} alt={name} className={'similar-plant__image'}/>
//                 <span className={'similar-plant__score'}>{initStars}</span>
//                 <p className="similar-plant__name">{name}</p>
//             </div>