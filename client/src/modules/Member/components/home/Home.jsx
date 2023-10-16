import './home.scss'
import './home-device.scss'
import React, {useState} from 'react';
import Image from "../../../../shared/image/Image";
import similarPlant1 from "../../../../assets/image/6.jpg";
import similarPlant2 from "../../../../assets/image/7.jpg";
import similarPlant3 from "../../../../assets/image/8.jpg";
import similarPlant4 from "../../../../assets/image/9.jpg";
import similarPlant5 from "../../../../assets/image/10.jpg";
import similarPlant6 from "../../../../assets/image/11.jpg";
import similarPlant7 from "../../../../assets/image/12.jpg";
import similarPlant8 from "../../../../assets/image/13.jpg";
import similarPlant9 from "../../../../assets/image/14.jpg";
import similarPlant10 from "../../../../assets/image/20.jpg";
import similarPlant11 from "../../../../assets/image/16.jpg";
import similarPlant12 from "../../../../assets/image/19.jpg";
import similarPlant13 from "../../../../assets/image/15.jpg";
import similarPlant14 from "../../../../assets/image/17.jpg";
import similarPlant15 from "../../../../assets/image/18.jpg";
import amazing1 from "../../../../assets/image/a1.jpg";
import amazing2 from "../../../../assets/image/a2.jpg";
import amazing3 from "../../../../assets/image/a3.jpg";
import amazing4 from "../../../../assets/image/a4.jpg";
import amazing5 from "../../../../assets/image/a5.jpg";
import amazing6 from "../../../../assets/image/a6.jpg";
import groups1 from "../../../../assets/image/g1.jpg";
import groups2 from "../../../../assets/image/g2.jpg";
import groups3 from "../../../../assets/image/g3.jpg";
import groups4 from "../../../../assets/image/g4.jpg";
import groups5 from "../../../../assets/image/g5.jpg";
import logo from '../../../../assets/image/logo.png';
import Card from "../../../../shared/card/Card";
import _ from "../../../../core/services/Translate";
import en from "../../../../lang/en";


const amazingDescribe = [
    _.init( 'home_amazingDescribe_1'),
    _.init( 'home_amazingDescribe_2'),
    _.init( 'home_amazingDescribe_3'),
    _.init( 'home_amazingDescribe_4'),
    _.init( 'home_amazingDescribe_5'),
    _.init( 'home_amazingDescribe_6'),
]

const article = {
    title: _.init( 'home_article_title1'),
    date: _.init( 'home_article_yesterday'),
    src: '',
    describe: _.init( 'home_article_describe1')
}
const article2 = {
    title: _.init( 'home_article_title2'),
    date: `3 ${_.init( 'home_article_date_days_ago')}`,
    src: '',
    describe: _.init( 'home_article_describe2')
}
const article3 = {
    title: _.init( 'home_article_title3'),
    date: `5 ${_.init( 'home_article_date_days_ago')}`,
    src: '',
    describe: _.init( 'home_article_describe3')
}

const questions = [
    _.init( 'home_questions1'),
    _.init( 'home_questions2'),
    _.init( 'home_questions3'),
    _.init( 'home_questions4'),
    _.init( 'home_questions5'),
    _.init( 'home_questions6'),
    _.init( 'home_questions7'),
    _.init( 'home_questions8'),
    _.init( 'home_questions9'),
]

