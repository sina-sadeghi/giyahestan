import React, {useState} from 'react';
import Header from '../../modules/Member/components/header/Header';
import Footer from "../../modules/Member/components/footer/Footer";
import Storage from '../../core/services/Storage';

const MemberLayout = (props) => {

    const [isLogin, setIsLogin] = useState(!!Storage.getToken())

    return (
        <>
            {props.header && <Header/>}
            <main>
                {props.children}
            </main>
            {props.footer && <Footer/>}
        </>
    )
}
export default MemberLayout;