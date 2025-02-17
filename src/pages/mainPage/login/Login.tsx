import { useRef, useState } from "react"

import logo from '../../../source/logo.png';
import './Login.css';

export default function Login(props: any) {
    const {socket, setPage} = props;

    const [loginStatus, setLoginStatus] = useState(true);

    const login = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);

    const cbLogin = (data: object | null) => {
        if (data) setLoginStatus(setPage('GamePage'));
        else setLoginStatus(false);
    }

    const loginHandler = () => {
        if (login.current?.value && password.current?.value){
            socket.login(login.current.value, password.current.value, cbLogin);
        }
    }

    return (
        <div className="login-image">
            <div className="login-window">
                <div className='login-logo'>
                    <img className='login-logo-image' src={logo}/>
                </div>
                <div className="window-elems">
                <div>
                    <h2 className="h2-login">Sea Runner</h2>
                    <div className="inputbox">
                        <i className="icon-user"></i>
                        <input ref={login} placeholder=' ' required/>    
                        <label htmlFor='login'>Логин</label>
                    </div>
                    <div className="inputbox" id="passIn"> 
                        <i className="icon-lock"></i>   
                        <input  type="password" ref={password} placeholder=' ' required/>
                        <label htmlFor='password'>Пароль</label>
                    </div>
                    <button className="loginButton" onClick={loginHandler}>Войти</button>
                    <p className={'errorLogin' + ((loginStatus) ? ' hide' : '')}>Неверный логин или пароль</p>
                    </div>
                </div>
            </div>
        </div>
    )
}