import React from 'react';
import './footer.scss';
import {Link} from "react-router-dom";
import Storage from '../../../../core/services/Storage';


const Footer = () => {
    return (
        <div className={'footer'}>
            <Link to={'/'}>Home</Link>
            <br/>
            <Link to={'/register'}>register</Link>
            <br/>
            <Link to={'/plant/1'}>plant</Link>
            <br/>
            {!!Storage.getUser()?.is_staff && <Link to={'/create-plant'}>create plant</Link>}
            <br/><br/>
            i'm Footer
        </div>
    );
}
export default Footer;