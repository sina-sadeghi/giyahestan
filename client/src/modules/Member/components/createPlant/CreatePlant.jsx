import './createPlant.scss';
import React, {useState, useEffect, useRef} from 'react';


const CreatePlant = props => {

    const tagsList = [
        {
            id: 1,
            name: 'دارویی',
            color: '#2dbb31'
        },
        {
            id: 2,
            name: 'آپارتمانی',
            color: '#cf9710'
        },
        {
            id: 3,
            name: 'میوه ای',
            color: '#e77016'
        }
    ]

    // const maintenanceList =
    /*let maintenanceList = [
            'آب',
            'خاک',
            'آب و هوا',
            'حساسیت ها'
    ]*/

    const inputFileRef = useRef(null)
    const linkFileRef = useRef(null)
    const [tags, setTags] = useState([])
    const [openBoxTags, setOpenBoxTags] = useState(false)
    const [images, setImages] = useState([])
    const [maintenanceList, setMaintenanceList] = useState([
        {
            enable: false,
            text: '',
            type: 'آب'
        },{
            enable: false,
            text: '',
            type: 'خاک'
        },{
            enable: false,
            text: '',
            type: 'آب و هوا'
        },{
            enable: false,
            text: '',
            type: 'حساسیت ها'
        },
    ])

    const onClickCheckBoxMaintenance = index => {
        const maintenance = maintenanceList;
        maintenance[index].enable = !maintenance[index].enable;
        setMaintenanceList([...maintenance]);
    }

    const setUrlImage = (e, type, index) => {
        // if(linkFileRef.current.value is link)   todo:::
        if((type === 'input' && e.key ==='Enter') || type === 'button') {
            setImages([...images, linkFileRef.current.value])
            linkFileRef.current.value = ''
        }
        // -------------

        if(type === 'errorImage') {
            alert('عکس وارد شده مشکل دارد.')
            setImages(images.filter((img, ind) => ind !== index))
        }
    }

    const initTagBox = props => {
        return <>
                <i className={`fa-regular fa-plus tag__add-icon 
                ${tagsList.length === tags.length ? 'tag__add-icon_disable' : openBoxTags ? 'tag__add-icon_turn' : ''}`}
                   onClick={() => setOpenBoxTags(!openBoxTags)}/>

            <div className="tag__selected-box">
                {tags.map(tag =>
                    <span style={{background: tag.color}} className={'tag__selected'}
                          onClick={() => setTags(tags.filter(x => x.id !== tag.id))}>
                        <span className={'tag__name-selected'}>{tag.name}</span>
                        <i className="fa-regular fa-xmark tag__close-selected"/>
                    </span>
                )}
            </div>

            {tagsList.length > tags.length &&
                <div style={{display: openBoxTags ? 'block' : 'none'}} className={'tag__unselect-box'}>
                    {tagsList.map(tag => {
                        if (tags.find(x => x.id === tag.id))
                            return null
                        return <div style={{background: tag.color}} onClick={() => setTags([...tags, tag])}
                                    className={'tag__unselect'}>{tag.name}</div>
                    })}
                </div>
            }
        </>
    }

    const initMaintenance = (props, index) => {
        return <div className={'maintenance__item-box'}>
            <label className="maintenance__item-checkbox">
                <input checked={props.enable} type="checkbox" onClick={e => onClickCheckBoxMaintenance(index)}/>
                    <div className="maintenance__checkmark"/>
            </label>
            <span>{props.type}</span>
            <input type={'text'}
                   className={`maintenance__item-input ${props.enable ? '' :'maintenance__item-input-hidden'}`}/>
        </div>
    }

    return <div className="create-plant">
        <h2 className={'title'}>{'ایجاد گیاه جدید در سایت'}</h2>
        <div className={'required-arm'}>{'* یعنی اجباری'}</div>
        <form className={'form'}>
            <span className={'name filed-text'}>
                <input required type={'text'} className={'name__input'}/>
                <label className={'name__label'}>{'* نام کوتاه'}</label>
            </span>
            <div className={'tag'}>
                <div className={'tag__label'}><label>{'برچسب ها'}</label></div>
                <div className={'tag__box'} onBlur={() => setOpenBoxTags(false)} tabIndex={0}>{initTagBox()}</div>
            </div>
            <div className={'full-name filed-text'}>
                <input required type={'text'}/>
                <label>{'* نام کامل'}</label>
            </div>
            <div className={'description'}>
                <div className={'filed-text'}>
                    <textarea required/>
                    <label>{'* توضیحات'}</label>
                </div>
                <div className={'description__viki'}>
                    <span>{'لینک ویکی پدیا'}</span>
                    <input required type="url" dir={'ltr'}/>
                    <i className="fa-solid fa-check"/>
                </div>
            </div>
            <div className={'images'}>
                <label className={'image__label'}>{'* تصویر ها (حداقل 1 و حداکثر 4)'}</label>
                <input hidden type={'file'} ref={inputFileRef} accept="image/png, image/jpeg"
                       onChange={e => setImages([...images, URL.createObjectURL(e.target.files[0])])}/>
                <div className={'images__boxes'}>
                    {images.map((image, index) => <span>
                        <i className="fa-regular fa-xmark image__close"
                           onClick={() => setImages(images.filter((img, ind) => ind !== index))}/>
                        <img src={image} alt={`image-${index}`} className={'image-item'} onError={e => setUrlImage(e, 'errorImage', index)}/>
                    </span>)}

                    {images.length < 4 &&
                    <div className={'image__add'} onClick={() => inputFileRef.current.click()}>
                        <i className="fa-thin fa-circle-plus"/>
                        <span className={'image__add-box'} onClick={e => e.stopPropagation()}>
                            <input required type={"url"} dir={'ltr'}
                                   ref={linkFileRef} onKeyDown={e => setUrlImage(e, 'input')}/>
                            <i className={'fa-solid fa-check'} onClick={e => setUrlImage(e, 'button')}/>
                        </span>
                    </div>
                    }
                </div>
            </div>
            <div className={'maintenance'}>
                <label className={'maintenance__label'}>{'شرایط نگهداری'}</label>
                <div className={'maintenance__box'}>
                    {maintenanceList.map(initMaintenance)}
                    <hr/>
                    <div className={'maintenance__item-box'}>
                        {/*<input type={'checkbox'} value={'نحوه تکثیر'}/>*/}
                        <span>{'نحوه تکثیر'}</span>
                        <select>
                            {[
                                'هیچکدام',
                                'قلمه زدن',
                                'پیوند زدن',
                                'خوابانیدن',
                                'پاجوش',
                            ].map(item => <option value={item}>{item}</option>)}
                        </select>
                    </div>
                </div>
            </div>
        </form>
    </div>
}
export default CreatePlant;