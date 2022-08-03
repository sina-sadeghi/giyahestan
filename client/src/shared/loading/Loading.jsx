import './loading.scss';
import React from 'react';

const Loading = type => {

    // with Redux set loading param
    //ToDo:: لودینک app.js رو با لودینگ دیگر صفحات و با لودینگ fetch شدن اطلاعات از سرور جدا کنید


    return (
        <div className={'loading'}>
            <div className={'loading__container'}>
                <div className="lds-ring">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        </div>
    )
};
export default Loading;