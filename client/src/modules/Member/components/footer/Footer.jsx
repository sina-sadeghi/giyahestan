import React from 'react';
import './footer.scss';
import './footer-device.scss';
import {Link} from "react-router-dom";
import Storage from '../../../../core/services/Storage';
import Image from "../../../../shared/image/Image";
import _ from "../../../../core/services/Translate";


const Footer = () => {
    return (
        <div className={'footer'}>
            <div className="connection">
                <span className={'connection__title'}>{'ارتباط با ما:'}</span>
                <a href="https://instagram.com/sin_sad_79" title={'sin_sad_79'} target={'_blank'} className={'connection__instagram'}>
                    <i className="fa-brands fa-instagram"/>
                </a>
                <a href="https://t.me/sin_sad_79" title={'sin_sad_79'} target={'_blank'}>
                    <i className="fa-brands fa-telegram"/>
                </a>
                <a href="https://twitter.com/sin_sad_79" title={'sin_sad_79'} target={'_blank'}>
                    <i className="fa-brands fa-twitter"/>
                </a>
                <a href="https://github.com/sina-sadeghi" title={'sin_sad_79'} target={'_blank'}>
                    <i className="fa-brands fa-github"/>
                </a>
                <a href="https://www.linkedin.com/in/sina-sadeghi79/" title={'sin_sad_79'} target={'_blank'}>
                    <i className="fa-brands fa-linkedin"/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100091972094555&mibextid=ZbWKwL" title={'sin_sad_79'} target={'_blank'}>
                    <i className="fa-brands fa-facebook"/>
                </a>
            </div>

            <div className={'question'}>
                {/*<div className={'question__head'}>{'سوال از متخصصین:'}</div>*/}
                <div className="question__body">
                    {/*<div className={'question__name'}>*/}
                        <span>{'نام'}</span>
                        <input type="text" value={''}/>
                    {/*</div>*/}
                    {/*<div className={'question__phone'}>*/}
                        <span>{'شماره همراه'}</span>
                        <input type="phone" value={''}/>
                    {/*</div>*/}
                    {/*<div className={'question__title'}>*/}
                        <span>{'عنوان'}</span>
                        <input type="text" value={''}/>
                    {/*</div>*/}
                    {/*<div className={'question__describe'}>*/}
                        <span>{'متن'}</span>
                        <textarea/>
                    {/*</div>*/}
                </div>
                <div className={'question__send'}>
                    <button className={'question__send'}>{'ارسال'}</button>
                </div>
            </div>

            <div className={'about-us'}>
                <h3 className={'about-us__title'}>{'درباره ما'}</h3>
                <p className="about-us_describe">
                    {_.init('footer_aboutUs_describe1')}
                    <b>{'گیاهستان'}</b>
                    {_.init('footer_aboutUs_describe2')}
                </p>
            </div>
            {/*<Link to={'/'}>Home</Link>*/}
            {/*<br/>*/}
            {/*<Link to={'/register'}>register</Link>*/}
            {/*<br/>*/}
            {/*<Link to={'/plant/1'}>plant</Link>*/}
            {/*<br/>*/}
            {/*{!!Storage.getUser()?.is_staff && <Link to={'/create-plant'}>create plant</Link>}*/}
            {/*<br/><br/>*/}
            {/*i'm Footer*/}
        </div>
    );
}
export default Footer;