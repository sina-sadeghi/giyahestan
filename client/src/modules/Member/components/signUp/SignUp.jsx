import './signUp.scss';
import './signUp-device.scss';
import React, {useState, useEffect} from 'react';
import {default as _} from "../../../../core/services/Translate";
import plant from '../../../../assets/image/plant.jpg';
import Field from "../../../../shared/field/Field";
import Validation from "../../../../core/services/Validation";
import Button from "../../../../shared/button/Button";
import {statusField} from '../../../../core/constants/StatusFields';
import {Link} from "react-router-dom";
import Account from '../../../../core/api/account/account';
import Storage from '../../../../core/services/Storage';

let delay = null
const account = new Account()

const SignUp = props => {

    const typesPass = {
        signUp: 0,
        login: 1,
    }

    const [fields, setFields] = useState([
        {label: _.init('lbl_sign_up__username_label'), value: '', validations: []},
        {label: _.init('lbl_sign_up__password_label'), value: '', validations: ['required', 'length']},
    ])
    const [fieldsStatus, setFieldsStatus] = useState([{code: statusField.empty}, {code: statusField.empty}])
    const [passType, setPassType] = useState(null)


    useEffect(() => {
        clearTimeout(delay)

        if (fields[0].value.slice(-4) === '.com') {
            const error = Validation.validate([{
                label: _.init('lbl_sign_up__username_label'),
                value: fields[0].value,
                validations: ['email']
            }])
            if (error[0].code === statusField.error)
                setFieldsStatus([error[0], {code: statusField.empty}])
            else {
                setFieldsStatus([{code: statusField.empty}, {code: statusField.empty}])
                getTypeLogin(fields[0].value)
            }
        }

        if (fieldsStatus[0].code === statusField.success){
            setFieldsStatus([{code: statusField.empty}, {code: statusField.empty}])
            setPassType(null)
        }

    }, [fields[0].value])



    const updateValue = (index, value) => {
        const fieldsLocal = [...fields]
        fieldsLocal[index].value = value
        setFields([...fieldsLocal])
    }


    const getTypeLogin = value => {
        setFieldsStatus([{code: statusField.loading}, {code: statusField.empty}])

        account.signUpOrLogin({
            email: fields[0].value
        }).then(res => {
            if (res.Membership)
                setPassType(typesPass.login)
            else
                setPassType(typesPass.signUp)
            setFieldsStatus([{code: statusField.success}, {code: statusField.empty}])
        }).catch(err => {
            console.error(err)
            setFieldsStatus([{code: statusField.success}, {code: statusField.empty}])
        })
    }


    const action = () => {
        const data = {
            email: fields[0].value,
            password: fields[1].value,
        }

        if(passType === typesPass.login) {
            props.loading(true);
            account.signUpLogin(data).then(res => {
                const {token} = res
                const user = {
                    email: res.email,
                    is_staff: res.is_staff,
                    user_id: res.user_id,
                }
                props.alert({type: 'suc', message: res.message})
                props.loading(false)
                Storage.setUser(user)
                Storage.setToken(token)
            }).catch(err => {
                console.error(err)
                props.loading(false);
                props.alert({type: 'err', message: err.message})
            })
        }

        else {
            const statuses = Validation.validate(fields)
            setFieldsStatus(statuses)
            if (!statuses.find(_status => _status.code === statusField.error)) {
                props.loading(true);
                account.signUpLogin(data).then(res => {
                    props.alert({type: 'suc', message: res.message})
                    props.loading(false);
                }).catch(err => {
                    console.error(err)
                    props.loading(false);
                    props.alert({type: 'err', message: err.message})
                })
            }
        }
    }






    return (
        <div className={"sign-up"}>
            <img src={plant} alt={'background'} className={'sign-up__background'}/>
            <div className={"form-box"}>
                <p className={"form-box__title"}>
                    {_.init('lbl_sign_up__title')}
                    {passType !== null && <smile> (
                        {passType === 1 && 'ورود'}
                        {passType === 0 && 'ثبت نام'}
                        )</smile>}
                </p>
                <Field
                    key={1}
                    type={'text'}
                    label={_.init('lbl_sign_up__username_label')}
                    icon={'fa-regular fa-envelope'}
                    description={_.init('lbl_sign_up__username_description')}
                    status={fieldsStatus[0]}
                    value={fields[0].value}
                    change={e => fieldsStatus[0].code !== statusField.loading ? updateValue(0, e.target.value.trim()) : null}
                />

                {passType in [0, 1] &&
                <Field
                    key={2}
                    type={'password'}
                    label={_.init('lbl_sign_up__password_label')}
                    icon={passType === typesPass.signUp ? 'fa-regular fa-lock' : 'fa-regular fa-unlock'}
                    description={_.init(`lbl_sign_up__password_description___type_${passType}`)}
                    status={fieldsStatus[1]}
                    value={fields[1].value}
                    change={e => updateValue(1, e.target.value.trim())}
                />}

                {passType !== null &&
                <Button type={passType in [0, 1] ? 'primary' : 'disabled'} action={action}>
                    {passType === 1 && 'ورود'}
                    {passType === 0 && 'ارسال ایمیل'}
                </Button>
                }
                {passType === 1 && <Link to={'reset-password'} className={'sign-up__forget-password'}>فراموشی رمز عبور</Link>}
            </div>
        </div>
    );


}
export default SignUp;