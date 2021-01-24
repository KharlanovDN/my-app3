import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControl/FormsControl.module.css"
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


const maxLength = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       validate={[required, maxLength]}
                       component={Input}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       validate={[required]}
                       component={Input}
                       type={'password'}
                />
            </div>
            <div>
                <Field name={'rememberMe'}
                       component={'input'}
                       type={'checkbox'}
                />remember me
            </div>
            {
                props.error && <div className={style.formSummaryError}>
                    {props.error}</div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth)
        return <Redirect to={"/profile"}/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);