const Home = props => {

    const [leftQuestion, setLeftQuestion] = useState(true)
    const [rightQuestion, setRightQuestion] = useState(false)
    const [leftPopular, setLeftPopular] = useState(true)
    const [rightPopular, setRightPopular] = useState(false)
    const [leftRecent, setLeftRecent] = useState(true)
    const [rightRecent, setRightRecent] = useState(false)

    const initStars = <>
        <i className="fa-solid fa-star"/>
        <i className="fa-solid fa-star"/>
        <i className="fa-solid fa-star-half-stroke"/>
        <i className="fa-regular fa-star"/>
        <i className="fa-regular fa-star"/>
    </>

    const initGroup = (name, src, color) => {

        const colorStyle = {background: color}

        return (
            <div className={'group__item'} style={colorStyle}>
                <Image src={src} alt={'name'} className={'group__image'}/>
                <p className="group__name">{name}</p>
            </div>
        )
    }

    const initSimilarPlant = (name, src, ribbon) => {
        return (
            <div className={'similar-plant__item'}>
                {!!ribbon && <div className="similar-plant__ribbon-wrapper">
                    <div className="similar-plant__ribbon">{ribbon}</div>
                </div>}

                <Image src={src} alt={name} className={'similar-plant__image'}/>
                <span className={'similar-plant__score'}>{initStars}</span>
                <p className="similar-plant__name">{name}</p>
            </div>
        )
    }

    const intiAmazingPlants = (src, describe) => {
        return <div className="amazing__items">
            <Image src={src} alt={'plant'} className="amazing__img"/>
            <div className="amazing__describe">{describe}</div>
        </div>
    }

    const initArticle = (title, date, describe, src) => {
        return <div className="article__item">
            <h3 className="article__item-title">{title}</h3>
            <hr/>
            <div className="article__date">{date}</div>
            <div className="article__item-body">
                <p className="article__describe">{describe}</p>
                <Image alt={'article'} src={src} className="article__img"/>
                <button className="article__item-more">{'ادامه'}</button>
            </div>
        </div>
    }

    const actionMoveQuestion = to => {
        const question = document.getElementById('questionBody')

        //todo ممکنه اصلا فلش چپ و راست نیاز نباشن(تعداد آیتم ها مک باشه)
        if (to === 'left') {
            setRightQuestion(true)
            if (question?.scrollLeft - 250 <= -(question?.scrollWidth - question?.clientWidth - 2))
                setLeftQuestion(false)
        } else if (to === 'right') {
            setLeftQuestion(true)
            if (question?.scrollLeft + 250 > -1)
                setRightQuestion(false)
        }

        if (to === 'left')
            question?.scroll({
                left: question?.scrollLeft - 250,
                behavior: "smooth",
            })
        if (to === 'right')
            question?.scroll({
                left: question?.scrollLeft + 250,
                behavior: "smooth",
            })
    }

    const actionMovePopular = to => {
        const popular = document.getElementById('popularBody')

        //todo ممکنه اصلا فلش چپ و راست نیاز نباشن(تعداد آیتم ها مک باشه)
        if (to === 'left') {
            setRightPopular(true)
            if (popular?.scrollLeft - 250 <= -(popular?.scrollWidth - popular?.clientWidth - 2))
                setLeftPopular(false)
        } else if (to === 'right') {
            setLeftPopular(true)
            if (popular?.scrollLeft + 250 > -1)
                setRightPopular(false)
        }

        if (to === 'left')
            popular?.scroll({
                left: popular?.scrollLeft - 250,
                behavior: "smooth",
            })
        if (to === 'right')
            popular?.scroll({
                left: popular?.scrollLeft + 250,
                behavior: "smooth",
            })
    }

    const actionMoveRecent = to => {
        const recent = document.getElementById('recentBody')

        //todo ممکنه اصلا فلش چپ و راست نیاز نباشن(تعداد آیتم ها مک باشه)
        if (to === 'left') {
            setRightRecent(true)
            if (recent?.scrollLeft - 250 <= -(recent?.scrollWidth - recent?.clientWidth - 2))
                setLeftRecent(false)
        } else if (to === 'right') {
            setLeftRecent(true)
            if (recent?.scrollLeft + 250 > -1)
                setRightRecent(false)
        }

        if (to === 'left')
            recent?.scroll({
                left: recent?.scrollLeft - 250,
                behavior: "smooth",
            })
        if (to === 'right')
            recent?.scroll({
                left: recent?.scrollLeft + 250,
                behavior: "smooth",
            })
    }

    return <sction className={'home'}>

        <div className={'board'}>
            <Image src={logo} alt={logo} className={'board__background'}/>
            <h2>{'گیاهستان'}</h2>
            <p className={'board__describe1'}>{'هر اطلاعاتی در مورد گیاهان رو اینجا پیدا کن'}</p>
            <p className={'board__describe2'}>{'اینجا میتونی بفهمی هرگیاهی دقیقا چی هست. تازه تو قسمت مقاله ها چیزای جالب ترم پیدا میکنی و میتونی نظرتو بنویسی.'}</p>
            <Image src={similarPlant9} alt={'plant'} className={'board__img1'}/>
            <Image src={similarPlant10} alt={'plant'} className={'board__img2'}/>
            <Image src={similarPlant11} alt={'plant'} className={'board__img3'}/>
            <Image src={similarPlant12} alt={'plant'} className={'board__img4'}/>
        </div>

        <hr/>

        <div className="group">
            <p className="group__title">{'دسته بندی ها'}</p>

            <div className="group__body">
                {initGroup('کاکتوس ها', groups1, 'rgb(230 81 31)')}
                {initGroup('گیاهان دارویی', groups2, 'rgb(51 160 27)')}
                {initGroup('درخت ها', groups3, 'rgb(54 146 5)')}
                {initGroup('گیاهان آپارتمانی', groups4, 'rgb(42 255 91)')}
                {initGroup('گیاهان حساس', groups5, 'rgb(237 237 23)')}
            </div>
        </div>

        <hr/>

        <div className="similar-plant">
            <p className="similar-plant__title">{'پرطرفدارها'}</p>

            <div className={'similar-plant__body'} id={'popularBody'}>
                {rightPopular && <div className="popular__go-right" onClick={() => actionMovePopular('right')}>
                    <i className="fa-solid fa-angle-left"/>
                </div>}

                {initSimilarPlant('گیاه ساکولنت تاپسی توروی', similarPlant1)}
                {initSimilarPlant('گیاه کاکتوس کریسمس زرد', similarPlant2)}
                {initSimilarPlant('گیاه آمریکایی دیش باغچه', similarPlant3)}
                {initSimilarPlant('بورس گیاهی آمریکا', similarPlant4)}
                {initSimilarPlant('گل ستناس', similarPlant5)}
                {initSimilarPlant('گل ستناس', similarPlant6)}
                {initSimilarPlant('گل ستناس', similarPlant7)}
                {initSimilarPlant('گل ستناس', similarPlant8)}
                {leftPopular && <div className={'popular__go-left'} onClick={() => actionMovePopular('left')}>
                    <i className="fa-solid fa-angle-right"/>
                </div>}
            </div>
        </div>

        <hr/>

        <div className="similar-plant">
            <p className="similar-plant__title">{'اخیرا افزوده شده'}</p>

            <div className={'similar-plant__body'} id={'recentBody'}>
                {rightRecent && <div className="popular__go-right" onClick={() => actionMoveRecent('right')}>
                    <i className="fa-solid fa-angle-left"/>
                </div>}
                {initSimilarPlant('گیاه ساکولنت تاپسی توروی', similarPlant13)}
                {initSimilarPlant('گیاه کاکتوس کریسمس زرد', similarPlant14)}
                {initSimilarPlant('نزینا لبای', similarPlant8)}
                {initSimilarPlant('بورس گیاهی آمریکا', similarPlant7)}
                {initSimilarPlant('گل ستناس', similarPlant6)}
                {initSimilarPlant('گل ستناس', similarPlant6)}
                {initSimilarPlant('گل ستناس', similarPlant6)}
                {initSimilarPlant('گل ستناس', similarPlant6)}
                {initSimilarPlant('گل ستناس', similarPlant6)}
                {leftRecent && <div className={'popular__go-left'} onClick={() => actionMoveRecent('left')}>
                    <i className="fa-solid fa-angle-right"/>
                </div>}
            </div>
        </div>

        <hr/>

        <div className="amazing">
            <p className="amazing__title">{'گیاهان عجیب غریب'}</p>

            <div className="amazing__body">
                {intiAmazingPlants(amazing1, amazingDescribe[0])}
                {intiAmazingPlants(amazing2, amazingDescribe[1])}
                {intiAmazingPlants(amazing3, amazingDescribe[2])}
                {intiAmazingPlants(amazing4, amazingDescribe[3])}
                {/*{intiAmazingPlants(amazing5,amazingDescribe[4])}*/}
                {intiAmazingPlants(amazing6, amazingDescribe[5])}
            </div>
        </div>

        <hr/>

        <div className="article">
            <p className="article__title">{'مقاله های تازه'}</p>

            <div className="article__body">
                {initArticle(article.title, article.date, article.describe, similarPlant15)}
                {initArticle(article2.title, article2.date, article2.describe, similarPlant3)}
                {initArticle(article3.title, article3.date, article3.describe, similarPlant13)}
            </div>
            <div className={'article__more'}>
                <button>{'لیست مقاله ها'}</button>
            </div>
        </div>

        <hr/>

        <div className="question">
            <p className="question__title">{'سوالات متداول'}</p>

            <div className="question__body" id={'questionBody'}>
                {rightQuestion &&
                <i className="fa-solid fa-angle-left question__go-right" onClick={() => actionMoveQuestion('right')}/>}
                {questions.map((item) => {
                    return <div className='question__item'>
                        {item}
                    </div>
                })}
                {leftQuestion &&
                <i className="fa-solid fa-angle-right question__go-left" onClick={() => actionMoveQuestion('left')}/>}
            </div>
        </div>

        {/*<hr/>*/}

        {/*<Card image={similarPlant1} name={'بورس گیاهی آمریکا'} score={3} id={1}/>*/}

    </sction>
}
export default Home;