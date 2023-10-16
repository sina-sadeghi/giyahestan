import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './page404.scss';

const Page404 = props => {
    const [eyes, setEyes] = useState({'transform': 'translate('+ -47 +'%,-'+ 0 +'%)'})

    const eyesMove = event => {
        const yAxis = 150 - 300 * event.pageY / window.innerHeight;
        const xAxis = event.pageX / window.innerWidth * 100 - 100;
        setEyes({'transform': 'translate('+ xAxis +'%,-'+ yAxis +'%)'})
    }

    return <section className={'page404'} onMouseMove={eyesMove}>
        <div className="box">
            <div className="box__ghost">
                <div className="symbol"/>
                <div className="symbol"/>
                <div className="symbol"/>
                <div className="symbol"/>
                <div className="symbol"/>
                <div className="symbol"/>

                <div className="box__ghost-container">
                    <div className="box__ghost-eyes" style={eyes}>
                        <div className="box__eye-left"/>
                        <div className="box__eye-right"/>
                    </div>
                    <div className="box__ghost-bottom">
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
                <div className="box__ghost-shadow"/>
            </div>

            <div className="box__description">
                <div className="box__description-container">
                    <div className="box__description-title">404</div>
                    <div className="box__description-text">{'این صفحه از سایت وجود ندارد'}</div>
                </div>

                <Link to="/" target="_blank" className="box__button">{'برگشتن به صفحه اصلی'}</Link>

            </div>

        </div>
    </section>
}
export default Page404;